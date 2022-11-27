import React, { useEffect, useState } from "react"
import axios from "axios"
import { useParams } from "react-router-dom"
import { Container, Carousel, Row, Col, Button, Badge, Breadcrumb } from "react-bootstrap"
import { useCart } from "react-use-cart"
import Comments from "./Comment"

const ProductPage = (props) => {
    const { productId } = useParams()
    const [buttonText, setButtonText] = useState("Add to Cart")
    const [state, setState] = useState({
        data: [],
        product: {}
    })

    const { addItem } = useCart()

    useEffect(() => {
        axios.get(`https://dummyjson.com/products/`)
            .then(res => {
                setState({ data: res.data.products, loading: false })
            })
            .catch(() => {

            })
    }, [])

    const thisProduct = state.data.find(prod => prod.id === +productId)

    return (
        <div>
            {thisProduct ?
                <Container>
                    <Breadcrumb>
                        <Breadcrumb.Item href="/shop">Shop</Breadcrumb.Item>
                        <Breadcrumb.Item
                            className="text-capitalize"
                            href={`/${thisProduct.category}`}
                        >
                            {thisProduct.category}
                        </Breadcrumb.Item>
                        <Breadcrumb.Item active>
                            {thisProduct.title}
                        </Breadcrumb.Item>
                    </Breadcrumb>
                    <hr />
                    <Row>
                        <Col
                            className="mb-4"
                            xs={12}
                            lg={7}
                        >
                            <Carousel
                                className="product"
                            >
                                {thisProduct.images.map(image => {
                                    return (
                                        <Carousel.Item
                                            key={image}>
                                            <img
                                                height={500}
                                                src={image}
                                                className="d-block w-100"
                                                alt={thisProduct.title}
                                            />
                                        </Carousel.Item>
                                    )
                                })}
                            </Carousel>
                        </Col>
                        <Col
                            xs={12}
                            lg={5}
                            className="mb-xs-2"
                        >
                            <h3>{thisProduct.brand}</h3>
                            <Badge
                                className="mb-3"
                                bg="secondary"
                                text="light"
                            >
                                Rated: {thisProduct.rating}
                            </Badge>
                            <h1>{thisProduct.title}</h1>
                            <h4>${thisProduct.price}</h4>
                            <p>{thisProduct.description}</p>
                            <Button
                                onClick={() => {
                                    addItem(thisProduct)
                                    setButtonText("Added")
                                    setTimeout(() => { setButtonText("Add To Cart") }, 1500)
                                }}
                            >
                                {buttonText}
                            </Button>
                        </Col>
                    </Row>
                </Container> : ''
            }
            <Comments id={productId}></Comments>
        </div>)
}

export default ProductPage
