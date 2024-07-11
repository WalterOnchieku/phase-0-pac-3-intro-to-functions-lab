function shout(string){
    return string.toUpperCase();
}

function whisper(string){
    return string.toLowerCase();
}

function logShout(string){
let greeting = 'hello';
let uppercaseString = greeting.toUpperCase(); 
console.log(uppercaseString);

}

function logWhisper(string){
let greeting = 'HELLO';
let lowercaseString = greeting.toLowerCase(); 
console.log(lowercaseString);
}

function acceptDinner(string){
    return "Let\'s have dinner together!";
}

function sayHiToHeadphonedRoommate(string){

if(string === whisper(string)){
    return "I can\'t hear you!";
} else if(string === shout(string)){
    return "YES INDEED!";
}else if(string === acceptDinner(string)){
   return "I would love to!";
}

}

