const button = document.querySelectorAll("button");

const result = document.getElementById("result");

for(let i=0; i<button.length; i++){

button[i].addEventListener("click", () =>

{

const buttonValue = button[i].textContent;

if(buttonValue === "C")

{

clearResult();
 }
else if(buttonValue == "DEL")
{
      result.value=result.value.toString().slice(0,-1);
}
else if(buttonValue === "=")
{
calculateResult();

}

else

{

appendValue(buttonValue);

}


});

}

function clearResult()
{
result.value="";
}

function calculateResult()

{

result.value =eval(result.value);

}

function appendValue(buttonValue)
{
  result.value = result.value + buttonValue;
}