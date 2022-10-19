import { useState, useEffect } from "react";

export const useSearch = () => {
  //검색창 입력시 상태감지, throttling적용
  const [searchItem, setSearchItem] = useState("");

  const onSearch = (e) => {
    e.preventDefault();
    setInterval(setSearchItem(e.target.value), 1500);
  };

  if (onSearch === "") {
    return searchItem;
  } else if (onSearch.length > 2) {
  }
};

// import { useState } from "react";

// const useInput = (validation) => {
//   const [enteredValue, setEnteredValue] = useState({
//     email: "",
//     pw: "",
//     cpw: "",
//   });
//   const [isTouched, setIsTouched] = useState(false);

//   const enteredValueIsValid = validation(enteredValue.email);
//   const hasError = isTouched && !enteredValueIsValid;
//   const reset = () => {
//     setEnteredValue("");
//     setIsTouched(false);
//   };
//   const inputClasses = hasError
//     ? "form-control invalid"
//     : "form-control";

//   const onBlurHandler = (e) => {
//     setIsTouched(true);
//   };

//   const onChangeHandler = (e) => {
//     e.preventDefault();
//     const nextForm = {
//       ...enteredValue,
//       [e.target.name]: e.target.value,
//     };
//     setEnteredValue(nextForm);
//   };

//   const submitFormHandler = (e) => {
//     e.preventDefault();
//     if (enteredValueIsValid) return;
//     reset();
//   };

//   return {
//     value: enteredValue,
//     setEnteredValue: setEnteredValue,
//     isValid: enteredValueIsValid,
//     hasError,
//     onBlurHandler,
//     onChangeHandler,
//     reset,
//     inputClasses,
//     submitFormHandler,
//   };
// };
// export default useInput;
