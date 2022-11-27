import React, { useState, useEffect } from "react"
import axios from "axios"
import { Card, Container, Row, Badge, Pagination, Col, Button } from "react-bootstrap"
import { LinkContainer } from "react-router-bootstrap"
import Loader from "./Loader"

const Blog = () => {
    const [state, setState] = useState({
        data: [],
        loading: true
    })
    const postPerRow = 8;
    const [loading, setLoading] = useState(true)
    const [next, setNext] = useState(postPerRow);

    const loadMore = () => {
        setNext(next + postPerRow);
    };    

    useEffect(() => {
        axios.get(`https://dummyjson.com/posts`)
            .then(res => {
                setState({
                    data: res.data,
                    loading: false,
                    headline: 'Blog'
                })
                setLoading(false)
            })
            .catch(() => {
                setState({
                    data: [],
                    loading: false,
                    headline: 'Error loading posts'
                })
            })
    }, [])

    return (
        <Container>
            <h1 className="mb-5">{state.headline}</h1>
            <Row>
                {state.data.posts ? state.data.posts.slice(0, next).map((el, i) => {
                    return (
                        <Col
                            xs={12}
                            key={i}
                            className="mb-4"
                        >
                            <LinkContainer to={`/blog/${el.id}`}>
                                <Card className="rounded-0">
                                    <Card.Body>
                                        <Card.Title>{el.title}</Card.Title>
                                        {el.tags.map((tag, i) => (
                                            <span key={i}>
                                                <Badge
                                                    className="pl-2"
                                                    bg="warning">
                                                    {tag}
                                                </Badge>
                                                {' '}
                                            </span>
                                        ))}
                                        <hr />
                                        <Card.Text>{el.body}</Card.Text>
                                    </Card.Body>
                                </Card>
                            </LinkContainer>
                        </Col>
                    );
                }) : ''}
            </Row>
            <Row>
                <Col>
                    {state.data.posts && next < state.data.posts.length && (
                        <Button
                            className="mt-4 mb-5"
                            onClick={loadMore}
                        >
                            Load more
                        </Button>
                    )}
                </Col>
            </Row>
        </Container>
    )
}

export default Blog

