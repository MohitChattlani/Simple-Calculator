	var digit='';
	var values='';
	var digits=[];
	var operator='';
	var answer;
	var ans=document.getElementById('ans');
	var query=document.getElementById('query');
	
	function button(event)
	{
		var button=event.srcElement;
		value=button.innerText;

		// Standardise × (&times;), ÷ (&divide;) and x
		if (value == '×' || value.toLowerCase() == 'x')
		{
			value = '*';
		} 
		else if (value == '÷')
		{
			value = '/';
		}
		
		switch(value)
		{
			// Empty the bar if C is pressed
			case 'C': emptybar(); break;

			// Currently (, ) and ⌫ (&#9003;) are disabled
			case '(':
			case ')':
			case '⌫': break;

			// All other values enter the doMath function
			default: doMath(value); break;
		}
	}
	
	function doMath(value)
	{
		if (value!='+' && value!='-' && value!='=' && value!='*' && value!='/' && value!='C')
		{
			//making the number such as 542 etc 
			if (digit!=answer)
			{
				digit=digit+value;
			}
			else
			{
				value='';
			}
		}
		if (value=='+' || value=='-' || value=='*' || value=='/')
		{
			//pushing in array digits
			if (values=='' && (value=='+' || value=='-'))
			{
				digit=digit+value;
			}
			else if (values=='' && (value=='/' || value=='*')) 
			{
				value='';
			}
			else
			{
				if (operator=='')
				{
					digits.push(digit);
					operator=value;
					digit='';
				}
				//if operator is already there
				else
				{
					value='';
				}
			}
		}
		if (value!='=' && value!='C')
		{
			if (value == '*') {
				value = '×';
			} else if (value == '/') {
				value = '÷';
			}
			values=values+value;
			query.innerHTML=values+' ';
		}
		if (value=='=')
		{
			if (digit!='')
			{
				digits.push(digit);
			}
			
			var answe=digits[0]+operator+digits[1];
			var t=String(answe);
			var ru=eval(t);   //eval function evaluates the string expression given as argument to it
			answer=parseFloat(ru.toFixed(2)); //for approx to 2decimal places					  
			ans.innerHTML='='+answer;
			//converting digit into answer and empty the operator so that they can be reassigned
			digit=answer;
			console.log(answer);
			
			operator='';
			digits=[];
		}
	}
	
	
	function emptybar()
	{
		digit='';
		values='';
		digits=[];
		operator='';
		query.innerHTML='';
		ans.innerHTML='';
	}


$(document).keypress(function(e) {
		key = e.which;
		if (key >= 48 && key <= 57){ 
			value=key-48;
		}
		if(key>=42 && key<=47){
			value=String.fromCharCode(key);
			// Change x to *
			if (value.toLowerCase() == 'x')
			{
				value = '*';
			} 
		}
		if(key==13){
		//enter
		value='=';
		}

		doMath(value);
	});

$(document).keyup(function(e){
		if(e.which==27){
		//escape key
			emptybar();
		}
})
