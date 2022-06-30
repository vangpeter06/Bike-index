export default class BikeElement {  
  static stolenBike() {
    return fetch(`https://bikeindex.org:443/api/v3/search`)
      .then(response =>{
        if (!response.ok){
          throw Error("ERROR");
        }
        return response.json();
    //  console.log(response);
  })
  // .then (data => {
  //  console.log(data.bikes)
  //  const html = data.bikes.map( bikes => {
  //    return `
  //    <div class="bike">
  //     <p> title : ${bikes.title}</p>
  //     <p> location : ${bikes.stolen_location}</p>
  //     <p> date stolen: ${bikes.date_stolen}</p>
  //     <p>bike model: ${bikes.frame_model}</p>
  //     </div>`
  //  }).join('');
  //  console.log(html)
  //  document.querySelector("#showBikes").insertAdjacentHTML('afterbegin',html)
  // })
  .catch( error => {
   console.log(error)
  });
}
// stolenBike()
}



// export default class BikeService {  
//   static stolenBike() {
//     return fetch(`https://bikeindex.org:443/api/v3/search`)
//       .then(function(response) {
//         if (!response.ok) {
//           throw Error(response.statusText);
//         }
//         const data = response.json()
//         console.log(data)
//         return response.json();
//       })
//       .catch(function(error) {
//         return error;
//       });
//   }
// }

// export default class BikeService {  
//   static async stolenBike() {
//     try {
//       const response = await fetch('https://bikeindex.org:443/api/v3/search');
//       const data = await response.json();
     
//       if (!response.ok) {
//         throw Error(response.statusText);
//       }
      
//     } catch(error) {
//       return error.message;
//     }
//   }
// }

