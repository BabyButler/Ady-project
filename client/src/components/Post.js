import React from 'react'
import {Card} from'react-bootstrap'
import dateformat from 'dateformat'
function Post({ name,date,img}) {
  return (
    <div>
        <Card className="postHeader" style={{ width: '18rem' }}>
        <img className="postImg" src={img ??"https://miro.medium.com/max/1200/1*mk1-6aYaf_Bes1E3Imhc0A.jpeg"}alt=""/>
                <Card.Body>
                    <Card.Title>{name}</Card.Title>
                    <Card.Text>{dateformat(date)}</Card.Text>
                </Card.Body>
        </Card>
    </div>
  )
}

export default Post