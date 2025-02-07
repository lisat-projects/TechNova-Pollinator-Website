import { Link } from "react-router"

export default function ErrorPage() {
    return <>
        <h1>Error</h1>
        <p>Page not found</p>
        <Link to="/">Home</Link>
    </>
}