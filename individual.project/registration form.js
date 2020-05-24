function validate()
{
    var firstname=document.getElementById("first name").value;
    var lastname=document.getElementById("last name").value;
    var email=document.getElementById("email").value;
    var universityname=document.getElementById("uni name").value;
    var dob=document.getElementById("dob").value;
    var address=document.getElementById("address").value;
    var number=document.getElementById("number").value;
    
    error_message.style.padding= "20px";
    if(firstname.trim().length < 3)
    {
        
        error_message.innerHTML="Please Enter the correct first name";
        document.getElementById("first name").style.border="1.2px solid red";
        return false;
    }
    if(lastname.trim().length < 4  )
    {
        error_message.innerHTML="Please Enter the correct last name";
        document.getElementById("last name").style.border="1.2px solid red";
        return false;
    }
    if(email.trim().length < 6)
    {
        
        error_message.innerHTML="Please Enter the correct email";
        document.getElementById("email").style.border="1.2px solid red";
        return false;
    }
    if(universityname.trim().length < 6)
    {
      
        error_message.innerHTML="Please Enter the correct university name";
        document.getElementById("uni name").style.border="1.2px solid red";
        return false;   
    }
   
    if(isNaN(dob))
    {
        error_message.innerHTML="please Enter the correct DOB";
        document.getElementById("dob").style.border="1.2px solid red";
        return false;
    }
    if(address.trim().length < 10)
    {
        
        error_message.innerHTML="Please Enter the correct address";
        document.getElementById("address").style.border="1.2px solid red";
        return false;
    }
    if(isNaN(number)|| number.trim().length != 10)
    {
        
        error_message.innerHTML="Please Enter the correct phone number";
        document.getElementById("number").style.border="1.2px solid red";
        return false;
    }
    return true;
}