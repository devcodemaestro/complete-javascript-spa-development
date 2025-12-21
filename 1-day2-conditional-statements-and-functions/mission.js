function checkAdult(age) {
  if (age >= 18) {
    console.log("성인입니다");
  } else {
    console.log("미성년자입니다.");
  }
}

//예시 실행
checkAdult(20);

//예시 실행

const calculate = (num1, num2, str) => {
  switch (str) {
    case "+":
      console.log(num1 + num2);
      break;
    case "-":
      console.log(num1 - num2);
      break;
    case "*":
      console.log(num1 * num2);
      break;
    case "/":
      console.log(num1 / num2);
      break;
    default:
      console.log("연산자를 잘못 입력하였습니다.");
      break;
  }
};

calculate(10, 5, "+"); // 15
calculate(10, 5, "*"); // 50
