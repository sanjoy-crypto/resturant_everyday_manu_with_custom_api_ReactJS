import React from 'react'
import { Card, Button } from 'react-bootstrap'
const SingleMenu = ({ menu }) => {

    const { id, image, name, price, category, description } = menu;

    return (
        <>
            <Card className="mb-4 shadow">
                <Card.Img variant="top" src={image} />
                <Card.Body>
                    <span className="menuId">{id}</span>
                    <small className="cat">{category}</small>
                    <Card.Title>{name}</Card.Title>

                    <Card.Text>
                        {description}
                    </Card.Text>
                    <div className="d-flex justify-content-between flex-wrap align-items-center">
                        <h6>Price : {price} tk</h6>
                        <Button variant="dark">Order Now</Button>

                    </div>
                </Card.Body>
            </Card>
        </>
    )
}

export default SingleMenu
