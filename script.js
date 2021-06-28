document.getElementById("date").onmouseover=displayDate;

function displayDate(){
    document.getElementById("date").innerHTML=new Date("2021-06-24");
}
document.getElementById("date").onmouseout=days;

function days(){
    document.getElementById("date").innerHTML="in 80 days";
}
function inputemail(x){
    x.style.background="#8bb2b8";
}
var arrayReview=[];
arrayReview[0]="I personally believe that travelling with your friends is the best way to travel! Whether this means backpacking round the world for a year, or just taking a weekend trip to a different city, I highly recommend the experience.";
arrayReview[1]="I personally believe that travelling with your friends is the best way to travel! Whether this means backpacking round the world for a year, or just taking a weekend trip to a different city, I highly recommend the experience";
arrayReview[2]="ki";

var arrayReviewHead=[];
arrayReviewHead[0]="Hardik Jain";
arrayReviewHead[1]="John Doe";
arrayReviewHead[2]="Karl Johnson";

document.querySelector(".box h2").innerHTML=arrayReviewHead[0];
document.getElementById("body").innerHTML=arrayReview[0];
var index=0;
moveLeft=()=>{

        if(index!=0)
        {
            document.querySelector(".box h2").innerHTML=arrayReviewHead[index-1];
            document.getElementById("body").innerHTML=arrayReview[index-1];
            index=1;
            index--;
        }
        else if(index==0)
        {
            document.querySelector(".box h2").innerHTML=arrayReviewHead[2];
            document.getElementById("body").innerHTML=arrayReview[2];
            index=2;

        
    }
}
moveRight=()=>{
    
        if(index!=2)
        {
            document.querySelector(".box h2").innerHTML=arrayReviewHead[index+1];
            document.getElementById("body").innerHTML=arrayReview[index+1];
            index=1;
            index++;
        }
        else if(index==2)
        {
            document.querySelector(".box h2").innerHTML=arrayReviewHead[0];
            document.getElementById("body").innerHTML=arrayReview[0];
            index=0;

        
    }
}
function explore()
{
    alert("LETS EXPLORE OUR DIFFERENT AIR TRAVELS ");
}
function setCookie(cname,cvalue,exdays) {
    const d = new Date();
    d.setTime(d.getTime() + (exdays*24*60*60*1000));
    let expires = "expires=" + d.toGMTString();
    document.cookie = cname + "=" + cvalue + ";" + expires + ";path=/";
  }
  
  function getCookie(cname) {
    let name = cname + "=";
    let decodedCookie = decodeURIComponent(document.cookie);
    let ca = decodedCookie.split(';');
    for(let i = 0; i < ca.length; i++) {
      let c = ca[i];
      while (c.charAt(0) == ' ') {
        c = c.substring(1);
      }
      if (c.indexOf(name) == 0) {
        return c.substring(name.length, c.length);
      }
    }
    return "";
  }
  
  function checkCookie() {
    let user = getCookie("username");
    if (user != "") {
      alert("Welcome again " + user);
    } else {
       user = prompt("Please enter your name:","");
       if (user != "" && user != null) {
         setCookie("username", user, 30);
       }
    }
  }