const app = document.getElementById("app");

const select = document.createElement("select");
select.id = "skills";

const options = [
  { value: "javascript", text: "Javascript" },
  { value: "next", text: "Next.js" },
  { value: "react", text: "React.js" },
  { value: "typescript", text: "TypeScript" },
];

options.forEach((optionData) => {
  const option = document.createElement("option");
  option.value = optionData.value;
  option.textContent = optionData.text;
  select.appendChild(option);
});

app.appendChild(select);

select.addEventListener("change", (event) => {
  console.log(event.target.value);
});
