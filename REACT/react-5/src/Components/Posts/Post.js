import React, {useState, useEffect} from 'react'
import {Card, Button, Row, Col, Spinner} from 'react-bootstrap'
import axios from 'axios'
import {useParams, Link} from 'react-router-dom'

function Post()
{
    const [post, setPost] = useState({})

    const {id} = useParams()

    useEffect(() =>
    {
        const fetchPost = async() =>
        {
            try
            {
                const response =  await axios.get(` https://jsonplaceholder.typicode.com/posts/${id}`)
                setPost(response.data)
            }
            catch(err)
            {
                console.log(err)
            }
        }
        
        fetchPost()

    }, [id])

    return(
        <>
            <h1 className='text-center mt-2'>Post No. {post.id}</h1>
            {!Object.keys(post).length ? (<Spinner animation="border" className='d-block mx-auto mt-3'/>) :
                (
                    <>
                        <Card  style={{width: '80%'}} className='mt-3 text-center mx-auto' bg='dark' text='light'>
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

                        <Button className='d-block mx-auto mt-3'>

                            <Link to='/posts' className='router-link text-center mx-auto'>
                                Go to Posts
                            </Link>

                        </Button>
                    </>
                )          
            }
            
        </>
    )
}

export default Post