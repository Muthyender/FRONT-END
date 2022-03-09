import React, {useState, useEffect} from 'react'
import {Card, Button, Row, Col, Spinner} from 'react-bootstrap'
import axios from 'axios'

function Posts()
{
    const [posts, setPosts] = useState([])

    useEffect(async () =>
    {
        //(API using Promise)
        // axios.get('https://jsonplaceholder.typicode.com/posts')
        // .then(response => setPosts(response.data))
        // .catch(err => console.log(err))

        //(API using Async and Await)
        try
        {
            const response =  await axios.get('https://jsonplaceholder.typicode.com/posts')
            setPosts(response.data)
        }
        catch(err)
        {
            console.log(err)
        }
    }, [])

    return(
        <>
            {!posts.length ? (<Spinner animation="border"/>) :
                (posts.map(post =>
                    (
                        <Card  style={{width: '80%'}} className='mt-5 text-center mx-auto' bg='dark' text='light' key={post.id}>
                            <Card.Header>
                                <small className="text-muted">User {post.userId}</small>
                            </Card.Header>
                            <Card.Body>
                                <Card.Title>{post.title}</Card.Title>
                                <Card.Text>
                                    {post.body}
                                </Card.Text>
                                <Row>
                                    <Col>
                                        <Button variant="outline-primary">
                                            Like
                                        </Button>
                                    </Col>
                                    <Col>
                                        <Button variant="outline-primary">
                                            Share
                                        </Button>
                                    </Col>
                                </Row>
                            </Card.Body>
                            <Card.Footer>
                                <small className="text-muted">
                                    Last updated {Math.floor(Math.random()*60)} mins ago
                                </small>
                            </Card.Footer>
                        </Card>
                    ))
                )          
            }
            
        </>
    )
}

export default Posts