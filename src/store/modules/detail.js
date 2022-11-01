// 디테일 페이지용 리덕스 선언

// 액션 타입(문자열)
const REVIEW_UPDATE = 'detail/REVIEW_UPDATE';

// 리뷰 업데이트 여부를 전달해 주는 액션 함수
export function reviewUpdate() {
  return {
    type: REVIEW_UPDATE,
  };
}

// 초기 상태 설정
const initState = {
  reviewUpdate: false,
};

// 리듀서
export default function detail(state = initState, action) {
  switch (action.type) {
    case REVIEW_UPDATE:
      return {
        ...state,
        // 업데이트 여부에서 데이터 값만 변화하면 되므로 NOT 을 붙여서 처리
        reviewUpdate: !state.reviewUpdate,
      };
    default:
      return state;
  }
}
