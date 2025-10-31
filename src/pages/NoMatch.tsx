import { Container, Button } from "react-bootstrap";
import { Link } from "react-router-dom";

const NoMatch = () => {
    return (
        <Container fluid className="px-4 main d-flex justify-content-center align-items-center gap-2">
            <code className="display-1" style={{ color: "#0d6efd" }}>404</code>
            <h1 className="mb-3 mt-0">Page not found</h1>
            {/* @ts-ignore */}
            <Button as={Link} to={"/"} size="lg">Go back to home</Button>
        </Container>
    );
};

export default NoMatch;
