//Класс по конкретной теме с примерами использования. Различные входные данные, использование функций класса.
// Массив объектов класса, пример использования массива.
//npx tsc kodutöö2.ts
class Song {
    name: string;
    artist_fullname: string;

    constructor(songName: string, songArtist: string) {
        this.name = songName;
        this.artist_fullname = songArtist;
    }
}

class Album {
    name: string;
    songs: Song[];

    constructor(albumName: string, songs: Song[] = []) {
        this.name = albumName;
        this.songs = songs;
    }

    /*addSong(song: Song) {
        this.songs.push(song);
    }*/

    isInAlbum(songName: string): string {
        for (let song of this.songs) {
            if (song.name === songName) {
                if (song.name === "Jätke võtmed väljapoole") {
                    return "https://media1.tenor.com/m/tFV9LC5KAGcAAAAd/anne-veski-jjqlny.gif";
                }
                return "yes";
            }
        }
        return "no";
    }
}
let bl1 = new Song("Rebel Yell", "Billy Idol");
let bl2 = new Song("Eyes Without A Face", "Billy Idol");
let bl3 = new Song("Do Not Stand In A Shadow", "Billy Idol");

let av1 = new Song("Jätke võtmed väljapoole", "Anne Veski");
let av2 = new Song(" Hea tuju laul", "Anne Veski");
let av3 = new Song("Julius Caesar", "Anne Veski");

let album1 = new Album("Billy Idol Hits", [bl1, bl2, bl3]);
let album2 = new Album("Anne Veski Best", [av1, av2, av3]);

console.log(album1.isInAlbum("Rebel Yell"));
console.log(album1.isInAlbum("Sigmaboy"));
console.log(album2.isInAlbum("Jätke võtmed väljapoole"));