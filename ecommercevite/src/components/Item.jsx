import { Link } from 'react-router-dom';
import Button from 'react-bootstrap/Button';
import Card from 'react-bootstrap/Card';

export const Item = ({item}) => {
    return (
        <Card style={{ width: '18rem' }}>
            <Card.Img variant="top" src={item.img} />
            <Card.Body>
            <Card.Title>{item.name}</Card.Title>
            <Card.Text>{item.detail}</Card.Text>
            <Link to={`/item/${item.id}`}><Button variant="primary">Go somewhere</Button></Link>
            </Card.Body>
        </Card>
        );
}