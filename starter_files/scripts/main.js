/*
   Implement a Blackjack hand value calculator.

   Open up the `index.html` file and your console
   to watch the assertions pass as you write your code.

   Also remember, that the parameter `hand` will be an array, so
   you'll need to parse through that first before you can start to
   write your logic.
*/
//notes:
// parseint function is: parseInt(string, radix);//

function handValue(hand) {
  console.log(hand);
  let total = 0;
  for (let i = 0; i < hand.length; i++) {
    if (hand[i] === "K" || hand[i] === "Q" || hand[i] === "J") {
      total += 10;
    }
    for (let j = 0; j < hand[i].length; j++) {
      if total >= 21 {
        let "A" = 1;
        else {
          let "A" = 11;
        }
        let total = hand[j] +=
      }

    }

    console.log();

    // // if (hand[i] === "A"){
    //
    // }
  }

  return;
}


/* -----  Hints ------

1..10   ==> Worth face value (1 = 1, 4 = 4, etc)
K, Q, J ==> Worth 10
A       ==> Worth 1 or 11

*/
