import Button from 'react-bootstrap/Button';
import Card from 'react-bootstrap/Card';
import Imagem1 from '../../assets/Image1.jpg'
import './sobre.css'

const Sobre =()=>{
    return (

<section className="container">

    <Card style={{ width: '18rem' }}>
      <Card.Img variant="top" src={Imagem1} />
      <Card.Body>
        <Card.Title>Pacote 1</Card.Title>
        <Card.Text>
          Pacote com promoção relâmpago, incluindo uma diária e um evento no local
        </Card.Text>
        <Button variant="primary">Saiba mais</Button>
      </Card.Body>
    </Card>

    <Card style={{ width: '18rem' }}>
      <Card.Img variant="top" src={Imagem1} />
      <Card.Body>
        <Card.Title>Pacote 1</Card.Title>
        <Card.Text>
          Pacote com promoção relâmpago, incluindo uma diária e um evento no local
        </Card.Text>
        <Button variant="primary">Saiba mais</Button>
      </Card.Body>
    </Card>

    <Card style={{ width: '18rem' }}>
      <Card.Img variant="top" src={Imagem1} />
      <Card.Body>
        <Card.Title>Pacote 1</Card.Title>
        <Card.Text>
          Pacote com promoção relâmpago, incluindo uma diária e um evento no local
        </Card.Text>
        <Button variant="primary">Saiba mais</Button>
      </Card.Body>
    </Card>
</section>
    )
}
export default Sobre