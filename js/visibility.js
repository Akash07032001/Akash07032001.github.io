document.addEventListener("visibilitychange", function(){
    if(document.visibilityState == "visible")
    {
        document.title = "AKASH | SOFTWARE DEVELOPER";
        
    }
    else{
        document.title = "Comback to portfolio";
    }
})