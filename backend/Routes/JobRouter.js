import auth from "../middleware/auth.js";
import JobModel from "../Models/JobSchema.js";
import express from "express";

const Jobrouter = express.Router();

Jobrouter.post("/add", auth, async (req, res) => {
    try {
        const job = new JobModel({
            ...req.body,
            user: req.user.id
        });

        await job.save();

        return res.status(201).json({
            message: "Job created"
        });
    } catch (error) {
        return res.status(400).json({
            message: error.message
        });
    }
});

Jobrouter.get("/", auth, async (req, res) => {
    try {
        const jobs = await JobModel.find({
            user: req.user.id
        });

        return res.status(200).json(jobs);

    } catch (error) {
        return res.status(500).json({
            message: error.message
        });
    }
});

Jobrouter.get("/:id", auth, async (req, res) => {
    try {
        const job = await JobModel.findOne({
            _id: req.params.id,
            user: req.user.id
        });

        if (!job) {
            return res.status(404).json({
                message: "Job not found"
            });
        }

        return res.status(200).json(job);

    } catch (error) {
        return res.status(500).json({
            message: error.message
        });
    }
});

Jobrouter.put("/:id", auth, async (req, res) => {
    try {

        const updatedJob = await JobModel.findOneAndUpdate(
            {
                _id: req.params.id,
                user: req.user.id
            },
            req.body,
            { new: true }
        );

        if (!updatedJob) {
            return res.status(404).json({
                message: "Job not found"
            });
        }

        return res.status(200).json(updatedJob);

    } catch (error) {
        return res.status(500).json({
            message: error.message
        });
    }
});

Jobrouter.delete("/:id", auth, async (req, res) => {
    try {

        const deletedJob = await JobModel.findOneAndDelete({
            _id: req.params.id,
            user: req.user.id
        });

        if (!deletedJob) {
            return res.status(404).json({
                message: "Job not found"
            });
        }

        return res.status(200).json({
            message: "Job deleted successfully"
        });

    } catch (error) {
        return res.status(500).json({
            message: error.message
        });
    }
});

export default Jobrouter;