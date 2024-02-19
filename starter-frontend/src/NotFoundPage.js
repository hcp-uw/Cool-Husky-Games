import { Link } from "@tanstack/react-router";
import Navbar from "./components/Navbar";

export default function NotFoundPage() {
    return (
        <><Navbar />
        <main style={{backgroundColor: "beige"}} className="d-flex vh-100 flex-column align-items-center justify-content-center">
            <h1 className="display-3 text-center mt-6">
                Uh oh! The path you visited was not found.
            </h1>
            <Link to="/">Click here to go home.</Link>
        </main>
        </>
    )
}