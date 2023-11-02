const db = require("../models")
const JobListing = db.jobListing

//create and save a new job listing
exports.create=(req,res)=>{
    if(!req.body.title){
        res.status(400).send({message:"The content cannot be empty!"});
        return;
    }

    //create a joblisting
    const jobListing = new JobListing({
        title: req.body.title,
        description: req.body.description,
        location: req.body.location,
        description: req.body.description,
        salary: req.body.salary,
        published: req.body.published ? req.body.published : false
    });

    //save a job in the database
    jobListing
    .save(jobListing)
    .then(data=>{
        res.send(data);
    })

    .catch(err=>{
        res.status(500).send({
            message:
            err.message || "There was some error that occured when listing the job"
        })
    })
}

//retrieve all the jobs from the database
exports.findAll = (req, res) => {
    const title = req.query.title;
    var condition = title ? { title: { $regex: new RegExp(title), $options: "i" } } : {};

    Job.find(condition)
      .then(data => {
        res.send(data);
      })
      .catch(err => {
        res.status(500).send({
          message:
            err.message || "Some error occurred while retrieving Jobs."
        });
      });
};

