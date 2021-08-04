const express = require('express');

const authorsRouter=express.Router();

var authors=[
    {
        name:'Joseph Barbera',
        occupation:'American Animator',
        years:'1932–2006',
        img:'joseph.jpg',
        des:'Joseph Roland Barbera was an American animator, director, producer, storyboard artist, and cartoon artist, whose film and television cartoon characters entertained millions of fans worldwide for much of the 20th century'
    },
    {
        name:'J.K Rowling',
        occupation:'British Author',
        years:'1997–present',
        img:'jk.jpg',
        des:'Joanne Rowling CH, OBE, HonFRSE, FRCPE, FRSL, better known by her pen name J. K. Rowling, is a British author, philanthropist, film producer, television producer, and screenwriter.'
    },
    {
        name:'Vaikom Muhammad Basheer',
        occupation:'Indian writer',
        years:'1908–1994',
        img:'vaikom.jpg',
        des:'Vaikom Muhammad Basheer വൈക്കം മുഹമ്മദ് ബഷീർ, born in 1908, also known as Beypore Sulthan, ബെയ്പൂർ സുൽത്താൻ was an Indian independence activist and writer of Malayalam literature.'
    }
]

authorsRouter.get("/",function(req,res){
    res.render("authors",
    {
        
        nav:[{link:'/books', name:'Books'},{link:'/authors',name:'Authors'},{link:'/addbook',name:'Add Book'},{link:'/addauthor',name:'Add Author'}],
        title:'Library',
            authors
        
    });
})

authorsRouter.get("/:i",function(req,res){
   const i= req.params.i
   res.render("author",
   {
    nav:[{link:'/books', name:'Books'},{link:'/authors',name:'Authors'}],
    title:'Library',
    author:authors[i]
   });
})

module.exports=authorsRouter;