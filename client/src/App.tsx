import {
    Navigate,
    Route,
    Routes,
} from "react-router-dom";

import "./App.css";

import Header from "./components/Header/Header";
import Hero from "./components/Hero/Hero";
import Services from "./components/Services/Services";
import Projects from "./components/Projects/Projects";
import About from "./components/About/About";
import Process from "./components/Process/Process";
import Plans from "./components/Plans/Plans";
import Contact from "./components/Contact/Contact";
import Footer from "./components/Footer/Footer";
import PageTransition from "./components/PageTransition/PageTransition";
import ProjectCursor from "./components/ProjectCursor/ProjectCursor";
import ScrollToHash from "./components/ScrollToHash/ScrollToHash";
import ProjectDetailsPage from "./pages/ProjectDetailsPage";
import FAQ from "./components/FAQ/FAQ";

function HomePage() {
    return (
        <>
            <Header />

            <main>
                <Hero />
                <Services />
                <Projects />
                <About />
                <Process />
                <Plans />
                <FAQ />
                <Contact />
            </main>
        </>
    );
}

function App() {
    return (
        <>
            <ScrollToHash />
            <PageTransition />
            <ProjectCursor />

            <Routes>
                <Route
                    path="/"
                    element={<HomePage />}
                />

                <Route
                    path="/projects/:slug"
                    element={<ProjectDetailsPage />}
                />

                <Route
                    path="*"
                    element={
                        <Navigate
                            to="/"
                            replace
                        />
                    }
                />
            </Routes>

            <Footer />
        </>
    );
}

export default App;