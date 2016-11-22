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
		var value=button.innerHTML;
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
				if (operator=='+')
				{
					answer=add(parseFloat(digits[0]),parseFloat(digits[1]));
					ans.innerHTML='='+answer;
					digit=answer;
					console.log(answer);
				}
				else if (operator=='-')
				{
					answer=subtract(parseFloat(digits[0]),parseFloat(digits[1]));
					ans.innerHTML='='+answer;
					digit=answer;
					console.log(answer);
				}
				else if (operator=='x')
				{
					answer=product(parseFloat(digits[0]),parseFloat(digits[1]));
					ans.innerHTML='='+answer;
					digit=answer;
					console.log(answer);
				}
				else if (operator=='/')
				{
					answer=divide(parseFloat(digits[0]),parseFloat(digits[1]));
					ans.innerHTML='='+answer;
					digit=answer;
					console.log(answer);
				}
				//converting digit into answer and empty the operator so that they can be reassigned
				operator='';
				digits=[];
			}
		}
	}
	function add(a,b)
	{
		return a+b;
	}
	function subtract(a,b)
	{
		return a-b;
	}
	function product(a,b)
	{
		return a*b;
	}
	function divide(a,b)
	{
		return a/b;
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