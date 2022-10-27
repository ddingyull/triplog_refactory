import { configureStore, createSlice } from '@reduxjs/toolkit';

let planDate = createSlice({
  name: 'planDate',
  initialState: [{
    startDate: '',
    endDate: '',
    period: [],
  }],
  reducers:{
    addPlanDate(state, action){
      // 로그인 유저 계정 확인하는 코드추가해야함..?
      // let copy = [...state];
      state.push(action.payload);
    }
  }
})

export let { addPlanDate } = planDate.actions

export default configureStore({
  // 캘린더에서 여행 날짜 받아서 plan페이지에 보여주는 기능
  reducer: {
    planDate : planDate.reducer
  }
})