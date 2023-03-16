let counter = 0;

function inception() {
  if (counter > 5) {
    return "Done";
  }

  console.log("Weeee!");
  counter += 1;
  return inception();
}

console.log(inception());
