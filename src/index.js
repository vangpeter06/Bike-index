import $ from 'jquery';
import 'bootstrap';
import 'bootstrap/dist/css/bootstrap.min.css';
import './css/styles.css';
import BikeService from './bikeElement.js';

function getElements(response) {
  if (response.data) {
    $('.showBikes').text(`Stolen bikes ${response.data}`);
    // $('.showLocations').text(`Stolen bikes locations ${response.bikes.stolen_location} .`);
  } else {
    $('.showErrors').text(`There was an error: ${response}`);
  }
}

async function makeApiCall() {
  const response = await BikeService.stolenBike();
  getElements(response);
}
 

$(document).ready(function() {
  $('#stolen').click(function() {
    // let bikes;
    // let apiResult = makeApiCall(bikes);
    // let colors = $("#colors").val();
    // let location = ("#location").val();
    makeApiCall();
  });
});// 






// function getElements(response) {
//   if (response.bikes) {
//     $('.showBikes').text(`Stolen bikes ${response.bikes}`);
//     // $('.showTemp').text(`The temperature in Kelvins is ${response.main.temp} degrees.`);
//   } else {
//     $('.showErrors').text(`There was an error: ${response.message}`);
//   }
// }

// $(document).ready(function() {
//   $('#stolen').click(function() {
//     let bikes = BikeService.stolenBike.bikes;
  
//     BikeService.stolenBike(bikes)
//       .then(function(response) {
//         getElements(response);
//       });
//   });
// });