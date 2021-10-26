pl.v.updateAlbum = {
  setupUserInterface: function(){
    var formE1 = document.forms['Album'],
    saveButton = formE1.commit,
    selectAlbumE1 = formE1.selectAlbum;
    var key = ""; keys = [], albums = null, optionE1 = null, i = 0;
    Album.retrieveAll();
    keys = Object.keys(Album.instances);
    for(i = 0; i < keys.length; i++){
      key = keys[i];
      albums = Album.instances[key];
      optionE1 = document.createElement("option");
      optionE1.text = albums.album;
      optionE1.value = albums.album;
      selectAlbumE1.add(optionE1,null);
    }
    selectAlbumE1.addEventListener("change", pl.v.updateAlbum.handleAlbumSelection);
    saveButton.addEventListener("click", pl.v.updateAlbum.handleSaveButton);
    window.addEventListener("beforeunload", Album.saveAll);
  },
  handleAlbumSelection: function(){
    var formE1 = document.forms['Album'];
    var selectAlbumE1 = formE1.selectAlbum, albums = null, key = selectAlbumE1.value;
    if(key){
      albums = Album.instances[key];
      formE1.album.value = albums.album;
      formE1.artist.value = albums.artist;
      formE1.genre.value = albums.genre;
      formE1.year.value = albums.year;
    }
    else{
      formE1.reset();
    }
  },
  handleSaveButton: function(){
    var formE1 = document.forms['Album'], selectAlbumE1 = formE1.selectAlbum;
    var slots = { album: formE1.album.value,
    artist: formE1.artist.value,
    genre: formE1.genre.value,
    year: formE1.year.value};
    Album.update(slots);
    selectAlbumE1.options[selectAlbumE1.selectedIndex].text = slots.album;
    formE1.reset();
  }
};