
let tryNumber=3;
//for generate random pin number
function randomNumberGenerator(){
    const randomNumber=Math.round(Math.random()*(9999-1000)+1000);
    document.getElementById("displayRandomNumber").value=randomNumber;
}

//for display the input pin number
function pinNumber(val)
{
    if(val==-1)
       document.getElementById("displayPin").value='';

    else
       document.getElementById("displayPin").value+=val;
   
}

//this function is use for submitting
function submit()
{   
    const randomNumber=document.getElementById("displayRandomNumber").value;
    const entryValue= document.getElementById("displayPin").value;
    if(randomNumber==entryValue)
    {
        document.getElementById("displayPin").value='';
        document.getElementById("displayRandomNumber").value='';
        confirmationMsg(true);
    }
    else
    {
        document.getElementById("displayPin").value='';
        confirmationMsg(false);
        check();
    }

}


//this maessage is for confirmation message, the pin is wrong or right
function confirmationMsg(val)
{
   if(val){
       document.getElementById('right').style.display='block';
       document.getElementById('wrong').style.display='none';

   }
   else 
   {
    document.getElementById('wrong').style.display='block';
    document.getElementById('right').style.display='none';
   }
} 

//this function is use for check the number of try
function check()
{
    tryNumber--;
    if( tryNumber<1){
        document.getElementById("submit").disabled = true;
        document.getElementById("displayRandomNumber").value='';
        document.getElementById('leftTry').innerText=" Please reloading the page and try again "; 
    }
    else
    {
       document.getElementById('leftTry').innerText=tryNumber+' try left'; 

    }
}

//this function is used for backspace/delet
function backspace()
{
    
    document.getElementById("displayPin").value= document.getElementById("displayPin").value.slice(0,-1);
    
}