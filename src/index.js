// import $ from 'jquery';
import 'bootstrap';
import 'bootstrap/dist/css/bootstrap.min.css';
import './css/styles.css';
import BikeElement from './bikeElement.js';
 

let newBike = BikeElement.stolenBike();

// console.log(newBike)

function bikeList(){
   const newBikeList = newBike.bikes.map( bikes =>{
   `
    <div class="bike">
     <p> title : ${bikes.title}</p>
     <p> location : ${bikes.stolen_location}</p>
     <p> date stolen: ${bikes.date_stolen}</p>
    <p>bike model: ${bikes.frame_model}</p>
    </div>`

   })
   return bikeList;
  }
  document.querySelector("#showBikes").insertAdjacentHTML('afterbegin', newBikeList)     


//  $(document).ready(function() {
//   $('#stolen').click(function() {
//     BikeElement.stolenBike()
//       .then(function(data) {
//         getElements(data);
//       });
//   });
// });



// function getElements(data) {
//   const html = data.bikes.map( bikes => {
//     return `
//     <div class="bike">
//       <p> title : ${bikes.title}</p>
//       <p><img src"${bikes.url}" alt"${bikes.title}"</p>
//       <p> location : ${bikes.stolen_location}</p>
//       <p> date stolen: ${bikes.date_stolen}</p>
//       <p>bike model: ${bikes.frame_model}</p>
//       </div>`
//    }).join('');


  
// function getElements(data) {
//   if (data.bike) {

//     $('.title').text('${bikes.title}').join('');
//     $('.location').text('${bikes.stolen_location}').join('');
//     $('.dateStolen').text('${bikes.date_stolen}').join('');
//     $('.bikeModel').text('${bikes.frame_model}').join('');
//   } else {
//     $('.showErrors').text(`There was an error: ${data.message}`);
//   }
// }

// $(document).ready(function() {
//   $('#stolen').click(function() {
//     BikeElement.stolenBike()
//       .then(function(data) {
//         getElements(data);
//       });
//   });
// });


// function getElements(response) {
//   if (response.bikes) {
//     $('#showBikes').text(`Stolen bikes ${response.bikes}`);
//     // $('.showTemp').text(`The temperature in Kelvins is ${response.main.temp} degrees.`);
//   } else {
//     $('.showError').text(`There was an error: ${response.message}`);
//   }
// }

// $(document).ready(function() {
//   $('#stolen').click(function() {
//     // let bikes = BikeService.stolenBike.bikes;
  
//     BikeService.stolenBike()
//       .then(function(response) {
//         getElements(response);
//       });
//   });
// });



// function getElements(response) {
//   if (response.data) {
//     $('.showBikes').text(`Stolen bikes ${response.data}`);
//     // $('.showLocations').text(`Stolen bikes locations ${response.bikes.stolen_location} .`);
//   } else {
//     $('.showErrors').text(`There was an error: ${response}`);
//   }
// }



// async function makeApiCall() {
//   const response = await BikeService.stolenBike();
//   getElements(response);
// }
 


// $(document).ready(function() {
//   $('#stolen').click(function() {
//     // let bikes;
//     // let apiResult = makeApiCall(bikes);
//     // let colors = $("#colors").val();
//     // let location = ("#location").val();
//     makeApiCall();
//   });
// });// 






