const display =  document.querySelector("#display");
const keypad =document.querySelector(".keypad");

keypad.addEventListener("click" , (e)=>{
    const ele = e.target;
    let value = display.value;
    if(ele.classList.contains("key")){
        if(value == "NaN" || value == "Error"){
            display.value = "";
            value = "";
        }
        if(ele.classList.contains("delete")){
            if(value.length > 0){
                display.value = value.slice(0 , value.length-1);
            }
        }
        else if(ele.classList.contains("reset")){
            display.value = "";
        }
        else if(ele.classList.contains("equal") && value != ""){
            try{
                display.value = eval(value.replace("x","*"));
            }catch{
                display.value = "Error";
            }
        }else if(ele.innerHTML != "="){
            display.value += ele.innerHTML;
        }
   }
});