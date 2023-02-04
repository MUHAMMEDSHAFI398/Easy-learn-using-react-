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
     
      trim: true,
    },
    phone: {
      type: Number,
     
      unique: true,
    },
    email: {
      type: String,
     
      trim: true,
      unique: true,
    },
    date_of_birth: {
      type: Date,
     
    },
    gender: {
      type: String,
     
    },
    salary: {
      type: Number,
     
    },
    address: {
      house_name: {
        type: String,
       
        trim: true,
      },
      place: {
        type: String,
       
        trim: true,
      },
      post: {
        type: String,
       
        trim: true,
      },
      pin: {
        type: Number,
       
      },
      district: {
        type: String,
       
        trim: true,
      },
      state: {
        type: String,
       
        trim: true,
      },
    },
    qualification: {
      type: String,
     
      trim: true,
    },
    experience: {
      type: Number,
     
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
    image:[{
      url:{
        type:String
      },
      filename:{
        type:String
      }
    }],
    isBlocked:{
      type:Boolean
    }
  },
  { timestamps: true }
);

const teacher = mongoose.model("teacher", teacherSchema);
module.exports=teacher