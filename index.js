/* const pikachu = ["pikachu", "electric", "1"];
const squirtle = ["squirtle", "water", "1"];
const lugia = ["lugia", "flying", "2"]; */

const pikachu = {
  type: "electric",
  gen: 1,
  name: "pikachu",
  greeting: function () {
    return `Hello my name is ${this.name}. I am type ${this.type} 
    and I am from generation ${this.gen}`;
  },
  secondFunc: () => {
    return "This is a pokemon";
  },
};

function describeObj(obj) {
  for (let key in obj) {
    console.log(`Key ${key} has value of ${obj[key]}`);
  }
}
console.log(pikachu.greeting());
//describeObj(pikachu);
