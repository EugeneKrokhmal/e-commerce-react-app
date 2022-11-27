import React, { useEffect, useState } from "react"
import axios from "axios"
import { Container, Row, Col } from "react-bootstrap"
import Breadcrumb from "react-bootstrap/Breadcrumb"
import Product from "./../Product"
import Loader from "./../Loader"

const ShopAll = (props) => {
    const [state, setState] = useState({
        loading: true
    })

    console.log(props)

    const categories = [...new Set(props.data.map(el => el.category.toLowerCase()))]

    return (
        <Container>
            <Breadcrumb>
                <Breadcrumb.Item href="/">Home</Breadcrumb.Item>
                <Breadcrumb.Item href="/shop">Shop All</Breadcrumb.Item>
            </Breadcrumb>
            <h1 className="mb-5">Shop All</h1>
            {categories.map((category, i) => {
                return (
                    <Row key={i}>
                        <Col>
                            <h2
                                className="mb-3 mt-5 text-capitalize"
                            >
                                {category}
                            </h2>
                            <Row>
                                {props.data.map((item, index) => (
                                    item.category === category ?
                                        <Col
                                            xs={12}
                                            sm={6}
                                            xl={3}
                                            key={index}
                                        >
                                            <Product
                                                className="mb-4 product"
                                                item={item}
                                            />
                                        </Col> : ''
                                )
                                )}
                            </Row>
                        </Col>
                    </Row>
                )
            })}
        </Container>
    )
}

export default ShopAll
