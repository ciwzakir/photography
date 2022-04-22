import React, { useEffect, useState } from "react";
import { Button, Card } from "react-bootstrap";
import { Link, useParams } from "react-router-dom";
import "./ServiceDetails.css";

const ServiceDetails = ({service}) => {
 
  const { serviceId } = useParams();

 
  return (
    <div className="service-details container">
      
      <h1>Single Service details</h1>
      <Card style={{ width: "30rem" }}>
        <Card.Img variant="top" className="img-fluid" src="#" />
        <Card.Body>
          <Card.Title> Package ID : {serviceId}</Card.Title>
          <Card.Title> Package  Name: </Card.Title>
          <Card.Title> Price Tk.</Card.Title>
          <Card.Text></Card.Text>
          <Link to="/checkout">
              <Button variant="primary">Check Out</Button>
          </Link>
        </Card.Body>
      </Card>
    </div>
  );
};

export default ServiceDetails;
