
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
	
	this.dice1 = dice1;
	this.dice2 = dice2;
	this.dice3 = dice3;
	this.dice4 = dice4;
	this.dice5 = dice5;
	
	this.handNumber;//out of 3 throws per turn
	this.totalGameTurn;//out of the 13 turn
	this.handResult = [dice1, dice2, dice3, dice4, dice5];

	this.displayHand = function(){
		console.log(this.handResult);
		return this.handResult;
	}

	this.checkOnes = function(){
		var sum=0;
		for (var i=0; i<this.handResult.length; i++){
			if(this.handResult[i]==1){
				sum +=1;
			}
		}
		console.log('sum of ones: ' + sum);
		return sum;
	}

	this.checkTwos = function(){
		var sum=0;
		for (var i=0; i<this.handResult.length; i++){
			if(this.handResult[i]==2){
				sum +=2;
			}
		}
		console.log('sum of twos: ' + sum);
		return sum;
	}

	this.checkThrees = function(){
		var sum=0;
		for (var i=0; i<this.handResult.length; i++){
			if(this.handResult[i]==3){
				sum +=3;
			}
		}
		console.log('sum of threes: ' + sum);
		return sum;
	}

	this.check3kind = function(){
		
	 var sort = this.handResult.sort();
	 console.log(sort);
	 
	 for (var i=0; i<sort.length-2; i++){

	 	if (sort[i] == sort[i+1] && sort[i+1]==sort[i+2]){
	 		console.log('Three of a kind: YES' );
	 		return true;
	 	}
	 }	
	 console.log('Three of a kind: NO' );
	return false;	

	}

	this.check4kind = function(){
		
	 var sort = this.handResult.sort();
	 console.log(sort);
	 
	 for (var i=0; i<sort.length-1; i++){

	 	if (sort[i] == sort[i+1] && sort[i+1]==sort[i+2] && sort[i+2]== sort[i+3]){
	 		console.log('Four of a kind: YES' );
	 		return true;
	 	}
	 }	
	 console.log('Four of a kind: NO' );
	return false;	

	}

	this.checkBigStraight = function(){
		var sort = this.handResult.sort();
		console.log(sort + ' checking Big Straight ');
		if (sort[0]+1 == sort[1] && sort[1]+1==sort[2] && sort[2]+1==sort[3] && sort[3]+1 ==sort[4]){
		console.log('Big Straight YES');
			return true;
		} else{
			console.log('Big Straight N0');
			return false;
		}
	}

	this.checkSmallStraight = function(){
		var sort = this.handResult.sort();
		console.log(sort + ' checking Small Straight ');
		var straightSum=0;
		var duplicate=0;

		for (var i=0; i<sort.length-1; i++){

			if (sort[i]+1 == sort[i+1]){
				straightSum +=1;

			}else if(sort[i]==sort[i+1]){
				duplicate +=1;
			}								
		}

		if (straightSum >=3 && duplicate<2){
			console.log('Small Straight YES');
			return true;
		}else{
			console.log('Small Straight NO');
			return false;
		}
	}
	


}

// Creating 5 Dice object instances
var dice1 = new Dice();
var dice2 = new Dice();
var dice3 = new Dice();
var dice4 = new Dice();
var dice5 = new Dice();

dice1.roll();
dice2.roll();
dice3.roll();
dice4.roll();
dice5.roll();

var value1 = dice1.getValue();
//console.log(value1);
var value2 = dice2.getValue();
//console.log(value2);
var value3 = dice3.getValue();
//console.log(value3);
var value4 = dice4.getValue();
//console.log(value4);
var value5 = dice5.getValue();
//console.log(value5);




var hand1 = new Hand(value1, value2, value3, value4, value5);
//var hand1 = new Hand(2, 3, 4, 5, 6); //checking big straight

hand1.displayHand();
hand1.checkOnes();
hand1.checkTwos();
hand1.checkThrees();
hand1.check3kind();
hand1.check4kind();
hand1.checkBigStraight();
hand1.checkSmallStraight();



