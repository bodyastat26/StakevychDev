import {
    useState,
    type ChangeEvent,
    type FormEvent,             
} from "react";

import {
    ContactApiError,
    sendContactRequest,
    type ContactRequest,
} from "../../api/contactApi";

import { useTranslations } from "../../localization/useTranslations";

type SubmissionStatus =
    | "idle"
    | "submitting"
    | "success"
    | "error"
    | "rate-limited";

type ContactField = keyof ContactRequest;
type FieldErrors = Partial<Record<ContactField, string>>;

const initialFormData: ContactRequest = {
    name: "",
    email: "",
    company: "",
    message: "",
};

function Contact() {
    const text = useTranslations();

    const [formData, setFormData] =
        useState<ContactRequest>(initialFormData);

    const [fieldErrors, setFieldErrors] =
        useState<FieldErrors>({});

    const [status, setStatus] =
        useState<SubmissionStatus>("idle");

    function updateField(
        event: ChangeEvent<HTMLInputElement | HTMLTextAreaElement>,
    ) {
        const field = event.target.name as ContactField;
        const value = event.target.value;

        setFormData(current => ({
            ...current,
            [field]: value,
        }));

        setFieldErrors(current => ({
            ...current,
            [field]: undefined,
        }));

        if (status !== "idle") {
            setStatus("idle");
        }
    }

    function validateForm(): FieldErrors {
        const errors: FieldErrors = {};

        const name = formData.name.trim();
        const email = formData.email.trim();
        const company = formData.company.trim();
        const message = formData.message.trim();

        if (!name) {
            errors.name =
                text.contact.validation.nameRequired;
        } else if (name.length < 2 || name.length > 100) {
            errors.name =
                text.contact.validation.nameLength;
        }

        if (!email) {
            errors.email =
                text.contact.validation.emailRequired;
        } else if (!/^[^\s@]+@[^\s@]+\.[^\s@]+$/.test(email)) {
            errors.email =
                text.contact.validation.emailInvalid;
        }

        if (company.length > 150) {
            errors.company =
                text.contact.validation.companyLength;
        }

        if (!message) {
            errors.message =
                text.contact.validation.messageRequired;
        } else if (
            message.length < 10 ||
            message.length > 4000
        ) {
            errors.message =
                text.contact.validation.messageLength;
        }

        return errors;
    }

    function mapServerErrors(
        serverErrors: Record<string, string[]>,
    ): FieldErrors {
        const errors: FieldErrors = {};

        for (const [serverField, messages] of Object.entries(serverErrors)) {
            const field =
                serverField.charAt(0).toLowerCase() +
                serverField.slice(1);

            if (
                field === "name" ||
                field === "email" ||
                field === "company" ||
                field === "message"
            ) {
                errors[field] = messages[0];
            }
        }

        return errors;
    }

    async function handleSubmit(event: FormEvent<HTMLFormElement>) {
        event.preventDefault();

        const errors = validateForm();

        if (Object.keys(errors).length > 0) {
            setFieldErrors(errors);
            setStatus("error");
            return;
        }

        setStatus("submitting");
        setFieldErrors({});

        try {
            await sendContactRequest({
                name: formData.name.trim(),
                email: formData.email.trim(),
                company: formData.company.trim(),
                message: formData.message.trim(),
            });

            setFormData(initialFormData);
            setStatus("success");
        } catch (error) {
            if (error instanceof ContactApiError) {
                if (error.status === 429) {
                    setStatus("rate-limited");
                    return;
                }

                if (error.status === 400) {
                    setFieldErrors(
                        mapServerErrors(error.validationErrors),
                    );
                }
            }

            setStatus("error");
        }
    }

    return (
        <section id="contact" className="contact section">
            <div className="contact-intro">
                <span className="section-label">
                    {text.contact.label}
                </span>

                <h2>{text.contact.title}</h2>

                <p>{text.contact.description}</p>

                <a href="mailto:hello@statkevych.dev">
                    hello@statkevych.dev
                </a>
            </div>

            <form
                className="contact-form"
                onSubmit={handleSubmit}
                noValidate
            >
                <div className="contact-form-row">
                    <FormField
                        id="contact-name"
                        name="name"
                        label={text.contact.name}
                        placeholder={text.contact.namePlaceholder}
                        value={formData.name}
                        error={fieldErrors.name}
                        onChange={updateField}
                        autoComplete="name"
                    />

                    <FormField
                        id="contact-email"
                        name="email"
                        type="email"
                        label={text.contact.email}
                        placeholder={text.contact.emailPlaceholder}
                        value={formData.email}
                        error={fieldErrors.email}
                        onChange={updateField}
                        autoComplete="email"
                    />
                </div>

                <FormField
                    id="contact-company"
                    name="company"
                    label={text.contact.company}
                    placeholder={text.contact.companyPlaceholder}
                    value={formData.company}
                    error={fieldErrors.company}
                    onChange={updateField}
                    autoComplete="organization"
                />

                <div className="form-field">
                    <label htmlFor="contact-message">
                        {text.contact.message}
                    </label>

                    <textarea
                        id="contact-message"
                        name="message"
                        placeholder={text.contact.messagePlaceholder}
                        value={formData.message}
                        onChange={updateField}
                        rows={7}
                        maxLength={4000}
                        aria-invalid={Boolean(fieldErrors.message)}
                        aria-describedby={
                            fieldErrors.message
                                ? "contact-message-error"
                                : undefined
                        }
                    />

                    {fieldErrors.message && (
                        <span
                            id="contact-message-error"
                            className="field-error"
                            role="alert"
                        >
                            {fieldErrors.message}
                        </span>
                    )}
                </div>

                <div className="contact-form-footer">
                    <p>{text.contact.agreement}</p>

                    <button
                        type="submit"
                        disabled={status === "submitting"}
                    >
                        {status === "submitting"
                            ? text.contact.submitting
                            : text.contact.submit}
                    </button>
                </div>

                {status === "success" && (
                    <p className="form-notice form-notice-success" role="status">
                        {text.contact.success}
                    </p>
                )}

                {status === "error" &&
                    Object.keys(fieldErrors).length === 0 && (
                        <p className="form-notice form-notice-error" role="alert">
                            {text.contact.error}
                        </p>
                    )}

                {status === "rate-limited" && (
                    <p className="form-notice form-notice-error" role="alert">
                        {text.contact.rateLimited}
                    </p>
                )}
            </form>
        </section>
    );
}

type FormFieldProps = {
    id: string;
    name: ContactField;
    type?: "text" | "email";
    label: string;
    placeholder: string;
    value: string;
    error?: string;
    autoComplete?: string;
    onChange: (
        event: ChangeEvent<HTMLInputElement | HTMLTextAreaElement>,
    ) => void;
};

function FormField({
                       id,
                       name,
                       type = "text",
                       label,
                       placeholder,
                       value,
                       error,
                       autoComplete,
                       onChange,
                   }: FormFieldProps) {
    const errorId = `${id}-error`;

    return (
        <div className="form-field">
            <label htmlFor={id}>{label}</label>

            <input
                id={id}
                name={name}
                type={type}
                placeholder={placeholder}
                value={value}
                onChange={onChange}
                autoComplete={autoComplete}
                aria-invalid={Boolean(error)}
                aria-describedby={error ? errorId : undefined}
            />

            {error && (
                <span
                    id={errorId}
                    className="field-error"
                    role="alert"
                >
                    {error}
                </span>
            )}
        </div>
    );
}

export default Contact;