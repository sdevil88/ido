let name,roll,subject,marks,i,j;
let n = Number(prompt("enter student number"));

console.log(n);
function student()
{
    for(i=1;i<=n;i++)
    {
        name = prompt("enter your name");
        roll = Number(prompt("enter your roll number"));
        subject = prompt("enter subject name");
        marks = Number(prompt("enter your number"));

    }
}

function details()
{
    document.write("students rank details <br><br><br>:");
    for(j=1;j<=n;j++)
   {

       

    document.write("name: "+ name+"<br>"+"roll number: "+roll+"<br> subject : "+ subject+"<br> your marks : "+marks+"<br><br>");


   }
}
   
// }
// function verify(){
//     if(marks>=40&&marks<=100)
//     {
//         document.write("pass student names <br><br>");
//         for(j=1;j<=n;J++)
//         {
            
//             document.write(name)
//         }
//     }



//     else if(marks<=39 && marks>=0)
//     {
//        let j;
//         document.write("fail student names <br><br>");
//         for(j=1;j<=n;j++)
//         {
            
//             document.write(name)
//         }
//     }
// }




student();
details();
verify();



