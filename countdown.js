// most basic recursion demo

function countdown(n){

  console.log(n);

  // Base case -- where do I stop recursing?
  if (n <= 0){

    return;

  // recursive case -- my recursion, where I call myself
  } else {

    countdown(n-1);

  }

}

countdown(10);
