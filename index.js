var katzDeli = [];

function takeANumber (katzDeli, name) {
   let deliLine = katzDeli.push(name);
   return `Welcome, ${name}. You are number ${deliLine.length} in line.`
}


function nowServing (deliLine) {
if (deliLine.length > 0) {
  let firstPerson = deliLine.shift();
  return "Currently serving " + firstPerson + ".";
} else {
  return "There is nobody waiting to be served!";
 }
}



function currentLine (katzDeliLine) {
  if (katzDeliLine.length > 0) {
    
  }
}
