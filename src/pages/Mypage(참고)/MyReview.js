import styled from "styled-components"
import { Container, Row, Col } from "react-bootstrap"


import MypageNav from "./main_content/MypageNav"
import UserCard from "./main_content/UserCard"
import Review from "./main_content/Review"

export default function MyReview() {

    return (
        <>
        <UserCard />
           <Container>
            <Row style={{marginTop: '100px'}}>
                <Col md={3}> <MypageNav /> </Col>
                <Col>
                    <p>상품 후기</p>

                    <div>dat API</div>

                    <div className=".cancel_list d-flex flex-column mt-3">
                        <div style={{borderTop: '1px solid black', borderBottom: '1px solid black', height: '35px'}}>후기 목록</div>
                        <Review />
                    </div>
                </Col>
            </Row>
        </Container>
    </>
    )
}

