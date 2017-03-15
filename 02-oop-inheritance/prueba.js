'use strict'
import Movie from './movie';
import Logger from './logger';
import Actor from './actor';

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
