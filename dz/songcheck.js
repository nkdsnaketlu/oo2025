//Класс по конкретной теме с примерами использования. Различные входные данные, использование функций класса.
// Массив объектов класса, пример использования массива.
//npx tsc kodutöö2.ts
var Song = /** @class */ (function () {
    function Song(songName, songArtist) {
        this.name = songName;
        this.artist_fullname = songArtist;
    }
    return Song;
}());
var Album = /** @class */ (function () {
    function Album(albumName, songs) {
        if (songs === void 0) { songs = []; }
        this.name = albumName;
        this.songs = songs;
    }
    Album.prototype.addSong = function (song) {
        this.songs.push(song);
    };
    Album.prototype.isInAlbum = function (songName) {
        for (var _i = 0, _a = this.songs; _i < _a.length; _i++) {
            var song = _a[_i];
            if (song.name === songName) {
                if (song.name === "Jätke võtmed väljapoole") {
                    return "https://media1.tenor.com/m/tFV9LC5KAGcAAAAd/anne-veski-jjqlny.gif";
                }
                return "yes";
            }
        }
        return "no";
    };
    return Album;
}());
var bl1 = new Song("Rebel Yell", "Billy Idol");
var bl2 = new Song("Eyes Without A Face", "Billy Idol");
var bl3 = new Song("Do Not Stand In A Shadow", "Billy Idol");
var av1 = new Song("Jätke võtmed väljapoole", "Anne Veski");
var av2 = new Song(" Hea tuju laul", "Anne Veski");
var av3 = new Song("Julius Caesar", "Anne Veski");
var album1 = new Album("Billy Idol Hits", [bl1, bl2, bl3]);
var album2 = new Album("Anne Veski Best", [av1, av2, av3]);
console.log(album1.isInAlbum("Rebel Yell"));
console.log(album1.isInAlbum("Sigmaboy"));
console.log(album2.isInAlbum("Jätke võtmed väljapoole"));
