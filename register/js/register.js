(function () {
  //1.가입 버튼 눌렀을때 입력했는지 안했는지 확인하기
  $(".register__btn").click(function () {
    const id = $("#id").val();
    const password = $("#password").val();
    const passwordCheck = $("#passwordCheck").val();
    const name = $("#name").val();
    const yy = $("#yy").val();
    const mm = $("#mm").val();
    const dd = $("#dd").val();
    const gender = $("#gender").val();
    const phone = $("#phone").val();

    //2.양식에 맞지 않으면 알려주기
    if (!id) {
      alert("아이디를 입력해주세요.");
      return;
    } else {
      if (!idCheck(id)) {
        alert("아이디는 5~20자 사이의 숫자와 영문 소문자만 사용 가능합니다");
        return;
      }
    }

    if (!password) {
      alert("비밀번호를 입력해주세요.");
      return;
    } else {
      if (!pwdCheck(password)) {
        alert(
          "비밀번호는 영문자,숫자,특수문자를 최소 1개씩 포함한 8~16자로 입력해주세요."
        );
        return;
      }
    }

    if (!passwordCheck) {
      alert("비밀번호 재확인칸을 입력해주세요.");
      return;
    } else {
      if (!(password === passwordCheck)) {
        alert("비밀번호와 비밀번호 재확인란이 동일하지 않습니다.");
        return;
      }
    }

    if (!name) {
      alert("이름을 입력해주세요.");
      return;
    } else {
      if (!nameCheck(name)) {
        alert("이름은 한글로 입력해주세요.");
        return;
      }
    }

    if (!yy) {
      alert("태어난 년도를 입력해주세요.");
      return;
    } else {
      if (!yyCheck(yy)) {
        alert("태어난 년도 4자리를 정확하게 입력해주세요.");
        return;
      }
    }

    if (!mm) {
      alert("태어난 달을 선택해주세요.");
      return;
    }

    if (!dd) {
      alert("태어난 날짜를 입력해주세요.");
      return;
    } else {
      if (!ddCheck(dd)) {
        alert("태어난 날짜를 정확하게 입력해주세요.");
        return;
      }
    }

    if (!gender) {
      alert("성별을 선택해주세요.");
      return;
    }

    if (!phone) {
      alert("전화번호를 입력해주세요.");
      return;
    } else {
      if (!phoneCheck(phone)) {
        alert("전화번호가 형식에 맞지 않습니다.");
        return;
      }
    }

    alert("회원가입이 완료되었습니다.");
    location.href = "./register.html";
  });

  //정규식
  function idCheck(id) {
    const reg = /^[a-z0-9]{5,20}$/g;
    return reg.test(id);
  }

  function pwdCheck(password) {
    const reg = /^(?=.*[a-zA-Z])(?=.*[!@#$%^*+=-])(?=.*[0-9]).{8,16}$/;
    return reg.test(password);
  }

  function nameCheck(name) {
    const reg = /^[가-힣]+$/;
    return reg.test(name);
  }

  function yyCheck(yy) {
    const reg = /^[0-9]{4}$/;
    return reg.test(yy);
  }

  function ddCheck(dd) {
    const reg = /^(0[1-9]|[12][0-9]|3[01])$/;
    return reg.test(dd);
  }

  function phoneCheck(phone) {
    const reg = /^\d{2,3}-\d{3,4}-\d{4}$/;
    return reg.test(phone);
  }
})();
