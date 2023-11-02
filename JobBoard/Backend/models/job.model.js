module.exports= mongoose =>{
    var schema = mongoose.Schema(
        {
            title: String,
            decscription: String, 
            location: String,
            salary: Number
        },
        {timestamps:true}
    );

    schema.method("toJSON", function(){
        const { _v, _id, ...object} = this.Object();
        object.id = _id;
        return object;
    });

    const JobListing = mongoose.model("job", schema)
    return JobListing
}