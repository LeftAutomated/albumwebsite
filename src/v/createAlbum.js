pl.v.createAlbum = {
  setupUserInterface: function() {
    var saveButton = document.forms['Album'].commit;
    Album.retrieveAll();
    saveButton.addEventListener("click", pl.v.createAlbum.handleSaveButton);
    window.addEventListener("beforeunload", Album.saveAll);
  },
  handleSaveButton: function(){
    var formE1 = document.forms['Album'];
    var slots = { album: formE1.album.value,
    artist: formE1.artist.value,
    genre: formE1.genre.value,
    year: formE1.year.value };
    Album.add(slots);
    formE1.reset();
  }
};