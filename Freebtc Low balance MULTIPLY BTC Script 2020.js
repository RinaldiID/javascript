// ==UserScript==
// @name         Freebtc Low balance MULTIPLY BTC Script 2020
// @namespace    http://tampermonkey.net/
// @version      1.6
// @author       Rinaldi ID
// @match        https://freebitco.in/*
// @grant        none
// @require      http://ajax.googleapis.com/ajax/libs/jquery/1.9.1/jquery.min.js
// ==/UserScript==

bconfig = {
//Change Bet valor to increase your bet
maxBet: 0.000009, //atur aja sesuka hati lu
wait: 1000,		//atur aja sesuka hati lu
autoexit: 0.0001, //atur aja sesuka hati lu
want: 0.000001, //atur aja sesuka hati lu
toggleHilo:false,
startbal: 0,
won: 0,
};
hilo = 'hi';	//bisa hi bisa lo atur aja sesuka hati lu
multiplier = 1; //bisa 1 bisa 2 atur aja sesuka hati lu
rollDice = function() {

if ($('#double_your_btc_bet_lose').html() !== '') {
$('#double_your_btc_2x').click();
multiplier++;
if(bconfig.toggleHilo)toggleHiLo();
} else {
$('#double_your_btc_min').click();
multiplier = 1; //bisa 1 bisa 2 atur aja sesuka hati lu


$('#start_autobet').click();
multiplier++;


}

if (parseFloat($('#balance').html()) < (parseFloat($('#double_your_btc_stake').val()) * 2) ||
parseFloat($('#double_your_btc_stake').val()) > bconfig.maxBet) {
$('#double_your_btc_min').click();
}

$('#double_your_btc_bet_' + hilo + '_button').click();

setTimeout(rollDice, (multiplier * bconfig.wait) + Math.round(Math.random() * 100));
};

toggleHiLo = function() {
if (hilo === 'lo') {
hilo = 'lo';
} else {
hilo = 'lo';
}
};

rollDice();
