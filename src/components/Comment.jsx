import React, { useEffect, useState } from "react"
import axios from "axios"
import { Container, Card, Col } from "react-bootstrap"
import Loader from "./Loader"

const Comments = (props) => {
    const [state, setState] = useState({
        loading: true,
        comments: [],
    })

    useEffect(() => {
        axios.get(`https://dummyjson.com/comments`)
            .then(res => {
                setState({ comments: res.data.comments, loading: false })
            })
            .catch(() => {
                
            })            
    }, [])    

    return (
        <Container>
            {state.loading ?
                <Loader /> :
            <div>
                <h1 className="mb-5">Comments</h1>
                {state.comments ? state.comments.map((comment, i) => (
                    <Col
                        xs={12}
                        key={i}
                        className="mb-4"
                    >
                        <Card className="rounded-0">
                            <Card.Body>
                                <Card.Title>{comment.user.username}</Card.Title>
                                <hr />
                                <Card.Text>{comment.body}</Card.Text>
                            </Card.Body>
                        </Card>
                    </Col>
                )) : ''}
            </div>
            }
        </Container>
    )
}

export default Comments
