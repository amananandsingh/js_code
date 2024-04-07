//to create server at localhost:4000
//http,fs -by default built in 
//url user defined
const http=require('http');
const fs=require('fs');
const url=require('url')
let myServer=http.createServer((req,res)=>{
//     var d=new Date();
//     let data='\n' +d;
//     fs.appendFile('./log5.txt',data,(error)=>{  //appends the file and also create a file
// if(error){
//     console.log(error)
// }else{
//     console.log('file appended');
// }
//     })
  //  console.log(req,'request run')
 //   console.log("req added");
 //----------------------------------
 console.log(req.url,'url');
const myurl=url.parse(req.url,true);
console.log(myurl,'myurl...')
//console.log(myurl.query.name,'name..')
//console.log(myurl.query.password,'password...')
//res.end("<H1>this is testing</h1>")
if(myurl.pathname==='/home'){
    res.end("<h1>this is home pg11</h1>");
}


//------------------------------
//  console.log(req.url,'req');
//  if(req.url==='/'){
// res.end("<h1>THIS IS THE MAIN PG</h1>")
//  }if(req.url==='/contact'){
// res.end("<h1>THiS IS THE CONTACT PG</h1>")
//  }if(req.url==='/home'){
//     res.end("<H1>THIS IS HOME PG</h1>")
// }})
//--------------------------
//res.end("<h1>welcome to server</h1>")
})
myServer.listen(4000,(error)=>{
    if(error){
        console.log(error)
    }else{
        console.log("server is listening on port 4000")
    }
})

