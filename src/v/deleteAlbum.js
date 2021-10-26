pl.v.deleteAlbum = {
  setupUserInterface: function(){
    var deleteButton = document.forms['Album'].commit;
    var selectE1 = document.forms['Album'].selectAlbum;
    var key = "", keys = [], albums = null, optionE1 = null, i = 0;
    Album.retrieveAll();
    keys = Object.keys(Album.instances);
    for(i = 0; i < keys.length; i++){
      key = keys[i];
      albums = Album.instances[key];
      optionE1 = document.createElement("option");
      optionE1.text = albums.album;
      optionE1.value = albums.album;
      selectE1.add(optionE1, null);
    }
    deleteButton.addEventListener("click", pl.v.deleteAlbum.handleDeleteButton);
    window.addEventListener("beforeunload", Album.saveAll);
  },
  handleDeleteButton: function(){
    var selectE1 = document.forms['Album'].selectAlbum;
    var album = selectE1.value;
    if(album){
      Album.destroy(album);
      selectE1.remove(selectE1.selectedIndex);
    }
  }
}