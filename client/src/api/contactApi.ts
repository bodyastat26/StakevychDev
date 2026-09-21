export type ContactRequest = {
    name: string;
    email: string;
    company: string;
    message: string;
};

export type ContactResponse = {
    message: string;
    receivedAtUtc: string;
};

type ValidationProblemDetails = {
    title?: string;
    status?: number;
    errors?: Record<string, string[]>;
};

export class ContactApiError extends Error {
    readonly status: number;
    readonly validationErrors: Record<string, string[]>;

    constructor(
        message: string,
        status: number,
        validationErrors: Record<string, string[]> = {},
    ) {
        super(message);

        this.name = "ContactApiError";
        this.status = status;
        this.validationErrors = validationErrors;
    }
}

const apiUrl =
    import.meta.env.VITE_API_URL ?? "http://localhost:5013";

export async function sendContactRequest(
    request: ContactRequest,
): Promise<ContactResponse> {
    const response = await fetch(`${apiUrl}/api/contact`, {
        method: "POST",
        headers: {
            "Content-Type": "application/json",
        },
        body: JSON.stringify(request),
    });

    if (response.ok) {
        return await response.json() as ContactResponse;
    }

    let problem: ValidationProblemDetails | undefined;

    try {
        problem = await response.json() as ValidationProblemDetails;
    } catch {
        
    }

    throw new ContactApiError(
        problem?.title ?? "Contact request failed.",
        response.status,
        problem?.errors,
    );
} 
