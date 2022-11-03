import React from 'react';
import { useEffect } from 'react';
import { Badge } from 'react-bootstrap';
import 'bootstrap/dist/css/bootstrap.min.css';

export default function PlanKakao() {
  //현재 url가져오기
  // const currentUrl = window.location.href;

  useEffect(() => {
    initKakao(); //
  }, []);

  //자바스크립트키로 카카오 init
  const initKakao = () => {
    if (window.Kakao) {
      const kakao = window.Kakao;
      if (!kakao.isInitialized()) {
        kakao.init('e79b288ebffab6c35ea1c3d7624e2f3a');
      }
    }
  };

  //버튼을 누르면 실행되는 함수
  const shareKakao = () => {
    //이부분이 매우 헷갈림 여러 사이트를 참고했는데 이 sendDefault부분을 잘 봐야한다.
    window.Kakao.Link.sendDefault({
      objectType: 'feed',
      content: {
        title: 'TripLog 여행가기',
        description: '함께 여행가기',
        imageUrl: '/images/submain/제주.jpg',
        link: {
          webUrl: 'http://localhost:3000',
        },
      },
      social: {
        likeCount: 286,
        commentCount: 20,
      },
      buttons: [
        {
          title: '자세히 보기',
          link: {
            webUrl: 'http://localhost:3000',
          },
        },
      ],
    });
  };

  return (
    <>
      <Badge
        style={{ backgroundColor: '#036635' }}
        bg="success"
        text="light"
        className="fs-8"
        onClick={() => {
          shareKakao();
        }}
      >
        💌 공유하기
      </Badge>
    </>
  );
}
