import GridSection from "../components/GridSection/GridSection";
import {Container} from "react-bootstrap";

export default function Home({data}) {
    return (
        <Container className={"mt-3"}>
            <h1 className={"text-center text-decoration-underline pb-3"}>Data from JSON Placeholder API</h1>
            <GridSection data={data}/>
        </Container>)
}

export async function getStaticProps() {
    const URL = 'https://jsonplaceholder.typicode.com/posts'
    const res = await fetch(URL);
    const data = await res.json()

    if (!data) {
        return {
            notFound: true
        }
    }
    return {
        props: {data}
    }
}
