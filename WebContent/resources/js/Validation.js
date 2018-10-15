

 
		var Stringregex = "^[a-zA-Z]+$";
		var Emailregex  = "^(((?!-))(xn--|_{1,1})?[a-z0-9-]{0,61}[a-z0-9]{1,1}\.)*(xn--)?([a-z0-9\-]{1,61}|[a-z0-9-]{1,30}\.[a-z]{2,})$";
		var Numberregex = "^[0-9]*$";
		var Dateregex = "([12]\\d{3}-(0[1-9]|1[0-2])-(0[1-9]|[12]\\d|3[01]))";
		var Timeregex = "^((?:[01]\\d|2[0-3]):[0-5]\\d:[0-5]\\d$)";
		var allvalid  = false;
		
		//regex is regular  expressions that create the pattern criteria for the input to match
		
	function checkallfields(){
		
			
			//retrieve values of inputted fields 
		
			var firstname = 	document.getElementById('form:firstName').value;
			var lastname  = 	document.getElementById('form:lastName').value;
			var number 	  = 	document.getElementById('form:mobilephonenumber').value;
			var email	  = 	document.getElementById('form:email').value;
			var city 	  = 	document.getElementById('form:city').value;
			

			
			if(!firstname){ //check if field is empty
				
				document.getElementById("form:firstnamemessage").innerHTML = "Please include  Firstname";
				return false; //returns false to stop submission of form 
			}
			
				else {
					if(ValidateString(firstname)){ //checks if inputted value is valid 
						document.getElementById("form:firstnamemessage").innerHTML = "Valid Firstname";
						if(!lastname){
			
							document.getElementById("form:lastnamemessage").innerHTML = "Please include Lastname"; 
							return false;
						}
						else{
							
							if(ValidateString(lastname)){
								document.getElementById("form:lastnamemessage").innerHTML = "Valid Lastname"; 
								if(!number){
									
									document.getElementById("form:phonenumbermessage").innerHTML = "Please include number"; 
									return false; 
								}
								else{
									if(ValidateNumber(number)){
										document.getElementById("form:phonenumbermessage").innerHTML = "Valid phonenumber"; 
										if(!email){
											document.getElementById("form:emailmessage").innerHTML = "Please include email in correct format"; 
											return false; 
										}
										else{
											if(ValidateEmail(email)){
												document.getElementById("form:emailmessage").innerHTML = "Valid Email"; 
												if(!city){
													
													document.getElementById("form:citymessage").innerHTML = "Please include city "; 
													return false; 
												}
												else{
													document.getElementById("form:citymessage").innerHTML = "Valid City";
													
												}
												
											}
											else{
												
												document.getElementById("form:emailmessage").innerHTML = "Invalid Email : Must be in correct format e.g. Name@domain.com ";
												return false; 
											}
										}
										
									}
									else{
										document.getElementById("form:phonenumbermessage").innerHTML = "Invalid Phone number : Number must not include letters ";
										return false; 
									}
									
								}
							}
							else{
								
								document.getElementById("form:lastnamemessage").innerHTML = "Invalid Lastname : Name must not include numbers ";
								return false; 
							}
					 
						}
					}
					else{
						document.getElementById("form:firstnamemessage").innerHTML = "Invalid Firstname : Name must not include numbers "; 
						return false; 
				}
				
			}

		
	}


  function  ValidateString( text) {  //makes sure every character is not a number e.g. Firstname 
	
	if(text.match(Stringregex)) {
		
		return true; 
	}
	
	return false;
}

  function  ValidateEmail(Email) { //validates that any email is in correct format 
	
	if(Email.match(Emailregex)) {
		
		return true; 
	}
	
	return false;
}


  function  ValidateNumber(Number) { //makes sure every character is a number e.g. patientid 
	
	if(Number.match(Numberregex)) {
		
		return true; 
	}
	
	return false;
}


  function  ValidateDate(Date) { //validates input is in correct date format 
	
	if(Date.match(Dateregex)) {
		
		return true; 
	}
	
	return false;
}



  function  ValidateTime( Time) { //validates input is in correct time format 
	
	if(Time.match(Timeregex)) {
		
		return true; 
	}
	
	return false;
}







