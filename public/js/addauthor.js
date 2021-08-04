var name12 = document.getElementById("name");
var job = document.getElementById("job");
var year = document.getElementById("year");

function validation(){ 
    
    if(namevalidation(name12)){

    }
    else{
        return false;
    }
    

    
    if(jobvalidation(job)){

    }
    else{
        return false;
    }

   

    
    if(yearvalidation(year)){


    }
    else{
        return false;
    }
}



 function namevalidation(name12){
    if(name12.value.trim()=="" ){
       
        name12.style.border="red solid ";
        return false;

    }
    else {
        
        return true;
    }
}

function jobvalidation(job){
    if(job.value.trim()=="" ){
       
        job.style.border="red solid ";
        return false;

    }
    else {
         
        return true;
    }
}

function yearvalidation(year){
    if(year.value.trim()=="" ){
       
        year.style.border="red solid ";
        return false;

    }
    else {
        
        return true;
    }
}