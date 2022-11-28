// 액션 타입(문자열)
const UPLOAD = 'image/UPLOAD';

export function upload(userImage) {
  return {
    type: UPLOAD,
    payload: userImage,
  };
}

// 초기 상태 설정
const initState = {
  userImage: '',
};

// 리듀서
export default function image(state = initState, action) {
  switch (action.type) {
    // login 함수가 dipatch 에 의해 전달 되면 백엔드 서로 부터 받은 email, nickname 정보를 세팅하고
    // 제일 중요한 isLogin 값을500 (Internal Server Error) true 로 변경, 해당 값은 Header 및 Item 페이지에서 로그인 여부를 판단하는
    // 값이 되어 해당 값에 따라 조건부 처리
    case UPLOAD:
      return {
        ...state,
        userImage: action.payload.image,
      };
    default:
      return state;
  }
}
