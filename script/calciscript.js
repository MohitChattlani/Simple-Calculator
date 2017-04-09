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
		var value=button.value;
		if (value=='C')
		{
			emptybar();
		}
		if (value!='+' && value!='-' && value!='=' && value!='x' && value!='/' && value!='C')
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
		if (value=='+' || value=='-' || value=='x' || value=='/')
		{
			//pushing in array digits
			if (values=='' && (value=='+' || value=='-'))
			{
				digit=digit+value;
			}
			else if (values=='' && (value=='x' || value=='/' )) 
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
				if (operator=='x')
				{
					operator='*';
				}
					var answe=digits[0]+operator+digits[1];
					var t=String(answe);
					var ru=eval(t);
					//for approx to 2decimal places
					answer=parseFloat(ru.toFixed(2));
					  
 					ans.innerHTML='='+answer;
					digit=answer;

					console.log(answer);
				
				operator='';
				digits=[];
			}
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
