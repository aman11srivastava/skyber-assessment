import React from "react";
import {Card, Col} from "react-bootstrap";
import Link from "next/link";

export const GridItem = ({post}) => {
    return (
        <>
            <Col className={"my-3"} key={post.id} xl={4} lg={6} md={6} sm={12}>
                <Card className={"p-3"} style={{height: 300}} key={post.id}>
                    <Card.Title className={"border-bottom border-dark pb-1"}>{post?.title}</Card.Title>
                    <Card.Body>{post.body}</Card.Body>
                    <Card.Footer style={{cursor: 'pointer'}}>
                        <Link href={"/post/[id]"} as={`/post/${post?.id}`}>
                            <span className={"text-black text-decoration-none"} >Read More</span>
                        </Link>
                    </Card.Footer>
                </Card>
            </Col>

        </>
    )
}

export default GridItem