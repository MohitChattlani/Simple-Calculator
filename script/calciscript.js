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
		if (value!='=' && value!='C')
		{
			values=values+value;
			query.innerHTML=values;
		}
		if (value!='+' && value!='-' && value!='=' && value!='x' && value!='÷' && value!='C')
		{
			//making the number such as 54,2 etc 
			digit=digit+value;
		}
		else if (value=='+' || value=='-' || value=='x' || value=='÷')
		{
			//pushing in array digits
			digits.push(digit);
			operator=value;
			digit='';
		}
		else if (value=='=')
		{
			digits.push(digit);
			if (operator=='+')
			{
				answer=add(parseInt(digits[0]),parseInt(digits[1]));
				console.log(answer);
			}
			else if (operator=='-')
			{
				answer=subtract(parseInt(digits[0]),parseInt(digits[1]));
				console.log(answer);
			}
			else if (operator=='x')
			{
				answer=product(parseInt(digits[0]),parseInt(digits[1]));
				console.log(answer);
			}
			else if (operator=='÷')
			{
				answer=divide(parseInt(digits[0]),parseInt(digits[1]));
				console.log(answer);
			}
			//converting digit into answer and empty the operator so that they can be reassigned
			ans.innerHTML='='+answer;
			digit=answer;
			operator='';
			digits=[];
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
		ans.innerHTML="Answer:";
	}