var person = {    
};

Object.defineProperty(person, "age", {
    value:40,    
    writable: true
  });

Object.defineProperty(person, "name", {    
    value:"Sanjeev",    
    writable: false
  });

Object.defineProperty(person, "email", {    
    value:"sanjeevdonthi@gmail.com",    
    writable: false
  });

person.prototype.setAge = function(age) {
    this.age=age;
}

person.prototype.getAge = function() {
    return this.age;
}


let nm = person.name;
let eml = person.email;
console.log("Name: "+nm);
console.log("Email: "+eml);

          person.setAge=41;
let ag = person.getAge;

console.log("Age : "+ag);