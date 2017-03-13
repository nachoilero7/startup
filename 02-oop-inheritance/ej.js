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

class Logger{

	log(info){
		console.log(info);
	}
}

class Movie extends EventEmitter{
	// constructor donde definir las variables que se reciben y guardarlas en el objeto usando this
	constructor(title, year, duration) {
		super();
		this.title = title;
		this.year = year;
		this.duration = duration;
		this.on('play',this.play());
		this.on('pause',this.pause());
		this.on('resume',this.resume());
	}
	// metodos
	play() {
		console.log("Play the movie: "+this.title);
	}
	pause(){
		console.log("Pause the movie: "+this.title);
	}
	resume(){
		console.log("Resume the movie: "+this.title);
	}
}

let logan = new Movie('Logan', 2017, 141);
logan.on('play',this.play());
logan.play();

let kong = new Movie('Kong: La Isla Calavera', 2017, 120);
let deadpool = new Movie('Deadpool', 22016, 108);

