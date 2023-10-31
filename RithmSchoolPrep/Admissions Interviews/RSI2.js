// 'aaaccd' only have 1 sequence
// return a new string: 'a3c2d1'

// input: string
// output: string

function letterSequencer(string) {
  // counter Obj: empty object literal
  const counter = {};
  // initialize a sequence: empty string
  let sequence = "";
  // iterate over the string
  for (let char of string) {
    // check if the char exists in counter
    if (counter[char]) {
      // if so, increment the value
      counter[char]++;
    } else {
      // else, set the value = 1
      counter[char] = 1
    }
  }

  // iterate over the keys
  for (let key in counter) {
    // concat in the keyvalue to sequence
    sequence += `${key}${counter[key]}`
  }

  // return sequence
  return sequence;
}

/*
input: 'aaaccd'

counter = {'a': 3,'c': 2, 'd': 1}
sequence = ''

'd'


expect output: 'a3c2d1'
*/


// '2abh0i17!' -- decode message is 'hi!'
// decode the input
// first char is always a number - skip digit 
// skip digit tells how many digits to skip, next char after skip is first of message

// skip digit occurs after the char to decode

function decoder(string) {
  // initialize decodedMsg: empty string
  let decodedMsg = '';
  // initialize skipDigit = string[0] as a number
  let skipDigit = parseInt(string[0]);
  // iterate over the char of string
  for (let i = 1; i < string.length; i++) {
    // concat the string[i + 1] to decoded
    decodedMsg += string[i]
    
    skipDigit = parseInt(string[i + 1])
    i += skipDigit;
  }
  // return decodedMsg
  return decodedMsg;
}

console.log(decoder('0h0i'));


/*
'2abh0i17!'
decodedMsg = 'h'
skipDigit = string[0] = 2

i = 3

skipDigit = string[3 + 1] = string[4] = 0

return: 'hi!'
expected output: 'hi!'
*/

// string[15]

// '2ab80i17!'
// 8i!


//joel@rithmschool.com


function decodeMessage(codedMessage) {
  let decodedMessage = '';

  let i = 0;
  while (i < codedMessage.length) {
    
    // Get the number to skip
    let skip = parseInt(codedMessage[i]);
    
    // Advance index past number
    i++;
    
    // Skip the specified number of characters
    i += skip;
    
    // If we haven't reached the end, add the decoded character 
    if (i < codedMessage.length) {
      decodedMessage += codedMessage[i];
      i++;
    }
  }

  return decodedMessage;
}

console.log(decodeMessage('2abh0i17!'));
console.log(decodeMessage('0h0i1a!'));











console.log(1 + NaN);






