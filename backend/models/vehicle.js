const mongoose = require("mongoose");

const vehicleSchema = new mongoose.Schema({
  name: {
    type: String,
    required: [true, "Please enter Vehicle name"],
    trim: true,
    maxLength: [100, "Product name cannot exceed 100 characters"],
  },
  regNo: {
    type: Number,
    required: [true, "Please enter Registration  Number"],
  },
  engineNo: {
    type: String,
    required: [true, "Please enter Engine Number"],
  },
  regDate: {
    type: String,
    required: [true, "Please enter Registration Date"],
  },
  yearOfManufacture: {
    type: Number,
    required: [true, "Please enter Year of Manufacturing"],
  },
  color: {
    type: String,
    required: [true, "Please enter Color"],
  },
  chasisNumber: {
    type: Number,
    maxlength: [30, "Enter the Chasis Number of Vehicle"],
    required: [true, "Enter the Chasis Number of Vehicle"],
  },
  ownerName: {
    type: String,
    maxlength: [30, "Enter Owner Name of the Vehicle"],
    required: [true, "Enter Owner Name of the Vehicle"],
  },
  ownerCity: {
    type: String,
    maxlength: [30, "Please Enter the City of the Vehicle's Owner"],
    required: [true, "Please Enter the City of the Vehicle's Owner"],
  },
  ownerCnic: {
    type: Number,
    maxlength: [30, "Please Enter CNIC"],
    required: [true, "Please Enter CNIC"],
  },
  ratings: {
    type: Number,
    default: 0
},
  images: [
    {
      public_id: {
        type: String,
      },
      url: {
        type: String,
      },
    },
  ],
  numOfReviews: {
    type: Number,
    default: 0
},
reviews: [
    {
        user: {
            type: mongoose.Schema.ObjectId,
            ref: 'User',
            required: true
        },
        name: {
            type: String,
            required: true
        },
        rating: {
            type: Number,
            required: true
        },
        comment: {
            type: String,
            required: true
        }
    }
],
user: {
    type: mongoose.Schema.ObjectId,
    ref: 'User',
    required: false
},
  isApproved: {
    type: Boolean,
    default: false
  }
});

module.exports = mongoose.model("Vehicle", vehicleSchema);
