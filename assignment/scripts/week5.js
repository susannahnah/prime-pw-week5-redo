//create a variable "collection" that is an empty array
//add a function to your script named addToCollection( title, artist, year) that, when called, creates a new record object and pushes it into the "collection" array
//this function should return the newly created record object

let collection = []; 

function addToCollection( artist, title, year ){
   console.log('in my collection, I have ', artist, title, year );
      {
         let newRecord = {
         artist: artist,
         title: title,
         year: year,
         };
         collection.push(newRecord);
         return newRecord; 
      };
}

console.log(addToCollection('Metallica', 'Ride the Lightning', '1984')); 

