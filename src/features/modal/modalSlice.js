import { createSlice } from "@reduxjs/toolkit";
const initialState = {
  isOpen: false,
};

export const modalSlice = createSlice({
  name: "modal", //name of reducer function
  initialState, //default value
  reducers: {
    openRegi: (state, action) => {
      state.isOpen = true;
    },
    closeRegi: (state, action) => {
      state.isOpen = false;
    },
  },
});

//selectors
export const { openRegi, closeRegi } = modalSlice.actions;
export default modalSlice.reducer;

// createAction으로 액션을 만들면 액션에 필요한 추가 데이터는 payload라는 이름을 사용한다.
// 액션 생성 함수에서 받아온 파라미터를 그대로 payload에 넣는 것이 아니라 변형을 주어서 넣고 싶다면
// createAction의 두 번째 함수에 payload를 정의하는 함수를 따로 선언해서 넣어 주면 된다.

// > redux - action에 대한 설명이지만 payload사용법은 RTK와 동일하다.
// > payload = action을 발생시키는데 필요한 값.

// > 상태변경을 원하는 컴포넌트에 dispatch로 특정 state slice를 가져오고,
// > 해당 slice함수의 인수로 payload에 해당하는 값을 지정해준 뒤 사용하면
// > state를 유연하고 간편하게 관리할 수 있음.

// const initialState = {
//   input: "",
//   todos: [
//     {
//       id: 1,
//       text: "방 청소하기",
//       done: true,
//     },
//     {
//       id: 2,
//       text: "리덕스 공부 끝내기",
//       done: false,
//     },
//   ],
// };

// const todos = handleActions(
//   {
//     [CHANGE_INPUT]: (state, { payload: input }) => ({ ...state, input }),
//     [INSERT]: (state, { payload: todo }) => ({
//       ...state,
//       todos: state.todos.concat(todo),
//     }),
//     [TOGGLE]: (state, { payload: id }) => ({
//       ...state,
//       todos: state.todos.map((todo) =>
//         todo.id === id ? { ...todo, done: !todo.done } : todo
//       ),
//     }),
//     [REMOVE]: (state, { payload: id }) => ({
//       ...state,
//       todos: state.todos.filter((todo) => todo.id !== id),
//     }),
//   },
//   initialState
// );

// export default todos;
