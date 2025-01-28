console.log("Hello World!\n==========\n");

// Exercise 1 Section
console.log("EXERCISE 1:\n==========\n");

for (let n = 0; n <= 100; n++) {
  if (n % 2 != 0) {
    console.log(`${n}`);
  }
}

// Exercise 2 Section
console.log("EXERCISE 2:\n==========\n");

for (let i = 1; i <= 100; i++) {
  if (i % 3 == 0 && i % 5 == 0) {
    console.log(`${i} FIZZBUZZ`);
  } else if (i % 3 == 0) {
    console.log(`${i} FIZZ`);
  } else if (i % 5 == 0) {
    console.log(`${i} BUZZ`);
  }
}

console.log(`From the Lesson:`)

for (let iiii = 1; iiii <= 100; iiii++) {

    let output = "";

    if (iiii % 3 == 0) {
        output += "FIZZ";
    }
    if (iiii % 5 == 0) {
        output += "BUZZ";
    }
    console.log(`${iiii} ${output}`)
}

// Exercise 3 Section
console.log("EXERCISE 3:\n==========\n");

let nn = 0;
let nnn = 0;

console.log(`Odd While:`);

while (nn <= 100) {
  if (nn % 2 != 0) {
    console.log(`${nn}`);
  }
  nn++;
}

console.log(`Odd Do/While:`);

do {
  if (nnn % 2 != 0) {
    console.log(`${nnn}`);
  }
  nnn++;
} while (nnn <= 100);
{
}

console.log(`FIZZBUZZ While:`);

let ii = 1;
let iii = 1;

while (ii <= 100) {
  if (ii % 3 == 0 && ii % 5 == 0) {
    console.log(`${ii} FIZZBUZZ`);
  } else if (ii % 3 == 0) {
    console.log(`${ii} FIZZ`);
  } else if (ii % 5 == 0) {
    console.log(`${ii} BUZZ`);
  }
  ii++;
}

console.log(`FIZZBUZZ Do/While:`);
do {
  if (iii % 3 == 0 && iii % 5 == 0) {
    console.log(`${iii} FIZZBUZZ`);
  } else if (iii % 3 == 0) {
    console.log(`${iii} FIZZ`);
  } else if (iii % 5 == 0) {
    console.log(`${iii} BUZZ`);
  }
  iii++;
} while (iii <= 100);

// Exercise 4 Section
console.log("EXERCISE 4:\n==========\n");

let numFind = Math.round((Math.random() * 500)); // creates a random number between 0 and 500
let numLimit = Math.round(Math.random() * (500 - 100) + 100); // creates a random number between 100 and 500

for (let iiiii = 1; iiiii <= numLimit; iiiii++) {
    if (iiiii == numFind) {
    console.log(`Found ${numFind} between 1 and ${numLimit}!`);
    break;
    }
    if (iiiii == numLimit) {
    console.log(`Did not find ${numFind} between 1 and ${numLimit}...`)
    }
}

// Exercise 5 Section
console.log("EXERCISE 5:\n==========\n");


let fizzDivisor = Math.round(Math.random() * (10 - 1) + 1);
let buzzDivisor = Math.round(Math.random() * (10 - 1) + 1);
let number = Math.round(Math.random() * (1000 - 1) + 1);
let start = Math.round(Math.random() * (10 - 1) + 1);

console.log(`Here are the numbers between ${start} and ${number} that are divisible by ${fizzDivisor}, ${buzzDivisor}, or both ${fizzDivisor} and ${buzzDivisor}.`)

for (let i = start; i <= number; i++) {
    if (i % fizzDivisor == 0 && i % buzzDivisor == 0) {
      console.log(`${i} FIZZBUZZ`);
    } else if (i % fizzDivisor == 0) {
      console.log(`${i} FIZZ`);
    } else if (i % buzzDivisor == 0) {
      console.log(`${i} BUZZ`);
    }
  }

  console.log(`Using the "output variable" method:`)

  console.log(`Here are the numbers between ${start} and ${number} that are divisible by ${fizzDivisor}, ${buzzDivisor}, or both ${fizzDivisor} and ${buzzDivisor}.`)

  for (let i = start; i <= number; i++) {
    let output = "";

    if (i % fizzDivisor == 0) {
        output += "FIZZ";
    }

    if (i % buzzDivisor == 0) {
        output += "BUZZ";
      }

      console.log(`${i} ${output}`)

    }

    //I like that my first method fully skips the numbers that aren't divisible but I can see the uses for both.