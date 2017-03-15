'use strict'
class EventEmitter {  
  
	constructor() {
    	this.listeners = new Map();
	}

	on(label, callback) {
		this.listeners.has(label) || this.listeners.set(label, []);
    	this.listeners.get(label).push(callback);
	}

	isFunction(obj) {  
	    return typeof obj == 'function' || false;
	};

	off(label, callback) {  
	    let listeners = this.listeners.get(label),
	        index;

	    if (listeners && listeners.length) {
	        index = listeners.reduce((i, listener, index) => {
	            return (isFunction(listener) && listener === callback) ?
	                i = index :
	                i;
	        }, -1);

	        if (index > -1) {
	            listeners.splice(index, 1);
	            this.listeners.set(label, listeners);
	            return true;
	        }
	    }
	    return false;
	}

	emit(label, args) {  
	    let listeners = this.listeners.get(label);

	    if (listeners && listeners.length) {
	        listeners.forEach((listener) => {
	            listener(args); 
	        });
	        return true;
	    }
	    return false;
	}
}

class Movie extends EventEmitter{

	constructor(title, year, duration) {
		super();
		this.title = title;
		this.year = year;
		this.duration = duration;
		//KEYPOINT 8.Add a method to Movie that will allow to add one or more actors at the same time.
		this.cast = [];
	}
	addCast(actors){
		let act = actors;
		if (act.length != 0){
			act.forEach((Actor) => {
				this.cast.push(Actor);
			});
		}
	}
	play() {
		this.emit('play');
	}
	pause(){
		this.emit('pause');
	}
	resume(){
		this.emit('resume');
	}
}

let logan = new Movie('Logan', 2017, 141);
let kong = new Movie('Kong: La Isla Calavera', 2017, 120);
let deadpool = new Movie('Deadpool', 22016, 108);

let playFunction = function () { console.log("The PLAY event have been emmited!") };
let pauseFunction = function () { console.log("The PAUSE event have been emmited!") };
let resumeFunction = function () { console.log("The RESUME event have been emmited!") };

logan.on('play', playFunction);
logan.on('pause', pauseFunction);
logan.on('resume', resumeFunction);
kong.on('play', playFunction);
kong.on('pause', pauseFunction);
kong.on('resume', resumeFunction);
deadpool.on('play', playFunction);
deadpool.on('pause', pauseFunction);
deadpool.on('resume', resumeFunction);

//KEYPOINT 5.Create a Logger class with a log(info) method that will output info to the console. Make log listen to a Movie's 'play' event.
class Logger{

	log(){
		console.log("The PLAY event have been emmited! From the Logger...");
	}
}
let logger = new Logger();
logan.on('play',logger.log);
/*
logan.play();
kong.pause();
deadpool.resume();
*/

//KEYPOINT 6.Create an object called Social with methods share(friendName) and like(friendName) that will generate the following output "{friendName} 
//likes/share {Movie Name}".
let social = {
	share(friendName){
		console.log(`${friendName} share ${this['title']}`);
	},
	like(friendName){
		console.log(`${friendName} likes ${this['title']}`);
	}
}
Object.assign(logan,social);
Object.assign(kong,social);
Object.assign(deadpool,social);
/*
logan.share('Nachi');
kong.like('Nachito');
*/

class Actor{
	constructor(fullName,age){
		this.fullName = fullName;
		this.age = age;
	}
}

//KEYPOINT 8.
let will = new Actor('Will Ferrell',49);
let jim = new Actor('Jim Carrey',55);
let steve = new Actor('Steve Carell',54);
let otherCast = [
	will,
	jim,
	steve
];
logan.addCast(otherCast);
//console.log(logan['cast'].length);
