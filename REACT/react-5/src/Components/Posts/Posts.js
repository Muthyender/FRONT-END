import React, {useState, useEffect} from 'react'
import {Card, Button, Row, Col, Spinner} from 'react-bootstrap'
import axios from 'axios'
import {Link} from 'react-router-dom'

function Posts()
{
    const [posts, setPosts] = useState([])

    useEffect(() =>
    {
        //(API using Promise)
        // axios.get('https://jsonplaceholder.typicode.com/posts')
        // .then(response => setPosts(response.data))
        // .catch(err => console.log(err))

        //(API using Async and Await)
        const fetchPosts = async() =>
        {
            try
            {
                const response =  await axios.get('https://jsonplaceholder.typicode.com/posts')
                setPosts(response.data)
            }
            catch(err)
            {
                console.log(err)
            }
        }
        
        fetchPosts()

    }, [])

    return(
        <>
            <h1 className='text-center mt-2'>Posts</h1>
            {!posts.length ? (<Spinner animation="border" className='d-block mx-auto mt-3'/>) :
                (posts.map(post =>
                    (
                        <Card  style={{width: '80%'}} className='mt-5 text-center mx-auto' bg='dark' text='light' key={post.id}>

                            <Link to={`/posts/${post.id}`} className='router-link'>
                                <Card.Header>
                                    <small className="text-muted">User {post.userId}</small>
                                </Card.Header>
                                <Card.Body>
                                    <Card.Title>
                                        {post.title}
                                    </Card.Title>

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
                            </Link>
                        </Card>
                    ))
                )          
            }
            
        </>
    )
}

export default Posts