import React from "react";
import {Container, Row} from "react-bootstrap";
import GridItem from "../GridItem/GridItem";

export const GridSection = ({data}) => {
    return (
        <Container>
            <Row>
                {data?.map(post => <GridItem key={post.id} post={post}/>)}
            </Row>

        </Container>
    )
}

export default GridSection