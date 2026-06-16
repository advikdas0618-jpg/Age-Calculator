function age(){
    var a= document.getElementById("input1").value;
    var b= document.getElementById("input2").value;
    var dob= new Date(a); 
    var currentDate= new Date(b);

    var age= currentDate.getFullYear()-dob.getFullYear();
    var month= currentDate.getMonth()-dob.getMonth();

    if(month < 0 ||(month === 0 && currentDate.getDate() < dob.getDate())){
        age--;
    }
    document.getElementById("head2").innerHTML="Your age is " + age + " years";
}