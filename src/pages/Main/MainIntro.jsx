import { useNavigate } from 'react-router';
import { useLayoutEffect, useRef } from 'react';
import gsap from 'gsap';
import { ScrollTrigger } from 'gsap/all';
import styled from 'styled-components';

gsap.registerPlugin(ScrollTrigger);

export default function MainIntro() {
  const navigator = useNavigate();

  useLayoutEffect(() => {
    const slide = gsap.timeline();
    slide.to('#slogan', {
      scale: 10,
      rotate: 360,
    });
    ScrollTrigger.create({
      animation: slide,
      trigger: '#slide',
      pin: true,
      start: 'top top',
      end: '+=3000 bottom',
      scrub: true,
      markers: true,
      // 화면 중앙
    });
  });

  return (
    <>
      <section class="slide">
        <img
          src={process.env.PUBLIC_URL + '/images/mainBeach.jpg'}
          alt="beach"
          className="beach"
        />
        <Slogan className="text fw-bold" id="slogan">
          TRIP LOG
        </Slogan>
        {/* <img
          src={process.env.PUBLIC_URL + '/images/mainBeachRemove.png'}
          alt="beachRemove"
          className="beachRemove"
        /> */}
      </section>
    </>
  );
}

const Slogan = styled.h1`
  position: absolute;
  left: 50%;
  top: 400px;
  scale: 5;
  color: white;
`;
// const Image = styled.img`
//   position: relative;
//   width: 100%;
// `;

// const Section = styled.section`
//   position: relative;
//   width: 100%;
//   height: 100vh;
// `;
