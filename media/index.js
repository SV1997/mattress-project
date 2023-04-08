var bgcimageform=document.getElementById("slider-Background");
bgcimageform.style.opacity=1;
let r=1;
setInterval(function(){
    r++;
    if(r>3){
        r=1;
    }
    bgcimageform.style.opacity=0.1;
    var Interval=setInterval(function(){
        var op=bgcimageform.style.opacity;
        var opac=parseFloat(op);
        bgcimageform.style.opacity=opac+0.1;
        console.log(bgcimageform.style.opacity)
        if(op==1){
            clearInterval(Interval);
        }
    },50)
    bgcimageform.setAttribute("src","sleepwell-ad"+r+".jpg")
},4000)
var submit=document.querySelector("#submit");
submit.addEventListener("submit",function(){
    
})