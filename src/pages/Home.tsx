import { Button, Container } from "react-bootstrap";
import img1 from "../static/img/item1-700.png";
import img2 from "../static/img/item2-700.png"
import img3 from "../static/img/item3-700.png"
import img4 from "../static/img/item4-700.png"
import ProductCard from "../components/ProductCard";

const Home = () => {
    return (
        <>
            <Container fluid className="d-flex justify-content-between align-items-start mt-5 px-4">
                <h1 className="display-3 fw-semibold">
                    Enfants Riches <br /> Déprimés
                </h1>
                <span>
                    Contemporary label Enfants Riches Déprimes was established in 2012. <br />
                    Referred to as simply ERD is known for luxury one-of-a-kind pieces. <br />
                    <a className="pre">more</a>
                </span>
                <Button variant="primary">Follow</Button>
            </Container>
            <Container fluid className="my-5 main-grid px-4">
                <ProductCard title="Constructivist Hunting Jacket" color="Faded red" price="3,550" img={img1} description="ZIP FRONT JACKET IN JAPANESE COTTON CANVAS WITH COTTON FLANNEL LINING..BURNISHED GOAT LEATHER COLLAR. BELLOWS POCKETS AT FRONT. PRINTED ARTWORK AT FRONT, BACK, SLEEVE, & PATCHES. LOGO-BRANDED SNAP CLOSURE AT STORM FLAP IN FRONT AND AT WRISTS. ELASTIC AT WAISTBAND. DISTRESSING THROUGHOUT. MADE IN THE USA." />
                <ProductCard title="Psychothérapie De L'adolescent Hoodie" color="Antique green" price="1,590" img={img2} description="LONG-SLEEVE PULLOVER HOODED SWEATSHIRT MADE OF HEAVY WEIGHT BRUSHED FRENCH TERRY. BOXY, DROP-SHOULDER FIT. DOUBLE LAYER HOOD. RIB KNIT CUFFS & WAISTBAND. PRINTED ARTWORK AT FRONT & BACK. SIGNATURE VINTAGE WASH PROCESS. MADE IN THE USA." />
                <ProductCard title="Rat Chase Belt" color="Black" price="2000" img={img3} description="BELT IN HEAVY COWHIDE LEATHER. SIGNATURE WHITE BRONZE BUCKLE, LOOP, AND TIP. CUSTOM CAST METAL RATS THROUGHOUT. MADE IN THE USA." />
                <ProductCard title="My Death My Life Raglan Sweatshirt" color="Gardener green" price="1,940" img={img4} description="LONG-SLEEVE RAGLAN CREWNECK SWEATSHIRT IN HEAVY WEIGHT BRUSHED FRENCH TERRY. OVERSIZED SLOUCHY FIT. RIB KNIT AT NECKLINE, CUFFS, AND WAIST. PRINTED ARTWORK AT FRONT AND BACK. DISTRESSING THROUGHOUT. SIGNATURE VINTAGE WASH PROCESS. MADE IN THE USA." />
            </Container>
        </>
    );
};

export default Home;
