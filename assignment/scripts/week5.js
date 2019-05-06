let collection = [];

function addToCollection( artist, title, year ){
  console.log( 'in my collection', artist, title, year );{
    let newAlbum = {
      artist: artist,
      title: title,
      year: year,
    };
    collection.push(newAlbum);
    return;
   }
  }

addToCollection( 'Pulp', 'His and Hers', 1994 );
addToCollection( 'Metallica', 'Kill Em All', 1983 );
