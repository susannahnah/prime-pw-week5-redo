let collection = [];
let artist = {};
let title = {};
let year = {};

function addToCollection( artist, title, year ){
  console.log( 'in my collection', artist, title, year );{
    collection.push( artist, title, year);
    }
  }

addToCollection( 'Pulp', 'His and Hers', 1994 );
addToCollection( 'Metallica', 'Kill Em All', 1983 );
