// side bar 
var sidenav=document.getElementById("sidenav")
var menuicon=document.getElementById("menuicon")
var closenav=document.getElementById("closenav")


menuicon.addEventListener("click",function(){
    sidenav.style.right=0
})

closenav.addEventListener("click",function(){
    sidenav.style.right="-50%"
})


// search bar 

var search=document.getElementById("search")
var container=document.getElementById("container")
var productlist=container.querySelectorAll("div")

search.addEventListener("keyup",function(){
    var enteredvalue=event.target.value.toUpperCase()

   
    for(count=0;count<productlist.length;count=count+1)
    {

        var productname=productlist[count].querySelector("h1").textContent


        if(productname.toUpperCase().indexOf(enteredvalue)<0)
        {
            productlist[count].style.display="none"
        }
        else
        {
             productlist[count].style.display="block"
        }
    }
})