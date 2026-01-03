// 텍스트 요소 선택
const textElement = document.getElementById("text");

// 버튼 요소 선택
const button = document.getElementById("changeTextButton");

// 버튼 클릭 이벤트 등록
button.addEventListener("click", () => {
  textElement.textContent = "텍스트가 변경되었습니다!";
});
