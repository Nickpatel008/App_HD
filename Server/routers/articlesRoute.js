const express = require('express')
const bodyParser = require('body-parser')
const router = express.Router()

const { article } = require('../utils/DB')
const user = require('../models/user')

router.use(bodyParser.json({
    extended : true
}))
router.use(bodyParser.urlencoded({
    extended : true
}))

router.post('/addArticle', (req , res) => {

    try {
        
        const { email , user_id , article_title , article_desc } = req.body;

        console.log(req.body);

        if(email){
    
            const Addarticle = article.create({
                email : email,
                user_id : user_id,
                article_title : article_title,
                article_desc : article_desc
            })

            console.log(Addarticle);
    
            if(Addarticle) {
                res.status(200).send({
                    data : "article Added SuccessFully..."
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