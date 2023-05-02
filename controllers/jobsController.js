import mongoose from 'mongoose';
import Job from "../models/Jobs.js";
import { StatusCodes } from "http-status-codes";
import { BadRequestError, NotFoundError } from "../errors/index.js";
import checkpermission from "../utils/checkpermission.js";

const createJob = async (req, res) => {
  const { position, company } = req.body;

  if (!(position && company)) {
    throw new BadRequestError("Please provide all values");
  }
  req.body.createdBy = req.user.userId;
  const job = await Job.create(req.body);

  res.status(StatusCodes.CREATED).json({ job });
};

const getAllJobs = async (req, res) => {
  const jobs = await Job.find({ createdBy: req.user.userId });
  res
    .status(StatusCodes.OK)
    .json({ jobs, totalJobs: jobs.length, numOfPages: 1 });
};

const updateJob = async (req, res) => {
  const { id: jobId } = req.params;
  const { company, position } = req.body;

  if (!(company && position)) {
    throw new BadRequestError("Please Provide All Values");
  }

  const job = await Job.findOne({ _id: jobId });
  
  if (!job) {
    throw new NotFoundError(`No job with id ${jobId}`)
  }

  // check permissions
  checkpermission(req.user, job.createdBy);

  const updateJob = await Job.findByIdAndUpdate({ _id: jobId }, req.body, {
    new: true,
    runValidators: true
  })
  res.status(StatusCodes.OK).json({ updateJob });
};

const deleteJob = async (req, res) => {
  const { id: jobId } = req.params;

  const job = await Job.findOne({ _id: jobId });

  if (!job) {
    throw new NotFoundError(`No job with id ${jobId}`);
  }

  checkpermission(req.user, job.createdBy);

  await job.remove();
  res.status(StatusCodes.OK).json({ msg: 'Success Job removed'});
};

const showStats = async (req, res) => {
  let stats = await Job.aggregate([
    { $match: { createdBy: mongoose.Types.ObjectId(req.user.userId)}},
    { $group: { _id: "$status", count: {$sum: 1}}}
  ])

  stats = stats.reduce((acc, curr) => {
    const { _id: title, count } = curr;
    acc[title] = count;

    return acc
  }, {});

  const defaultStats = {
    pending: stats.pending || 0,
    interview: stats.interview || 0,
    declined: stats.declined || 0
  };

  let monthlyApplications = await Job.aggregate([
    {$match: { createdBy: mongoose.Types.ObjectId(req.user.userId)}},
    {
      $group: {
        _id: { year: {$year: "$createdAt"}, month: {$month: "$createdAt"} },
        count: {$sum: 1}
      }
    },
    { $sort: { "_id.year": -1, "_id.month": -1}},
    { $limit: 6}
  ])
  res.status(StatusCodes.OK).json({defaultStats, monthlyApplications})
};

export { createJob, getAllJobs, updateJob, deleteJob, showStats };
