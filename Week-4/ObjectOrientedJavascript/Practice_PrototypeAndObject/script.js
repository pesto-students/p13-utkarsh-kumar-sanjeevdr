var person = {    
};

Object.defineProperties(person, {
    name: {
        value: 2004,
        writable: false
    },

    email: {
        value: "sanjeevdonthi@gmail.com",
        writable: false
    },

    age: {
        value: 40,
        writable: true
    },

    age: {    
        setAge: function (newValue) {
            
            this.age = newValue;
             
        },

        getAge: function(){
            return this.age;
        }

    }

    
});

let nm = person.name;
let eml = person.email;
          person.setAge=41;
let ag = person.age;
console.log("Name: "+nm);
console.log("Email: "+eml);
console.log("Age : "+ag);