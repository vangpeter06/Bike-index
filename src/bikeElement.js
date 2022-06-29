
export default class BikeService {  
  static async stolenBike() {
    try {
      const response = await fetch('https://bikeindex.org:443/api/v3/search');
      const data = await response.json();
      let new_array = [];
      for(i = 0; i <= data.length; i++) {
        new_array.push(data);
        console.log(new_array);
      }
      if (!response.ok) {
        throw Error(response.statusText);
      }
      
    } catch(error) {
      return error.message;
    }
  }
}

// export default class BikeService {  
//   static stolenBike(bikes) {
//     return fetch(`https://bikeindex.org:443/api/v3/search`)
//       .then(function(response) {
//         if (!response.ok) {
//           throw Error(response.statusText);
//         }
//         return response.json(bikes);
//       })
//       .catch(function(error) {
//         return error;
//       });
//   }
// }
