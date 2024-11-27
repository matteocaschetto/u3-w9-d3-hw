import Card from "react-bootstrap/Card";
import Button from "react-bootstrap/Button";

const SingleBook = ({ product }) => {
  if (!product) {
    return null;
  }

  return (
    <Card className="mb-5 bg-body-secondary">
      <Card.Img variant="top" src={product.img} />
      <Card.Body>
        <Card.Title>{product.title}</Card.Title>
        <Card.Text>{product.price}$</Card.Text>
        <Button variant="danger">Aggiungi al carrello</Button>
      </Card.Body>
    </Card>
  );
};

export default SingleBook;
