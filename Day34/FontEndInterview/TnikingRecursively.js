let user = {
  name: "Haritha",
  Address: {
    personal: {
      city: "Rajampet",
      area: "Pedduru",
    },
    Office: {
      city: "Hyderabad",
      area: {
        landmark: "kukatpally",
      },
    },
  },
};

// write above  program recursively

let finalObject = {};
let magic = function (obj, parent) {
  for (let key in obj) {
    if (typeof obj[key] === "object") {
      magic(obj[key], parent + "_" + key);
    } else {
      finalObject[parent + "_" + key] = obj[key];
    }
  }
};

magic(user, "user");

console.log(finalObject);
