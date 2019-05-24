import React from "react";
import "./App.css";
import Card from "react-bootstrap/Card";
import Button from "react-bootstrap/Button";
import ButtonGroup from "react-bootstrap/ButtonGroup";
import InputGroup from "react-bootstrap/InputGroup";
import FormControl from "react-bootstrap/FormControl";

function App() {
  return (
    <div className="App">
      <Card style={{ width: "350px", margin: "100px auto", padding: "10px" }}>
        <InputGroup md={3}>
          <FormControl type="button" disabled className="btn" />
        </InputGroup>
        <ButtonGroup aria-label="Basic example" className="btn-group1">
          <Button className="clear" variant="outline-success" md="auto">
            CLEAR
          </Button>
          <Button className="btn-plus" variant="outline-success">
            /
          </Button>
        </ButtonGroup>
        <ButtonGroup aria-label="Basic example" className="btn-group">
          <Button variant="outline-success btn">7</Button>
          <Button variant="outline-success btn">8</Button>
          <Button variant="outline-success btn">9</Button>
          <Button variant="outline-success btn">-</Button>
        </ButtonGroup>
        <ButtonGroup aria-label="Basic example" className="btn-group">
          <Button variant="outline-success btn">4</Button>
          <Button variant="outline-success btn">5</Button>
          <Button variant="outline-success btn">6</Button>
          <Button variant="outline-danger btn">+</Button>
        </ButtonGroup>
        <ButtonGroup aria-label="Basic example" className="btn-group">
          <Button variant="outline-success btn">1</Button>
          <Button variant="outline-success btn">2</Button>
          <Button variant="outline-success btn">3</Button>
          <Button variant="outline-danger btn">=</Button>
        </ButtonGroup>
      </Card>
    </div>
  );
}

export default App;
