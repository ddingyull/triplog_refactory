import { FontAwesomeIcon } from "@fortawesome/react-fontawesome"
import {faStar} from "@fortawesome/free-solid-svg-icons";
import styled from "styled-components";

export default function Review() {

    return(
    <Wrapper className="position-relative" style={{borderBottom: '1px solid rgb(220, 220, 220)'}}>
        <div className="p-3" style={{height: '150px', borderBottom: '1px solid rgb(220, 220, 220)'}}>
            <img src="http://www.cakenalda.co.kr/shopimages/cakenalda/0640120000132.jpg?1609835682" alt="cake_img" style={{width: '120px', height: '120px'}}/>
            <span className="d-inline">레터링케이크</span>
            <span>2022.09.22</span>
            <p>22000원</p>
        </div>
        <div>
            <FontAwesomeIcon icon={faStar} />
            <FontAwesomeIcon icon={faStar} />
            <FontAwesomeIcon icon={faStar} />
            <FontAwesomeIcon icon={faStar} />
            <FontAwesomeIcon icon={faStar} />
            <span>Lorem ipsum dolor sit amet, consectetur adipisicing elit. Necessitatibus, ullam. Rerum architecto harum quaerat sed reiciendis quo, aut natus doloribus.</span>
            <img src="https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcQlN8N0AeXBIOde6cBUd5g3aF42fa7zeHlQ9g&usqp=CAU" alt="" style={{width: '120px', height: '120px'}}/>
        </div>
    </Wrapper>
    )
}

const Wrapper = styled.div`

        img {
            transform: translate(-30%, 0);
            float: left;
        }

        span:nth-of-type(1) {
            font-size: 15px;
            font-weight: bold;
        }

        span:nth-of-type(2) {
            font-size: 12px;
            font-weight: bold;
            color: #a19a9a;
            margin-left: 10px;
        }

        p {
            margin-top: 10px;
            font-size: 15px;
        }

        span:nth-of-type(3) {
            display: inline-block;
            width: 350px;
        }

        span:nth-of-type(4),
        span:nth-of-type(5) {
            position: absolute;
            top: 50%;
            font-size: 14px;
            font-weight: bold;
        }

        span:nth-of-type(4) {
            left: 65%;
        }

        span:nth-of-type(5) {
            left: 87%;
        }
`