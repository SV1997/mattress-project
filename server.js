const express=require("express");
const bodyParser=require("body-parser");
const https=require("https")
const app=express();
const mongoose=require("mongoose")
app.use(express.static("media"));
app.use(bodyParser.urlencoded({extended:true}));
app.set('view engine','ejs')
mongoose.connect("mongodb+srv://sv97:saharsh97@svcluster0.aukvo.mongodb.net/sleepwelldb",{useNewUrlParser:true});
const itemSchema=new mongoose.Schema({
    name:String,
    number:String,
    email:String,
    pin:String,
});
const info=mongoose.model("Item",itemSchema)
app.get("/",function(req,res){
    res.sendFile(__dirname+"/index.html");
    })

app.post("/",function(req,res){
    var name=req.body.name;
    var number=req.body.number;
    var email=req.body.email;
    var pin=req.body.pin;
    // console.log(req);
    const info1=new info({
        name:name,
        number:number,
        email:email,
        pin:pin
    })
    // info1.save();
// console.log(info.find({name:"saharsh"}));
 res.render("later",{name:req.body.name})
})
let port=process.env.PORT;
if(port==null||port==""){
    port=3000;
}
app.listen(port,function(){
    console.log("server has started")
})