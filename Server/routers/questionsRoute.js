const express = require('express')
const bodyParser = require('body-parser')
const router = express.Router()

const { question } = require('../utils/DB')
const user = require('../models/user')

router.use(bodyParser.json({
    extended : true
}))
router.use(bodyParser.urlencoded({
    extended : true
}))

router.post('/addQuestion' , (req , res) => {

    try {
        
        const { email , user_id , question_title , question_desc } = req.body;

        console.log(req.body);

        if(email){
    
            const AddQuestion = question.create({
                email : email,
                user_id : user_id,
                question_title : question_title,
                question_desc : question_desc
            })

            console.log(AddQuestion);
    
            if(AddQuestion) {
                res.status(200).send({
                    data : "question Added SuccessFully..."
                })
            }else{
                res.status(401).send({
                    data : "Something Went Wrong..."
                })
            }
    
        }

    } catch (error) {
        
        res.status(401).send({
            data : "Something Went Wrong..."
        })

    }

})

module.exports = router