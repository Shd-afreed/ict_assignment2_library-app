const express = require('express');
const booksRouter=express.Router();

var books=[
    {
        title:"tom and jeerry",
        author:"joseph barbera",
        genre:'cartoon',
        img:"tj.jpg"
    },
    {
        title:"harry potter",
        author:"j k  rowling",
        genre:'fantasy',
        img:"harry.jpg"
    },
    {
        title:"pathummayude aadu",
        author:"basheer",
        genre:'drama',
        img:"basheer.jpg"
    },
]

booksRouter.get("/",function(req,res){
    res.render("books",
    {
        nav:[{link:'/books', name:'Books'},{link:'/authors',name:'Authors'},{link:'/addbook',name:'Add Book'},{link:'/addauthor',name:'Add Author'}],
        title:'Library',
        books
    });
    
})

booksRouter.get("/:i",function(req,res){
    const i=req.params.i
    res.render("book",
    {
        nav:[{link:'/books', name:'Books'},{link:'/authors',name:'Authors'},{link:'/addbook',name:'Add Book'},{link:'/addauthor',name:'Add Author'}],
        title:'Library',
        book:books[i]
    });
    
})




module.exports=booksRouter;