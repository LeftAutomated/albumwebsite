function Album(slots){
  this.album = slots.album;
  this.artist = slots.artist;
  this.genre = slots.genre;
  this.year = slots.year;
};

Album.instances = {};

Album.convertRowToObj = function(albumRow){
  var album = new Album(albumRow);
  return album;
};

Album.retrieveAll = function(){
  var key = "", keys = [], albumsString = "", albums = {}, i = 0;
  if(localStorage.getItem("albums"))
    albumsString = localStorage.getItem("albums");
  if(albumsString){
    albums = JSON.parse(albumsString);
    keys = Object.keys(albums);
    for(i = 0; i < keys.length; i++){
      key = keys[i];
      Album.instances[key] = Album.convertRowToObj(albums[key]);
    }
  }
};

Album.saveAll = function(){
  var albumsString = "", error = false;
  albumsString = JSON.stringify(Album.instances);
  localStorage.setItem("albums", albumsString);
};

Album.add = function(slots){
  var albums = new Album(slots);
  Album.instances[slots.album] = albums;
  console.log("Album created");
};

Album.update = function(slots){
  var albums = Album.instances[slots.album];
  var year = parseInt(slots.year);
  if(albums.album !== slots.album){
    albums.album = slots.album;
  }
  if(albums.artist !== slots.artist){
    albums.artist = slots.artist;
  }
  if(albums.genre !== slots.genre){
    albums.genre = slots.genre;
  }
  if(albums.year !== year){
    albums.year = year;
  }
};

Album.destroy = function(album){
  delete Album.instances[album];
};

