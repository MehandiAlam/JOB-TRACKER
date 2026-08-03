import mongoose from "mongoose";

const JobSchema = new mongoose.Schema({
  company: String,
  role: String,
  status: String,
  location: String,
  date: Date,
  salary: Number,
  jobLink: String,
  notes: String,
  user: {
    type: mongoose.Schema.Types.ObjectId,
    ref: "User",
  },
});

const JobModel = mongoose.model("Job", JobSchema);

export default JobModel;