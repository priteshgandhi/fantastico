const express=require('express');
const router=express.Router();

const Question=require('../models/questions');

//getContacts
router.get('/questions/:level',function(request,response,next){
    Question.find({level:request.params.level},function(err,question){
        response.json(question);
    })
});

//add contact
router.post('/question',function(request,response,next){
    let newQuestion=new Question({
        question:request.body.question,
        answer:request.body.answer,
        option1:request.body.option1,
        option2:request.body.option2,
        option3:request.body.option3,
        option4:request.body.option4,
        level:request.body.level
    });
    newQuestion.save(function(err,question){
        if(err)
        {
            response.json({msg:'failed to add question'});
        }
        else{
            response.json({msg:'question added successfully'});
        }
    });
});

//delete contact
router.delete('/question/:id',function(request,response,next){
    //console.log("req id to delete: "+request.param.id);
    Question.remove({_id: request.params.id},function(err,result){
        if(err)
        {
            response.json(err);
        }
        else{
            response.json(result);
        }
    });
});

module.exports=router;