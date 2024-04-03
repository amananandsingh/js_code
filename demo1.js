const fs=require('fs/promises')
let data='aman anand';
function f12(){
fs.writeFile('logx1.txt',"utf-8")
.then((data)=>{
    console.log('file just created')
}).catch((error)=>{
    console.log(error)
})
}
f12();