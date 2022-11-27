import React, { useState } from "react"
import { Card, Badge, Button } from "react-bootstrap"
import { LinkContainer } from "react-router-bootstrap"
import { useCart } from "react-use-cart"
import Placeholder from "./../images/placeholder.png"

const Product = (props) => {
    const { addItem } = useCart()
    const [buttonText, setButtonText] = useState("Add To Cart")

    return (
        <Card
            className="mb-4"
        >
            <LinkContainer to={`/shop/${props.item.id}`}>
                <picture>
                    <source
                        srcSet={props.item.thumbnail}
                    />
                    <Card.Img
                        height={300}
                        variant="top"
                        src={Placeholder}
                        className="bg-light d-block w-100 mb-2 product-image"
                        alt={props.item.title}
                    />
                </picture>
            </LinkContainer>

            <Card.Body>
                <LinkContainer to={`/shop/${props.item.id}`}>
                    <Card.Title>
                        {props.item.title}
                    </Card.Title>
                </LinkContainer>
                {props.item.rating > 4.5 ?
                    <Badge
                        className="mb-3"
                        bg="warning"
                        text="dark"
                    >
                        Top Rated: {props.item.rating}
                    </Badge> :
                    <Badge
                        className="mb-3"
                        bg="secondary"
                        text="light"
                    >
                        Rated: {props.item.rating}
                    </Badge>
                }
                <Card.Subtitle
                    className="mb-2"
                >
                    {props.item.brand}
                </Card.Subtitle>
                <Card.Text>${props.item.price}</Card.Text>
                <Card.Text
                    className="small"
                >
                    {props.item.description}
                </Card.Text>
                <Button
                    variant="outline-secondary"
                    className="w-100"
                    onClick={() => {
                        addItem(props.item)
                        setButtonText("Added")
                        setTimeout(() => { setButtonText("Add To Cart") }, 1500)
                    }}
                >
                    {buttonText}
                </Button>
            </Card.Body>
        </Card>
    )
}

export default Product
