import React, { Component } from "react";
import { Alert, Badge, Jumbotron} from "react-bootstrap";
import{ Row, Container, Col, Button, Image, Card, Table} from "react-bootstrap";
import Typography from '@material-ui/core/Typography';
import TableTopFivePlayers from "./tableTopFivePlayers";
import TableTopFiveTeams from "./tableTopFiveTeams";
import CardGame from "./cardGame";
import CardResults from "./cardResults";




class Players extends Component {
  render() {
    return (
      <React.Fragment> 
      <Alert variant="danger">
          <h1 align="center">
            <Badge variant="danger">Players</Badge>
          </h1>
        </Alert>
        <Jumbotron>
<Row className="show-grid text-center">
  <Col xs= {11} sm={6} className="person">
   
    <Card>
    <Card.Header as="h4">Michael Nelson Trout</Card.Header>           
    <p>
   <img
     src ="https://securea.mlb.com/mlb/images/players/head_shot/545361.jpg"
     alt="logo"
     width ="170" 
     height="220"
   />
   </p>
    <p align="center">
    <h6>
   <p><b>Nickname:</b> Mike Trout</p>
   <p><b>Born:</b> August 7, 1991 Vineland, New Jersey</p>
   <p><b>Draft:</b></p> 
   <p><b>College:</b> </p> 
   <p> <b>Debut:</b> July 8, 2011 for the Los Angeles Angels</p>    
    </h6>
    </p>      
    </Card>
    <br />
  </Col>
  <Col xs={12} sm = {6} className="person"> 
  <Table striped bordered hover size="sm" variant="secondary">
  <thead>
    <tr>
      <th>W</th>
      <th>L</th>
      <th>ERA</th>
      <th>G</th>
      <th>GS</th>
      <th>SV</th>
      <th>IP</th>
      <th>SO</th>
      <th>WHIP</th>
    </tr>
  </thead>
  <tbody>
    <tr>
      <td>11</td>
      <td>8</td>
      <td>3.96</td>
      <td>31</td>
      <td>31</td>
      <td>0</td>
      <td>195.1</td>
      <td>195</td>
      <td>1.26</td>
    </tr>
      <td>44</td>
      <td>38</td>
      <td>3.77</td>
      <td>126</td>
      <td>126</td>
      <td>0</td>
      <td>749.1</td>
      <td>726</td>
      <td>1.29</td>
    <tr>
      
    </tr>
  </tbody>
</Table>
  </Col>
  </Row>
        </Jumbotron>
    </React.Fragment>  
    )
  }
}

class Playersii extends Component{
  render(){
    return(
      <button style={{background: this.props.color}}>
        {this.props.children}
      </button>
    );
  }
}

export default Players;
