<?php
 $firstname = $_POST["fname"];
 $lastname =$_POST["lname"];
 $email =$_POST["email"];
 $universityname = $_POST["uname"];
 $gender = $_POST["gender"];
 $dob =$_POST["dob"];
 $address =$_POST["address"];
 $phonenumber =$_POST["number"];
 $city =$_POST["city"];
 $state =$_POST["state"];
 $country =$_POST["Country"];

 echo("<h2><b> Registered Data</b></h2>");
 echo("<b> your First Name :</b>.$firstname");
 echo("<b> your Last Name :</b>.$lastname");
 echo("<b> your Email :</b>.$email");
 echo("<b> your University Name :</b>.$universityname");
 echo("<b> your Gender :</b>.$gender");
 echo("<b> your DOB :</b>.$dob");
 echo("<b> your Address :</b>.$address");
 echo("<b> Your Phone Number :</b>.$phonenumber");
 echo("<b> your City :</b>.$city");
 echo("<b> your state :</b>.$state");
 echo("<b> your Country :</b>.$country");



?>