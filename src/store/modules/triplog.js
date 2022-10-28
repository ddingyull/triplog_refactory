// 액션 타입(문자열)
const LOGIN = 'user/LOGIN';
const LOGOUT = 'user/LOGOUT';
const ADD_PLAN_DATE = 'user/ADD_PLAN_DATE';

// 로그인, 로그아웃 액션 생성 함수
export function login(loginInfo) {
  return {
    type: LOGIN,
    payload: loginInfo,
  };
}

export function logout() {
  return {
    type: LOGOUT,
  };
}

export function addPlanDate(planDate) {
  return {
    type: ADD_PLAN_DATE,
    payload: planDate,
  };
}

// 초기 상태 설정
const initState = {
  user: '',
  isLogin: true, //로그인 끝내고 false로 바꾸기
  planDate: {
    startDate: '',
    endDate: '',
    period: [],
  },
  planItem: [{ id: '', title: '', img: '' }],
};

// 리듀서
export default function users(state = initState, action) {
  switch (action.type) {
    // login 함수가 dipatch 에 의해 전달 되면 백엔드 서로 부터 받은 email, nickname 정보를 세팅하고
    // 제일 중요한 isLogin 값을 true 로 변경, 해당 값은 Header 및 Item 페이지에서 로그인 여부를 판단하는
    // 값이 되어 해당 값에 따라 조건부 처리
    case LOGIN:
      return {
        ...state,
        user: action.payload.user,
        isLogin: true,
      };
    case LOGOUT:
      return {
        ...state,
        isLogin: false,
      };
    case ADD_PLAN_DATE:
      return {
        ...state,
        planDate: action.payload,
      };
    default:
      return state;
  }
}