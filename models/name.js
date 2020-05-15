var mongoose=require("mongoose");

var nameSchema=new mongoose.Schema({
    name1:String,
    name2:String,
    by:String
});

var Name = mongoose.model("Name", nameSchema);
module.exports = Name;