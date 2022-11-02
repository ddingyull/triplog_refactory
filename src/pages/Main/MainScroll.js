import { Button, Row, Col } from 'react-bootstrap';
import { useNavigate } from 'react-router';
// import { gsap } from 'gsap';
import styled from 'styled-components';
import { useEffect, useRef } from 'react';

/* npm gsap */
/* npm install react-scroll-trigger */

const Box = ({ children, className }) => {
  return <div className={'box ' + className}>{children}</div>;
};

export default function MainScroll({}) {
  const comp = useRef(); // create a ref for the root level element (we'll use it later)

  // useEffect(() => {
  //   // -- ANIMATION CODE HERE --
  //   // let ctx = gsap.context(() => {
  //   //   // all our animations can use selector text like ".box"
  //   //   // and it's properly scoped to our component
  //   //   gsap.to('.box', { rotation: '+=360' });
  //     // ScrollTrigger.create({ trigger: '#my-id' });
  //   }, comp); // <- IMPORTANT! Scopes selector text

  //   return () => ctx.revert();
  // }, []); // <- empty dependency Array so it doesn't re-run on every render!

  return (
    <>
      <MainScrollSection>
        <section className="slede1">
          {/* <Timeline */}
          target={<img src="/images/mainBeach.jpg" alt="bg" class="beach" />}
          {/* ></Timeline> */}
          <h1 className="fw-bold">TRIP LOG</h1>
          <img src="/images/mainBeachRemove.png" alt="beach_down" />
        </section>

        <section className="slede2"></section>
      </MainScrollSection>
    </>
  );
}

const MainScrollSection = styled.section`
  position: relative;
  height: 100vh;
  width: 100%;
  padding: 5vw;

  img {
    position: absolute;
    left: 0px;
    top: 0px;
    display: block;
    object-fit: cover;
  }

  &.slide1 {
    // height: 135vh;
    position: relative;
    height: 190vh;
    text-align: center;
    font: bold 7vh/60vh;
    color: white;

    &::after {
      content: '';
      display: block;
      position: absolute;
      bottom: 0px;
      left: 0px;
      width: 100%;
      height: 40vh;
      background: linear-gradient(180deg, rgba(0, 0, 0, 0), rgb(17, 17, 31));
    }
    .beach {
      position: relative;
      width: 180%;
      left: -35%;
      object-fit: cover;
    }
    .beach_down {
      position: absolute;
      width: 40vw;
      left: 8vw;
      top: 80vh;
      transform: rotateY(180deg) scale(2);
    }

    .text {
      position: absolute;
      top: 65%;
      left: 50%;
      transform: translate(-50%, 0);
      font: bold 15vh/1 'arial';
      color: white;
    }
  }
  &.slide2 {
    position: relative;
    background-color: white;
    text-align: center;

    .s5-slogan1 {
      font: bold 15vh/60vh 'arial';
      color: black;
      opacity: 1;
    }
  }
`;
