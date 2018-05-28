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


function fixArray (katzDeliLine) {
  let newArray = [];
  let num = 1;
  for (let i = 0; i < katzDeliLine.length; i++) {
    newArray.push(num++);
    newArray.push(`. ${katzDeliLine[i]}`);
  }
  let line = newArray.join();
  return `The line is currently: ${line}`
};

function currentLine (fixArray) {
  if (katzDeliLine.length > 0) {
     return fixArray;
  } else {
    return 'The line is currently empty.';
  }
}
