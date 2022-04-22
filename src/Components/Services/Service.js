import React from "react";
import { Button, Card } from "react-bootstrap";
import { useNavigate } from "react-router-dom";
import "./Service.css";

const Service = (props) => {
 const {id, name, image, description, price} = props.service;
 const navigate = useNavigate();

const navigateToServiceDetails = (id) =>{
    navigate(`/services/${id}`);
}
  
  return (
    <div className="service-component">
      <Card style={{ width: "25rem"}}>
        <Card.Img variant="top" className="img-fluid" src={image}/>
        <Card.Body>
          <Card.Title> Package : {name}</Card.Title>
          <Card.Title>Tk.{price}</Card.Title>
          <Card.Text>
            {description}
          </Card.Text>
          <Button onClick={()=> navigateToServiceDetails(id)}> See Details</Button>
        </Card.Body>
      </Card>
    </div>
  );
};

export default Service;
