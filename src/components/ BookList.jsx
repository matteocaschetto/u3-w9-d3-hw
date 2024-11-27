import Container from "react-bootstrap/Container";
import Row from "react-bootstrap/Row";
import Col from "react-bootstrap/Col";
import SingleBook from "./SingleBook";

const BookList = ({ books }) => {
  return (
    <Container>
      <Row>
        {books.map((product) => (
          <Col xs={12} md={3} key={product.asin}>
            <SingleBook product={product} />
          </Col>
        ))}
      </Row>
    </Container>
  );
};

export default BookList;
