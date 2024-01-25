const userInput=document.querySelector('.user-input');
const keys= document.querySelectorAll('.key');
const deleteKey= document.querySelector('.delete-key');
const resetKey= document.querySelector('.reset-key');
const answerKey= document.querySelector('.answer-key');

let lastKeyOprator= false;
let decimalAdded= false;

deleteKey.addEventListener('click',()=>{
    let initialValue=userInput.value;
    let updatedValue=
    initialValue.substring(0,initialValue.length-1);
    userInput.value=updatedValue;
});

answerKey.addEventListener('click',()=>
{
    let expression= userInput.value;
    let result=eval(expression);
    userInput.value=result;
});

resetKey.addEventListener('click',()=>{
    console.log("reset key clicked");
    userInput.value="";
});

const keysArray= Array.from(keys); //returns an array of keys...
keysArray.forEach((key)=>{
    key.addEventListener('click',(event)=>{
        const Value=event.target.innerText;

        if(Value==="."&& decimalAdded)
        {
            return;
        }

        if('+-*/'.includes(Value))
        {  
            if(lastKeyOprator)
            {
                let initialValue=userInput.value;
                let updatedValue=
                initialValue.substring(0,initialValue.length-1) + Value;
                userInput.value=updatedValue;
                return;
            }
            lastKeyOprator=true;
            decimalAdded=false;
        } else{
            lastKeyOprator=false;
            if(Value===".")
            {
                decimalAdded=true;
            }
        }
        userInput.value+=Value;
    })
})
