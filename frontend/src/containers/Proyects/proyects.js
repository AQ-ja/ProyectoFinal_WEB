/* eslint-disable react/destructuring-assignment */
/* eslint-disable react/jsx-no-comment-textnodes */
/* eslint-disable react/no-access-state-in-setstate */
import React from 'react';
import Container from 'react-bootstrap/Container';
import Row from 'react-bootstrap/Row';
import ProCard from './procard';
import img1 from '../Images/chat.png';
import img2 from '../Images/memory.png';
import img3 from '../Images/calcu.png';
import img4 from '../Images/#2.png';

class proyects extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      // eslint-disable-next-line react/no-unused-state
      items: [
        {
          id: 0,
          title: 'Chat',
          subTitle: 'Chat hecho con JavaScript',
          imgSrc: img1,
          link: 'http://stw-uvg.site/labs/lab06/Quezada191002/index.html',
          selected: false,
        },
        {
          id: 1,
          title: 'Memory',
          subTitle: 'Juego de Memoria con Rect',
          imgSrc: img2,
          link: 'http://stw-uvg.site/labs/lab08/Quezada191002/index.html',
          selected: false,
        },
        {
          id: 2,
          title: 'Calculadora',
          subTitle: 'Calculadora hecha con React',
          imgSrc: img3,
          link: 'http://stw-uvg.site/labs/lab10/Quezada191002/index.html',
          selected: false,
        },
        {
          id: 3,
          title: 'Ecommerce',
          subTitle: 'Plataforma Ecommerce',
          imgSrc: img4,
          link: 'https://proyecto2dev.stw-uvg.site/',
          selected: false,
        },
      ],
    };
  }

  handleCardClick = (id) => {
    // eslint-disable-next-line react/destructuring-assignment
    // eslint-disable-next-line react/no-access-state-in-setstate
    // eslint-disable-next-line react/destructuring-assignment
    const items = [...this.state.items];

    items[id].selected = !items[id].selected;

    items.forEach((item) => {
      if (item.id !== id) {
        // eslint-disable-next-line no-param-reassign
        item.selected = false;
      }
    });

    this.setState({
      items,
    });
  }

// eslint-disable-next-line max-len
makeItems = (items) => items.map((item) => <ProCard item={item} click={((e) => this.handleCardClick(item.id, e))} key={item.id} />)

render() {
  return (
    <Container fluid>
      <Row className="justify-content-around">
        {this.makeItems(this.state.items)}
      </Row>
    </Container>
  );
}
}

export default proyects;
/*
Esta parte del codigo fue hecha con el siguente tutorial:
https://youtu.be/F2DsmQChKA0
*/
