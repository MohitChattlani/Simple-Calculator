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
		value=button.value;
		if (value=='C')
		{
			emptybar();
		}
		doMath(value);
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
		digit='';
		values='';
		digits=[];
		operator='';
		query.innerHTML='';
		ans.innerHTML='';
	}


$(document).keypress(function(e) {
		key = e.which;
		if ((key >= 48 && key <= 57) || (key >= 96 && key <= 105)){ 
			value=key-48;
		}
		if(key>=42 && key<=47){
			value=String.fromCharCode(key);
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