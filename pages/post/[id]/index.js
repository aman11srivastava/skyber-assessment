import React from "react";
import {Button, Card, Container} from "react-bootstrap";
import Link from "next/link";

export const Post = ({post}) => {
    return (
        <Container className={"my-3"}>
            <Card className={"w-100"}>
                <Card.Title className={"text-center py-2"} style={{fontSize: 30}}>{post.title}</Card.Title>
                <Card.Body style={{fontSize: 24}}>
                    {post.body}
                </Card.Body>
                <Card.Footer className={"d-flex justify-content-between align-items-center"}>
                    <Button>
                        <Link href={"/"}>
                            <span className={"text-white"}> Back to Homepage</span></Link>
                    </Button>
                    <div>
                        UserId: {post?.userId}
                    </div>
                </Card.Footer>
            </Card>
        </Container>
    )
}

export default Post

export const getServerSideProps = async (context) => {
    const URL = `https://jsonplaceholder.typicode.com/posts/${context.params.id}`;
    const res = await fetch(URL);
    const post = await res.json()

    if (!post) {
        return {
            notFound: true
        }
    }
    return {
        props: {post}
    }
};