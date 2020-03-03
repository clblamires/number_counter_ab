"use strict";

const $ = id => document.getElementById(id);

let ones = 0, twos = 0, threes = 0, fours = 0, fives = 0, sixes = 0, sevens = 0, eights = 0, nines = 0, zeroes = 0;


$('reset').onclick = () => {
    reset();
    $('total_shirts').value = '';
};

function reset(){
    ones = 0, twos = 0, threes = 0, fours = 0, fives = 0, sixes = 0, sevens = 0, eights = 0, nines = 0, zeroes = 0;
    $('ones').value = ones;
    $('twos').value = twos;
    $('threes').value = threes;
    $('fours').value = fours;
    $('fives').value = fives;
    $('sixes').value = sixes;
    $('sevens').value = sevens;
    $('eights').value = eights;
    $('nines').value = nines;
    $('zeroes').value = zeroes;
}
$('calculate').onclick = () => {
    reset();

    
    let shirts = parseInt( $('total_shirts').value );
    // console.log( shirts )

    let numberStr = '';
    for( let i = 1; i <= shirts; i++ ){
        numberStr = String(i);
        // console.log("The number " + numberStr + " is " + numberStr.length + " numbers long");
        for( let j = 0; j < numberStr.length; j++ ){
            // console.log(numberStr[j]);
            // console.log("The number is " + numberStr[j]);
            let digit = numberStr[j];
            if( digit == 1 ) ones++;
            else if( digit == 2 ) twos++;
            else if( digit == 3 ) threes++;
            else if( digit == 4 ) fours++;
            else if( digit == 5 ) fives++;
            else if( digit == 6 ) sixes++;
            else if( digit == 7 ) sevens++;
            else if( digit == 8 ) eights++;
            else if( digit == 9 ) nines++;
            else if( digit == 0 ) zeroes++;
        }
    }

    $('ones').value = ones;
    $('twos').value = twos;
    $('threes').value = threes;
    $('fours').value = fours;
    $('fives').value = fives;
    $('sixes').value = sixes;
    $('sevens').value = sevens;
    $('eights').value = eights;
    $('nines').value = nines;
    $('zeroes').value = zeroes;
}