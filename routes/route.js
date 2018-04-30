const express=require('express');
const router=express.Router();

const Contact=require('../models/contacts');

//getContacts
router.get('/contacts/:first_name',function(request,response,next){
    Contact.find({first_name:request.params.first_name},function(err,contacts){
        response.json(contacts);
    })
});

//add contact
router.post('/contact',function(request,response,next){
    let newContact=new Contact({
        first_name:request.body.first_name,
        last_name:request.body.last_name,
        phone:request.body.phone
    });
    newContact.save(function(err,contact){
        if(err)
        {
            response.json({msg:'failed to add contact'});
        }
        else{
            response.json({msg:'contact added successfully'});
        }
    });
});

//delete contact
router.delete('/contact/:id',function(request,response,next){
    //console.log("req id to delete: "+request.param.id);
    Contact.remove({_id: request.params.id},function(err,result){
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