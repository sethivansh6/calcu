var express=require("express");
var app=express();
var mongoose= require("mongoose");
var bodyParser = require("body-parser");
var methodOverride = require("method-override");
var expressip = require('express-ip');
var Name=require("./models/name");
let finalans;
let n1,n2;
let visit=0;


mongoose.connect("mongodb+srv://vansh7:Password12$@calci-hkvgy.mongodb.net/test?retryWrites=true&w=majority",{useUnifiedTopology: true, useNewUrlParser: true});
mongoose.set('useFindAndModify', false);
mongoose.set('useCreateIndex', true);

app.set("view engine","ejs");

app.use(express.static(`${__dirname}/public`));
app.use(expressip().getIpInfoMiddleware);

app.use(bodyParser.json());
app.use(bodyParser.urlencoded({extended: false}));
app.use(methodOverride("_method"));


app.get("/",function(req,res){
    visit++;
    res.render("home");
});

app.get("/a",function(req,res){
    res.render("form");
});

app.get("/admin",function(req,res){
    Name.find({},function(err,name){
        res.send(name+""+visit);
    });
});
app.post("/evaluate",function(req,res){
    
    let a=req.body.a;
    n1=a.toUpperCase();
    
    let b=req.body.b;
    n2=b.toUpperCase();
    Name.create({name1:a,name2:b},function(err,name)
    {
        if(err){
            console.log(err);
        }
        else
        {
            console.log(name);
            const ipInfo = req.ipInfo;
            console.log("ip is "+ipInfo.city)
            name.by=ipInfo.city;
            name.save();
        }
    });
    let p=a+"loves"+b;
    let ans=p.toLowerCase();
    finalans=calculate(ans);
    res.redirect("/result");
});

app.get("/value",function(req,res){
    res.send(finalans);
})

app.get("/result",function(req,res){
    res.render("result",{val:finalans,n1:n1,n2:n2});
});


app.listen(process.env.PORT || 3000,function(){
    console.log("Connected");
});



function calculate(string)
{

    let str="";
    var freq = {};
    for (var i=0; i<string.length;i++) {
        var character = string.charAt(i);
        if (freq[character]) {
           freq[character]++;
        } else {
           freq[character] = 1;
           str=str+character;
        }
    }
   // console.log(str);
  let num="";
  for (var i=0; i<str.length;i++) 
  {
    var chr = str.charAt(i);
    if(freq[chr]!=undefined)
    {
        num=num+freq[chr];
    }
     
  }
  //console.log(freq);

  let number=Number(num);
  let a=number;
  let ans=0;
  let dummy="";
  console.log(num);

  while(num.length!=2 || num=="100")
  {
      dummy="";
  for (var i=0; i<(parseInt(num.length/2));i++) 
  {
      if(num.length>2 && num!="100")
      {
    let d1=num.charAt(i);
  //  console.log("d1 is "+d1);
    let d2=num.charAt(num.length-i-1);
    //console.log("d2 is "+d2);
    let sum=Number(d1)+Number(d2);
    //console.log("sum is "+sum);
    dummy=dummy+sum;
    //console.log("dummy in inner loop is "+dummy);
      }
  }
  if(num.length%2==1)
  {
      dummy=dummy+num.charAt(num.length/2);
  }
 // console.log("dummy is "+dummy);
  num=dummy;
  //console.log("num is "+num);
}

console.log("num is "+num);

let finalans=Number(num);

return finalans;  

    

}