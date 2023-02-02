const mongoose = require("mongoose");
const Schema = mongoose.Schema;
const teacherSchema = new Schema(
  {
    // registerId: {
    //   type: String,
    //   required: true,
    //   unique: true,
    //   trim: true,
    //   uppercase: true,
    //   immutable: true,
    // },
    name: {
      type: String,
      required: true,
      trim: true,
    },
    phone: {
      type: Number,
      required: true,
      unique: true,
    },
    email: {
      type: String,
      required: true,
      trim: true,
      unique: true,
    },
    date_of_birth: {
      type: Date,
      required: true,
    },
    gender: {
      type: String,
      required: true,
    },
    salary: {
      type: Number,
      required: true,
    },
    address: {
      house_name: {
        type: String,
        required: true,
        trim: true,
      },
      place: {
        type: String,
        required: true,
        trim: true,
      },
      post: {
        type: String,
        required: true,
        trim: true,
      },
      pin: {
        type: Number,
        required: true,
      },
      district: {
        type: String,
        required: true,
        trim: true,
      },
      state: {
        type: String,
        required: true,
        trim: true,
      },
    },
    qualification: {
      type: String,
      required: true,
      trim: true,
    },
    experience: {
      type: Number,
      required: true,
      default: 0,
    },
    remarks: {
      type: String,
    },
    // password: {
    //   type: String,
    //   required: true,
    //   trim: true,
    // },
    // image:[{
    //   url:{
    //     type:String
    //   },
    //   filename:{
    //     type:String
    //   }
    // }]
  },
  { timestamps: true }
);

const teacher = mongoose.model("teacher", teacherSchema);
module.exports=teacher