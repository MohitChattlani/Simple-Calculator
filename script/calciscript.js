	var digit='';
	var values='';
	var digits=[];
	var operator='';
	var answer;
	var ans=document.getElementById('ans');
	var query=document.getElementById('query');
	var decimalValue = false
	var firstNumber = false
	var secondNumber = false
	function button(event)
	{
		var button=event.srcElement;
		value=button.value;
		if (value=='C')
		{
			emptybar();
		}
		else if (value == '.' && !decimalValue)
		{
			decimalValue = true;
			doMath(value);
		}
		else if(value != '.')
		{
			doMath(value);
			decimalValue = false;

		}
	}
	
	function doMath(value)
	{
		if (value!='+' && value!='-' && value!='=' && value!='x' && value!='/' && value!='C' && value!='*')
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
		if (value=='+' || value=='-' || value=='x' || value=='/' || value=='*')
		{
			//pushing in array digits
			if (values=='' && (value=='+' || value=='-'))
			{
				digit=digit+value;
			}
			else if (values=='' && (value=='x' || value=='/' || value=='*')) 
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
			values=values+value;
			query.innerHTML=values+' ';
		}
		if (value=='=')
		{
			if (digit!='')
			{
				digits.push(digit);
			}
				if (operator=='x')
				{
					operator='*';
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
		decimalValue = false;
		firstNumber = false;
		secondNumber = false;
		digit='';
		values='';
		digits=[];
		operator='';
		query.innerHTML='';
		ans.innerHTML='';
	}


$(document).keypress(function(e) {
		key = e.which;
		if(key >= 48 && key <= 57)
		{
			value=key-48;
			doMath(value);
		}
		else if(key==42 || key==47 || key==43 || key == 45){
			value=String.fromCharCode(key);
			decimalValue = false;
			if(firstNumber)
			{
				secondNumber = true
			}
			else
			{
				firstNumber = true
			}
			doMath(value);
		}
		else if(key == 46 && !decimalValue)
		{
			value=String.fromCharCode(key);
			decimalValue = true;
			doMath(value);
		}
		else if(key==61){
			if(firstNumber && !secondNumber)
			{
				doMath(0);
			}
			value='=';
			doMath(value);
		}
		else if(key == 99 || key == 67)
		{
			emptybar()
		}
	});

$(document).keyup(function(e){
		if(e.which==27){
		//escape key
			emptybar();
		}
})