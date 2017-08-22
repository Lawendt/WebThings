init = false;

strExpression = "";

function Init(){
    init = true;
    displayText = document.getElementById("displayText");
}


function clickButton(argThis, argID){
    if(!init)
        Init();
    if(argID == "=") {
        if(displayText.innerHTML != "")
            displayText.innerHTML = eval(displayText.innerHTML);       
    }
    else if(argID == "x"){
        if(displayText.innerHTML != ""){
            displayText.innerHTML += "*";
        }
    }
    else if(argID == ","){
        if(displayText.innerHTML != ""){
            displayText.innerHTML += ".";
        }
    }
    else if(argID == "+/-"){
        //TODO
        var str = "";
        for(i = displayText.innerHTML.length -1; i >= 0; i--){
           
            if(displayText.innerHTML[i] == "-") {
                displayText.innerHTML = displayText.innerHTML.substr(0,i) + "+" + displayText.innerHTML.substr(i+1, displayText.innerHTML.innerHTML);
                break;
            }
            else if(displayText.innerHTML[i] == "+") {
                 displayText.innerHTML = displayText.innerHTML.substr(0,i) + "-" + displayText.innerHTML.substr(i+1, displayText.innerHTML.innerHTML);
                break;
            }
            else if(i == 0){
                displayText.innerHTML = "-" + displayText.innerHTML;
            }
            
            else if(displayText.innerHTML[i] == "*" || displayText.innerHTML[i] == "/"){
                if(i == displayText.innerHTML.length -1){
                    displayText.innerHTML = displayText.innerHTML + "-";
                }
                else{
                    displayText.innerHTML = displayText.innerHTML.substr(0,i+1) + "-" + displayText.innerHTML.substr(i+1, displayText.innerHTML.innerHTML);
                }
                break;
            }
            
        }
    }
    else if(argID == "ac"){
        displayText.innerHTML = "0";
    }
    else if(argID == "%"){
        //TODO
    }
    else {
        if(displayText.innerHTML == "0")
            displayText.innerHTML = "";
         displayText.innerHTML += argID;
    }
}