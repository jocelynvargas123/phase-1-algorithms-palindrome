// Write your algorithm here

function isPalindrome(word) {
  //find length
  let len = `${word}`.length
  //pick first letter and last letter then go to the next one
  for (let i = 0; i < len /2; i++ ){
    //if letters dont match then it returns false
    if(word[i] !== word[len - 1 - i]){
      return false
    }else {
      // if they match then it will turn true
      return true
    }
  }
  
}

/* 
  Add your pseudocode here
* write function 
one arguement thats a string
return true if palindrome
return false if not palidrome/

/*
  Add written explanation of your solution here
* start off with a word to test out if it works
RACECAR /

// You can run `node index.js` to view these console logs*/
if (require.main === module) {
  // add your own custom tests in here
  console.log("Expecting: true");
  console.log("=>", isPalindrome("racecar"));

  console.log("");

  console.log("Expecting: false");
  console.log("=>", isPalindrome("robot"));

  console.log("Expecting: true");
  console.log("=>", isPalindrome("mom"));
}

module.exports = isPalindrome;


