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

let deliLine = ["Ada", "Grace"];

function fixArray (deliLine) {
  let newArray = [];
  let num = 1;
  for (let i = 0; i < deliLine.length; i++) {
    newArray.push(`${num++}. ${deliLine[i]}`);
  }
  let newLine = newArray.join();
  return `The line is currently: ${newLine}`;
};

function currentLine (deliLine) {
  let len = deliLine.length;
  if (len > 0) {
     return fixArray();
  } else {
    return 'The line is currently empty.';
  }
}
