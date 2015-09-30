
// Creating Dice function object

function Dice(){

	this.nowNumber=0;
	this.hold = false;
	this.reset;

	this.fuck= function(){
		alert('fuck');
	}

	this.roll = function (){

		this.nowNumber = Math.floor(Math.random() * (6 - 1 + 1)) + 1;
		return this.nowNumber;
	}

	this.getValue = function(){
		return this.nowNumber;
	}

	this.keep = function(){ //to not throw th dice again
		this.hold=true;
		return this.hold;
	}

	this.release = function(){//to release the dice when kept before
		this.hold=false;
		return this.hold;
	}

	this.reset = function(){
		this.nowNumber = 0;
		return this.nowNumber;
	}

}

function Hand(dice1, dice2, dice3, dice4, dice5){

	this.handNumber;//out of 3 throws per turn
	this.totalGameTurn;//out of the 13 turn
	this.handResult = [dice1, dice2, dice3, dice4, dice5];

	this.displayHand = function(){
		return this.handResult;
	}

	this.checkOnes = function(){
		var sum=0;
		for (var i=0; i<this.handResult.length; i++){
			if(this.handResult[i]==1){
				sum +=1;
			}
		}
		return sum;
	}

	this.checkTwos = function(){
		var sum=0;
		for (var i=0; i<this.handResult.length; i++){
			if(this.handResult[i]==2){
				sum +=1;
			}
		}
		return sum;
	}

	this.check3kind = function(){
		
	 var sort = this.handResult.sort();
	 console.log(sort);
	 
	 for (var i=0; i<sort.length-2; i++){

	 	if (sort[i] == sort[i+1] && sort[i+1]==sort[i+2]){
	 		return true;
	 	}
	 }	
	return false;	

	}

	this.check4kind = function(){
		
	 var sort = this.handResult.sort();
	 console.log(sort);
	 
	 for (var i=0; i<sort.length-1; i++){

	 	if (sort[i] == sort[i+1] && sort[i+1]==sort[i+2] && sort[i+2]== sort[i+3]){
	 		return true;
	 	}
	 }	
	return false;	

	}
	


}


var dice1 = new Dice();
console.log(dice1);
dice1.roll();
console.log(dice1);
dice1.keep();
//.roll();
/*
var dice2 = new Dice().roll();;
var dice3 = new Dice().roll();;
var dice4 = new Dice().roll();;
var dice5 = new Dice().roll();;
*/
//dice1.roll();
//dice1.this.fuck();
/*
console.log(dice1.roll());
console.log(dice2.roll());
console.log(dice3.roll());
console.log(dice4.roll());
console.log(dice5.roll());

hand1 = new Hand(dice1, dice2, dice3, dice4, dice5);

console.log(hand1.displayHand());
console.log(hand1.check3kind());
console.log(hand1.check4kind());
//console.log(hand1.checkOnes());
//console.log(hand1.checkTwos());
//console.log(hand1.handResult);
*/
console.log(dice1);
//console.log(dice2);