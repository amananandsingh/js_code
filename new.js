console.log("<<<HELLO THERE>>>")
let students=[
    {name: 'ram' , age: 23 },
    {name: 'gram' , age: 21 },
    {name: 'vram' , age: 22 }             
]
function addStudent(callback){    //callback
    setTimeout(function(){
        students.push({
            name: 'tremendous',
            age : 14

        })
callback()  },5000);     //callback
}
function display(){
    setTimeout(function(){
        students.forEach(student => {
            console.log(student.name,'<name & age>',student.age);
        

        })
    },3000);
}
addStudent(display);//callback
// display();
console.log("<<THANKS VERY MUCH>>");