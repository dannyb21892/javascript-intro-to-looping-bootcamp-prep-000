function forLoop(forlooparray){
  for (let i = 0; i<25; i++) {
      if (i === 1) {
<<<<<<< HEAD
        forlooparray.push("I am 1 strange loop.");
      }
      else {
        forlooparray.push(`I am ${i} strange loops.`);
      }
  }
  return forlooparray
=======
        forlooparray[i] = "I am 1 strange loop.";
      }
      else {
        forlooparray[i] = `I am ${i} strange loops.`;
      }
  }
>>>>>>> eafdbfd792acae4f3dbffe1788ebbfd522be2955
}

function whileLoop (counter) {
  while (counter > 0) {
    console.log(counter);
    counter = counter-1;
  }
  return("done");
}

function maybeTrue() {
  return Math.random() >= 0.5;
}

function doWhileLoop (array) {
  do {
<<<<<<< HEAD
    array.shift()
    console.log(array)
  }   while (maybeTrue() && array.length > 0);
  return array
}
=======
    array.pop();
  }   while (maybeTrue() && array.length > 0);
}
>>>>>>> eafdbfd792acae4f3dbffe1788ebbfd522be2955
