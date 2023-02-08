const mongoose = require("mongoose");

const batchSchema = new mongoose.Schema(
  {
    registerId: {
      type: String,
      required: true,
      unique: true,
      trim: true,
      uppercase: true,
    },
    startDate: {
      type: Date,
      required: true,
    },
    duration: {
      type: Number,
      required: true,
    },
    fee: {
      type: Number,
      required: true,
    },
    numberOfSeat: {
      type: Number,
      required: true,
    },
    headOfTheBatch: {
      type: String,
      required: true,
      trim: true,
      uppercase: true,
    },
    remarks:{
      type: String,
    },
    subjects: [
      {
        subject: {
          type: String,
          required: true,
          trim: true,
        },
        // teacher_id: {
        //   type: String,
        //   trim: true,
        //   uppercase: true,
        // },
        teacher: {
          type: String,
          trim: true,
        },
      },
    ],
  },
  { timestamps: true }
);


const batch = mongoose.model("batch", batchSchema);
module.exports=batch