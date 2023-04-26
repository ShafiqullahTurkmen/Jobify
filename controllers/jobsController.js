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
  res.send("deleteJob");
};

const showStats = async (req, res) => {
  res.send("showStats");
};

export { createJob, getAllJobs, updateJob, deleteJob, showStats };
