import Card from "react-bootstrap/Card";
import React from "react";

export default function Post ({post}) {
  const {id,title, body} = post;
  return (
      <Card>
        <Card.Body>
          <Card.Title>{title}</Card.Title>
        </Card.Body>
      </Card>
  );
}