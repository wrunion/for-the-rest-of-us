import React from 'react';
import Card from 'react-bootstrap/Card';

const cardTitleStyle = {
  fontWeight: 'bold', 
  fontFamily: 'Open Sans Condensed, sans-serif',
  fontSize: '24px',
  color: '#343a40',
}

const cardBodyStyle = {
  color: '#606060',
}

/* ----  these will be dynamically entered, probably via mapping over the data and outputting each entry ---- */
const ResourceCard = props => {

  return (
    <Card style={{ width: '85%', margin: '1em auto'}}>
      <Card.Body>
        <Card.Title style={cardTitleStyle}>Free Code Camp</Card.Title>
        <Card.Text style={cardBodyStyle}>
        freeCodeCamp is a proven path to your first software developer job. More than 40,000 people have gotten developer jobs after completing this – including at big companies like Google and Microsoft.
        </Card.Text>
      </Card.Body>
      <Card.Footer>
        <small className="text-muted">Categories: Free Resources, JavaScript, HTML, Beginner-Friendly</small>
      </Card.Footer>
  </Card>
  );
}

export default ResourceCard;