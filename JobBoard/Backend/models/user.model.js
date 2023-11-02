module.exports = mongoose =>{
    var schema = mongoose.Schema(
        {
            name:{
                first: {
                    type: String,
                    trim : true,
                },
                last: {
                    type: String, 
                    trim: true,
                }
            },
            email: {
                type: String, 
                required: true,
                lowercase: true,
                unique: true
            },
            password
        }
    )
}