import { useNavigate } from 'react-router';
import { useLayoutEffect, useRef } from 'react';
import gsap from 'gsap';
import { ScrollTrigger } from 'gsap/all';
import styled from 'styled-components';

gsap.registerPlugin(ScrollTrigger);

export default function MainIntro() {
  const navigator = useNavigate();

  useLayoutEffect(() => {
    const slide1 = gsap.timeline();
    // const slide2 = gsap.timeline();
    slide1
      .to(
        '#slogan',
        {
          scale: 2,
          y: 200,
          duration: 2,
        },
        1
      )
      .to(
        '.beachRemove',
        {
          y: -800,
          duration: 2,
        },
        1
      );
    slide1
      .to(
        '.beachRemove',
        {
          opacity: 0,
          duration: 2,
        },
        2
      )
      .to(
        '.beach',
        {
          opacity: 0,
          duration: 2,
        },
        2
      )
      .to(
        '#slogan',
        {
          opacity: 0,
          duration: 1,
        },
        2
      );
    // slide2
    // .to(
    //   '#slogan',
    //   {
    //     scale: 2,
    //     y: 300,
    //   },
    //   1
    // )
    // .to(
    //   '.beachRemove',
    //   {
    //     y: -500,
    //   },
    //   1
    // )
    // .to(
    //   '.beachRemove',
    //   {
    //     opacity: 0,
    //   },
    //   2
    // )
    // .to(
    //   '.beach',
    //   {
    //     opacity: 0,
    //   },
    //   2
    //   );
    ScrollTrigger.create({
      animation: slide1,
      trigger: '.slide1',
      pin: true,
      start: 'top top',
      end: '+=5000 ',
      scrub: true,
      markers: true,
      // 화면 중앙
    });
  });

  return (
    <>
      <section class="slide1">
        <MainBeach
          src={process.env.PUBLIC_URL + '/images/mainBeach.jpg'}
          alt="beach"
          className="beach"
        />
        <Slogan className="text fw-bold" id="slogan">
          TRIP LOG
        </Slogan>
        <Image
          src={process.env.PUBLIC_URL + '/images/mainBeachRemove.png'}
          alt="beachRemove"
          className="beachRemove"
        />
      </section>
    </>
  );
}

// const Section = styled.div`
//   &::after {
//     content: '';
//     display: block;
//     width: 500px;
//     height: 500px;
//     background: linear-gradient(180deg, rgba(0, 0, 0, 0), rgb(255, 255, 255));
//     top: 0px;
//     transition: ease-in-out 1s;
//   }
// `;
const MainBeach = styled.img``;
const Slogan = styled.h1`
  position: absolute;
  left: 47%;
  top: 30%;
  scale: 5;
  color: white;
`;
const Image = styled.img`
  position: absolute;
  top: 83%;
  width: inherit;
  height: inherit;
`;
