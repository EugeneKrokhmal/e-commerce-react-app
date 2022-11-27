import React, { useEffect, useState } from "react"
import axios from "axios"
import { useParams } from "react-router-dom"
import { Container, Card, Row, Col, Badge, Breadcrumb } from "react-bootstrap"
import Placeholder from "./../images/placeholder.png"

const ProductPage = () => {
    const { postId } = useParams()
    const [state, setState] = useState({
        data: []
    })

    useEffect(() => {
        axios.get(`https://dummyjson.com/posts/`)
            .then(res => {
                const posts = res.data.posts
                setState({ data: posts, loading: false })
            })
            .catch(() => {

            })
    }, [])

    const thisPost = state.data.find(prod => prod.id === +postId)

    return (
        <div>
            {thisPost ?
                <Container>
                    <Breadcrumb>
                        <Breadcrumb.Item href="/blog">Blog</Breadcrumb.Item>
                        <Breadcrumb.Item active>
                            Post #{thisPost.id}
                        </Breadcrumb.Item>
                    </Breadcrumb>
                    <hr />
                    <Row>
                        <Col
                            xs={12}
                            lg={6}
                            className="mb-2"
                        >
                            <Row className="h-100 d-grid align-content-space-between">
                                <Col>
                                    <h3>{thisPost.title}</h3>
                                    {thisPost.tags.map((tag, i) => (
                                        <span key={i}>
                                            <Badge
                                                className="pl-2 mb-2"
                                                bg="warning">
                                                {tag}
                                            </Badge>
                                            {' '}
                                        </span>
                                    ))}
                                    <p>{thisPost.body}</p>
                                </Col>
                                <Col className="d-grid align-content-end">
                                    <small>User ID: {thisPost.userId}</small>
                                    <small>Likes: {thisPost.reactions}</small>
                                </Col>
                            </Row>
                        </Col>
                        <Col
                            xs={12}
                            md={6}
                        >
                            <picture>
                                <source
                                    srcSet={Placeholder}
                                />
                                <Card.Img
                                    height={300}
                                    variant="top"
                                    src=""
                                    className="bg-light d-block w-100 mb-2 product-image"
                                    alt={thisPost.title}
                                />
                            </picture>
                        </Col>
                    </Row>
                </Container> : ''
            }
        </div>)
}

export default ProductPage
