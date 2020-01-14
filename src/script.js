import './style.scss';

async function getUserAsync() 
{
  let response = await fetch(`https://api.github.com/users`);
  let data = await response.json()
  return console.log(data);
}
getUserAsync();

/*class Animal { 
    constructor(name) {
      this.name = name;
    }
    
    speak() {
      console.log(`${this.name} makes a noise.`);
    }
  }
  
  class Dog extends Animal {
    constructor(name) {
      super(name); // call the super class constructor and pass in the name parameter
    }
  
    speak() {
      console.log(`${this.name} barks.`);
    }
  }
  
  let d = new Dog('Mitzie');
 let  dog = new Dog('test');
  d.speak();
  dog.speak(); */