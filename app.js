const express = require('express');
const app =new express();

const port=process.env.PORT ||1236;
const booksRouter=require('./src/routes/bookRoutes');
const loginRouter=require('./src/routes/loginRoutes');
const signupRouter=require('./src/routes/signupRoutes');
const addbookRouter = require('./src/routes/addbookRoutes');
const addauthorsRouter=require('./src/routes/addauthorRoutes');
const authorsRouter=require('./src/routes/authorRoutes');

app.set('view engine','ejs');
app.set('views',__dirname+'/src/views')
app.use(express.static("./public"));
app.use('/books',booksRouter);
app.use('/login',loginRouter);
app.use('/signup',signupRouter);
app.use('/addbook',addbookRouter);
app.use('/addauthor',addauthorsRouter);
app.use('/authors',authorsRouter);



app.get('/',function(req,res){

    res.render("index",
    {
        nav:[{link:'/books', name:'Books'},{link:'/authors',name:'Authors'},{link:'/addbook',name:'Add Book'},{link:'/addauthor',name:'Add Author'}],
        title:'Library'
    });
});







app.listen(port,()=>{console.log("server ready at "+port)});