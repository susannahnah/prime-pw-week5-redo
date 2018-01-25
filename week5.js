class Record{
  constructor( title, artist, year ){
    this.title = title;
    this.artist = artist;
    this.year = year;
  }
}

let collection = [];

// BASE MODE
function addToCollection( title, artist, year ){
  console.log( 'in addToCollection:', title, artist, year );
  let newRecord = new Record( title, artist, year )
  collection.push( newRecord );
  return newRecord;
} // end addToCollection

// PRO MODE
function allBy( artist ){
  console.log( 'in allBy:', artist );
  let matches = [];
  for( record of collection ){
    if( record.artist === artist){
      matches.push( record );
    } // end match
  } // end loop
  return matches;
} //end allBy


// HARD MODE
function findRecord( title ){
  console.log( 'in findRecord:', title );
  for( i in collection ){
    if( collection[ i ].title === title ){
      return i;
    } //ed match
  } //end loop
  return false;
} // end findRecord
