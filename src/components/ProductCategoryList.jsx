import React, { useEffect, useState } from "react"
import { Container, Row, Col, Form } from "react-bootstrap"
import { useParams } from "react-router-dom"
import Breadcrumb from "react-bootstrap/Breadcrumb"
import Product from "./Product"

const ProductListing = (props) => {
    const { category } = useParams()
    const [state, setState] = useState({
        data: props.data
    })

    const handleSort = e => {
        switch (e.target.value) {
            case 'price_lth':
                setState({ data: props.data.sort(({ price: a }, { price: b }) => a - b) })
                break

            case 'price_htl':
                setState({ data: props.data.sort(({ price: a }, { price: b }) => b - a) })
                break

            case 'rating':
                setState({ data: props.data.sort(({ rating: a }, { rating: b }) => a - b) })
                break

            default:
                setState({ data: props.data.sort(({ rating: a }, { rating: b }) => a - b) })
        }
    }

    return (
        <Container>
            <Breadcrumb>
                <Breadcrumb.Item href="/">Home</Breadcrumb.Item>
                <Breadcrumb.Item href="/shop">Shop</Breadcrumb.Item>
                <Breadcrumb.Item
                    active
                    className="text-capitalize"
                >
                    {category}
                </Breadcrumb.Item>
            </Breadcrumb>

            <h1 className="mb-5">Shop {category}</h1>
            <Row>
                <Col
                    xs={12}
                >
                    <Row>
                        <Col
                            xs={12}
                            md={3}
                        >
                            <Form.Group className="mb-3">
                                <Form.Label>Sort:</Form.Label>
                                <Form.Select
                                    onChange={(e) => handleSort(e)}
                                    size="sm"
                                >
                                    <option defaultValue key={0}>Select</option>
                                    <option value="rating" key={1}>Rating</option>
                                    <option value="price_lth" key={2}>Price: low to high</option>
                                    <option value="price_htl" key={3}>Price: high to low</option>
                                </Form.Select>
                            </Form.Group>
                        </Col>
                    </Row>
                </Col>
                <Col
                    xs={12}
                >
                    <Row>
                        {props.data.map((item, index) => (
                            item.category === category ?
                                <Col
                                    xs={12}
                                    sm={6}
                                    xl={4}
                                    key={index}
                                >
                                    <Product
                                        className="mb-4 product"
                                        item={item}
                                    />
                                </Col> : ''
                        ))}
                    </Row>
                </Col>
            </Row>
        </Container>
    )
}

export default ProductListing
