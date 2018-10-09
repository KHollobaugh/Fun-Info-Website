import React from 'react';
import { Card, CardImg, CardText, CardBody,
  CardTitle, CardSubtitle, Button } from 'reactstrap';
import './CardBox.css';

const CardBox = (props) => {
  return (
    <div>
      <Card className='card'>
        <CardImg top width="100%" src={props.post.postImg} alt="Card image cap" />
        <CardBody>
          <CardTitle>{props.post.title}</CardTitle>
          <CardSubtitle>{props.post.subtitle}</CardSubtitle>
          <CardText>{props.post.text}</CardText>
          <Button>Read About It</Button>
        </CardBody>
      </Card>
    </div>
  );
};

export default CardBox;