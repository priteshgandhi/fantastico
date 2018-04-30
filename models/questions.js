const mongoose=require('mongoose');

const QuestionsSchema=mongoose.Schema({
    question:{
        type:String,
        required:true
    },
    answer:{
        type:String,
        required:true
    },
    option1:{
        type:String,
        required:true
    },
    option2:{
        type:String,
        required:true
    },
    option3:{
        type:String,
        required:true
    },
    option4:{
        type:String,
        required:true
    },
    level:{
        type:String,
        required:true
    },
});

const contact=module.exports=mongoose.model('questions',QuestionsSchema);
