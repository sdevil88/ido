let nme = [];
let subject = [];
let mark = [];
let count;
let i, j;

function getdetails() {
    let count = prompt("enter student number");
    for(i=0;i<count;i++)
    {
        let names = prompt("enter name");
        let subjects = prompt("enter subject");
        let marks = prompt("enter marks");
        nme.push(names);
        subject.push(subjects);
        mark.push(marks);
    }
    return {name: nme, subject: subject, mark:mark};
}


//show 


function show(details)
{
    document.write("student details");
    for(j=0;j<count;j++)
    {
        document.write("<br> name : "+details.nme[j]+"<br> subject : "+details.subject[j]+"<br> marks : "+details.mark[j]);
    }
}


let me = getdetails();
show(me);


