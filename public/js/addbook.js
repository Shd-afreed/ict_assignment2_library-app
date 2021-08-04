var title = document.getElementById("title");
var author = document.getElementById("author123");
var genre = document.getElementById("genre");
var error = document.getElementById("error");
var error1 = document.getElementById("error1")


function validation(){ 
    
    if(titlevalidation(title)){

    }
    else{
        return false;
    }
    

    
    if(authorvalidation(author)){

    }
    else{
        return false;
    }

   

    
    if(genrevalidation(genre)){


    }
    else{
        return false;
    }
}



 function titlevalidation(title){
    if(title.value.trim()=="" ){
       
        title.style.border="red solid ";
        return false;

    }
    else {
        
        return true;
    }
}

function authorvalidation(author){
    if(author.value.trim()=="" ){
       
        author.style.border="red solid ";
        return false;

    }
    else {
         
        return true;
    }
}

function genrevalidation(genre){
    if(genre.value.trim()=="" ){
       
        genre.style.border="red solid ";
        return false;

    }
    else {
        
        return true;
    }
}