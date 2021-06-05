const db = require("../models");

// Defining methods for the SolARcALCULATOR



fetch('https://developer.nrel.gov/api/solar/solar_resource/v1.json?limit=1&api_key=J89k3CiSfltbxqmSjIxUXCzbciQLAh1ZQUQhEGhT&lat=40.0771698&lon=-105.1841239')
  .then(response => response.json())
  .then(data => console.log(data));


//   }
// };
