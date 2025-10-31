import { Card } from "react-bootstrap";
import { Link } from "react-router-dom";

interface CardProps {
    title: str;
    color: str;
    price: str;
    img: str;
    description: str,
}

const ProductCard = ({ title, color, price, img, description }: CardProps) => {
    return (
        <Card
            as={Link}
            to="products"
            state={{ title, color, price, img, description }}
            style={{ textDecoration: "none" }}
        >
            <Card.Img variant="top" src={img} />
            <Card.Body>
                <Card.Title
                    style={{ textDecoration: "none" }}
                >
                    {title}
                </Card.Title>
                <Card.Text>{color}</Card.Text>
                <Card.Text>${price}.00</Card.Text>
            </Card.Body>
        </Card>
    );
};

export default ProductCard;
