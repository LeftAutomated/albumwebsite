pl.v.retrieveAndListAllAlbums = {
  setupUserInterface: function(){
    var tableBodyE1 = document.querySelector("table#albums>tbody");
    var keys = [], key = "", row = {}, i = 0;
    Album.retrieveAll();
    keys = Object.keys(Album.instances);
    for(i = 0;i < keys.length; i++){
      key = keys[i];
      row = tableBodyE1.insertRow();
      row.insertCell(-1).textContent = Album.instances[key].album;
      row.insertCell(-1).textContent = Album.instances[key].artist;
      row.insertCell(-1).textContent = Album.instances[key].genre;
      row.insertCell(-1).textContent = Album.instances[key].year;
    }
  }
};