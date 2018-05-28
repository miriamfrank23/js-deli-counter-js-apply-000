var katzDeli = [];

function takeANumber (katzDeli, name) {
   katzDeli.push(name);
   return `Welcome, ${name}. You are number ${katzDeli.length} in line.`
}


function nowServing (deliLine) {
if (deliLine.length > 0) {
  let firstPerson = deliLine.shift();
  return "Currently serving " + firstPerson + ".";
} else {
  return "There is nobody waiting to be served!";
 }
}

function splitArray (word) {
  let line = word.split('').join('');
  return line;
};

function currentLine (katzDeliLine) {
  if (katzDeliLine.length > 0) {

  }
}
