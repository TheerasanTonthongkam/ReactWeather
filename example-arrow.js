var names = ['Ta', 'Boyd', 'Wuth', 'Evgeny', 'Bigg'];

// names.forEach(function (name) {
//   console.log("name " + name);
// });
//
// names.forEach((name) => {
//   console.log("name =>" + name);
// });
//
// names.forEach((name) => console.log(name));
//
// var returnMe = (name) => name + '!';
// console.console.log(returnMe('Ta'));

// var person = {
//   name: 'Ta',
//   greet: function () {
//     names.forEach((name)  => {
//       console.log(this.name + ' hi ' + name);
//     });
//   }
// };
//
// person.greet();


function add (a, b) {
  return a + b;
}

var addStatement = (a, b) => {
  return a + b;
}

console.log(addStatement(1,3));

var addExpression = (a, b) =>  a + b;

console.log(addExpression(2,3));
// console.log(add(1,3));
// console.log(add(9,6));
