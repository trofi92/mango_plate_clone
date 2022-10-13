export const Join = () => {
  return (
    <>
      <div>
        <form
          //   onSubmit={onSubmit}
          style={{
            display: "flex",
            flexDirection: "column",
            textDecoration: "none",
            color: "black",
          }}
        >
          <div>
            <label>E-mail : </label>
            <input
              name="email"
              //   onBlur={onBlurHandler}
              //   onChange={onChangeHandler}
              placeholder="이메일 주소"
              style={{ width: "200px" }}
              type="email"
              maxLength="50"
            />
            {/* {hasError && ( */}
            <p className="error-text">이메일 주소를 작성해주세요</p>
            {/* )} */}
          </div>
          <div>
            <div></div>
            <div className="form-control">
              <label htmlFor="PW">PW : </label>
              <input
                name="pw"
                //   onBlur={onBlurHandler}
                //   onChange={onChangeHandler}
                placeholder="8~12자, 특수문자, 숫자 각 1개 이상"
                style={{ width: "200px" }}
                type="password"
                minLength="8"
                maxLength="12"
              />
            </div>
            <div className="form-control">
              <label htmlFor="check PW">check PW : </label>
              <input
                name="cpw"
                //   onBlur={onBlurHandler}
                //   onChange={onChangeHandler}
                placeholder="비밀번호를 확인해주세요"
                style={{ width: "200px" }}
                type="password"
                minLength="8"
                maxLength="12"
              />
            </div>
          </div>
          <div className="form-actions">
            <button
              // disabled={!isValid}
              onClick={
                () => console.log("WIP")
                // validValue.pw === validValue.cpw &&
                // passwordRegex.test(validValue.pw) === true &&
                // validValue.pw.length > 7 &&
                // validValue.cpw.length > 7 &&
                // emailRegex.test(validValue.email) === true
                //   ? register() && navigator("/", { replace: true })
                //   : alert("check your form, dumbass")
              }
            >
              Join
            </button>
          </div>
        </form>
      </div>
    </>
  );
};
