import { Button, Container, Card } from "react-bootstrap";
import img1 from "../static/img/010-872-A_500x.png"
import img2 from "../static/img/010-875-A_500x.png"
import img3 from "../static/img/100-477-A_500x.png"
import img4 from "../static/img/010-885-A_500x.png"

const Home = () => {
    return (
        <>
            <Container fluid className="d-flex justify-content-between align-items-start mt-5 px-4">
                <h1 className="display-3 fw-semibold">Enfants Riches <br /> Déprimés</h1>
                <span>Contemporary label Enfants Riches Déprimes was established in 2012. <br />
                    Referred to as simply ERD is known for luxury one-of-a-kind pieces. <br />
                    <a className="pre">more</a>
                </span>
                <Button variant="info">Follow</Button>
            </Container >
            <Container fluid className="my-5 main-grid px-4">
                <Card>
                    <Card.Img variant="top" src={img1} />
                    <Card.Body>
                        <Card.Title>KATHOLISCHES TOOTHBRUSH T-SHIRT</Card.Title>
                        <Card.Text>
                            Faded white
                        </Card.Text>
                        <Card.Text>$950.00</Card.Text>
                    </Card.Body>
                </Card>
                <Card>
                    <Card.Img variant="top" src={img2} />
                    <Card.Body>
                        <Card.Title>DOUBLE THE LENGTH OF SOLSTICE RAGLAN T-SHIRT</Card.Title>
                        <Card.Text>
                            Faded white
                        </Card.Text>
                        <Card.Text>$950.00</Card.Text>
                    </Card.Body>
                </Card>
                <Card>
                    <Card.Img variant="top" src={img3} />
                    <Card.Body>
                        <Card.Title>RAT CHASE BELT</Card.Title>
                        <Card.Text>
                            Faded white
                        </Card.Text>
                        <Card.Text>$2000.00</Card.Text>
                    </Card.Body>
                </Card>
                <Card>
                    <Card.Img variant="top" src={img4} />
                    <Card.Body>
                        <Card.Title>PSYCHOTHÉRAPIE DE L'ADOLESCENT T-SHIRT</Card.Title>
                        <Card.Text>
                            Black
                        </Card.Text>
                        <Card.Text>$950.00</Card.Text>
                    </Card.Body>
                </Card>
            </Container>
        </>
    );
};

export default Home;