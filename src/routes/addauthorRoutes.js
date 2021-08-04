const express = require('express');

const addauthorsRouter=express.Router();

addauthorsRouter.get("/",function(req,res){
    res.render("addauthor",{
        nav:[{link:'./books', name:'Books'},
        {link:'/authors',name:'Authors'},
        {link:'/addbook',name:'Add Book'},
        {link:'/addauthor',name:'Add Author'},],
        title:'Library'
    })
})

module.exports=addauthorsRouter;