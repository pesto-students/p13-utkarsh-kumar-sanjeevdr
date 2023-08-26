// The password is at least 8 characters long.
// The password does not contain the string "password".
// The password contains at least one uppercase character.

function isStrongPassword(pwd){

    let pattern = new RegExp(
        "^(?=.*[A-Z]).+$"
      );

    if((pwd.length < 8) || pwd.includes("password") || !pattern.test(pwd)){
        return false;
    }
    return true;
}

console.log(isStrongPassword("Qwerty"));         // false - Too short 
console.log(isStrongPassword("passwordQwerty")); // false - Contains "password" 
console.log(isStrongPassword("qwerty123"));      // false - No uppercase characters 
console.log(isStrongPassword("Qwerty123"));      // true