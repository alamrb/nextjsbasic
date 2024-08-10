import Link from "next/link";

export default function NotFound() {
    return (
        <div>
            <h1>Page Not Found</h1>
            <p>Sorry, but the page you're looking for doesn't exist.</p>
            <Link href="/">Go to the Home Page</Link>
        </div>
    );
}