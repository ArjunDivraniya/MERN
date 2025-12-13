class Media {
    constructor(title, artist, duration, filePath) {
      
      
        this.#title = title;
        this.#artist = artist;
        this.#duration = duration;
        this.#filePath = filePath;
        this.#playCount = 0;
        this.#lastPlayed = null;
        this.#isPlaying = false;
        this.currentPosition = 0;
    }
    

    #title;
    #artist;
    #duration;
    #filePath;
    #playCount;
    #lastPlayed;
    #isPlaying;


    getTitle() {
        return this.#title;
    }
    
    getArtist() {
        return this.#artist;
    }
    
    getDuration() {
        return this.#duration;
    }
    
    getPlayCount() {
        return this.#playCount;
    }
    
    getLastPlayed() {
        return this.#lastPlayed;
    }
    
    isCurrentlyPlaying() {
        return this.#isPlaying;
    }
    setCurrentPlaying(bool){
        this.#isPlaying = bool;
    }
    getCurrentPosition() {
        return this.#currentPosition;
    }

    updatePlayStatistics() {
        this.#playCount++;
        this.#lastPlayed = new Date.now();
    }

    play() {
        throw new Error('play() must be implemented by subclass');
    }
    
    pause() {
        throw new Error('pause() must be implemented by subclass');
    }
    
    stop() {
        throw new Error('stop() must be implemented by subclass');
    }   
    
    getMediaInfo() {
        throw new Error('getMediaInfo() must be implemented by subclass');
    }

    getFormattedDuration() {
        const minutes = Math.floor(this.#duration / 60);
        const seconds = this.#duration % 60;
        return `${minutes}:${seconds.toString().padStart(2, '0')}`;
    }

    getProgress() {
        if (this.#duration === 0) return 0;
        return (this.#currentPosition / this.#duration) * 100;
    }

}

class AudioFile extends Media {
    constructor(title, artist, duration, filePath, format, bitrate) {
        super(title, artist, duration, filePath);
        
        
        this.#format = format; 
        this.#bitrate = bitrate; 
        this.#volume = 50; 
    }
    
    #format;
    #bitrate;
    #volume;
 

    play() {
       
        
        this.setCurrentPlaying();
        this.isCurrentlyPlaying();
        return `Playing audio ${this.getTitle()} by ${this.getArtist()}`
       
    }

    pause(){
        this.setCurrentPlaying(false)
        return `Pausing audio ${this.getTitle()}`
    }

    stop() {
        this.setCurrentPlaying(false)
        this.#currentPosition = 0;
        return `Stopped: ${this.getTitle()}`;
    }

    getMediaInfo() {
        return {
            title: this.getTitle(),
            artist: this.getArtist(),
            type: 'Audio',
            format: this.#format,
            duration: this.getFormattedDuration()
        };
}
setVolume(level) {
    this.#volume = Math.max(0, Math.min(100, level));
    return `Volume set to ${this.#volume}%`;
}

getVolume() {
    return this.#volume;
}


}

