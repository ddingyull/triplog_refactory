import { Col, Container, Row } from "react-bootstrap";
import MypageNav from "./main_content/MypageNav";
import UserCard from "./main_content/UserCard";

export default function MyCancel() {

    return (
        <>
        <div>cancel임</div>
        <UserCard />
        <Container>
            <Row>
                <Col md={3}> <MypageNav /> </Col>
                <Col>
                <div class="col-7">
                    <p>취소/환불</p>

                    <div class="cancel_list">
                    <div class="w-bar"></div>
                    <span>후기목록</span>
                    <div class="w-bar"></div>

                    <div class="confirm_lists">
                        <div>
                        <img src="http://www.cakenalda.co.kr/shopimages/cakenalda/0640120000132.jpg?1609835682" alt="cake_img" />
                        <span>레터링케이크</span>
                        <span>2022.09.22</span>
                        <p>22000원</p>
                        <span>Lorem ipsum dolor sit amet consectetur adipisicing elit. Tempora sed molestiae voluptas porro ad iusto eligendi impedit quaerat error vel.</span>
                        </div>
                    </div>
                    </div>
                </div>
                </Col>
            </Row>
        </Container>
        </>
    )
}