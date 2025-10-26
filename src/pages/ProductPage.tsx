import { Button, Container } from "react-bootstrap";
import { useLocation, Navigate } from "react-router-dom";

const ProductPage = () => {
    const { state } = useLocation();
    const item = state || {};

    if (!state) {
        return <Navigate to="404" replace />;
    }

    return (
        <Container fluid className="px-4 main">
            <Container fluid className="item-grid p-0">
                <span className="text-center">
                    <h3 className="text-nowrap">{item.title}</h3>
                    <p>{item.color}</p>
                    <p className="text-start description">{item?.description}</p>
                </span>
                <img
                    src={item.img}
                    alt={item.title}
                />
                <div className="d-flex">
                    <Button className="fw-bold" variant="info">Add to cart — ${item.price}.00</ Button>
                </div>
            </Container>
        </Container>
    );
};

export default ProductPage;
