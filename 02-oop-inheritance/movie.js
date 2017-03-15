'use strict'
import EventEmitter from './eventEmitter';
import Actor from './actor';

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
export default Movie {}