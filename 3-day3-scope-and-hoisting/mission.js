/* 결과
undefined;
2;
1;
*/

const person = {
  name: "효빈",
  sayName: function () {
    console.log(this.name);
  },
};

const run = () => {
  person.sayName();
};
