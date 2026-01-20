const visor_doc = document.querySelector(".visor");

let refresh = false;
let was_equal = false;
let equal_change = null;


let visor_obj = {
    "current_value": "0",
    "change": true,
    "update": function(value){
        if (this.current_value == "Error"){ return;
        }
        
        if (!this.change){
            this.current_value += value;
        } else {
            this.current_value = value;
            this.change = false;
        }
        visor_doc.innerText = this.current_value;
    }
};

let buffer = {
    "value1": null,
    "value2": null,
    "operator": null,
    "operate": function(value2){
        this.value2 = value2;
        let result = null;
        if (this.operator == "+"){
            result = parseFloat(this.value1) + parseFloat(this.value2);
        }
        else if (this.operator == "-"){
            result = parseFloat(this.value1) - parseFloat(this.value2);
        }
        else if (this.operator == "x"){
            result = parseFloat(this.value1) * parseFloat(this.value2);
        }
        else if (this.operator == "/"){
            result = parseFloat(this.value1) / parseFloat(this.value2);
            if (this.value2 == "0"){
                result = "Error";
            }
        }

        visor_obj.change = true;
        visor_obj.update(result.toString());
        refresh = true;
    },
    "set_value1": function(value1, operator){
        if (this.operator != null && !refresh){
            this.operate(value1);
            refresh = false;
            visor_obj.change = true;
            this.operator = operator;
            this.value1 = visor_obj.current_value;
        } else if (value1 == null){
            this.value1 = 0;
            this.operator = operator;
        }
        else{
            this.value1 = value1;
            this.operator = operator;
            refresh = false;
        }
    }
}

const buttons = document.querySelectorAll(".button");
const operators = document.querySelectorAll(".operator");

function setupClick(){
    buttons.forEach((button) => {
        button.addEventListener("click", () => {
            const value = button.innerText;
            if (!refresh){
                visor_obj.update(value);
            }
            else {
                clear.click();
                visor_obj.update(value);
                refresh = false; 
            }
        })
    })
}

function setupOperator(){
    operators.forEach((button) => {
        button.addEventListener("click", () => {
            const value = button.innerText;
            visor_obj.change = true;
            if (was_equal){
                buffer.operator = null;
            }
            buffer.set_value1(visor_obj.current_value, value);
            was_equal = false;
        })
    })
}


setupClick();

setupOperator();


const equal = document.querySelector(".equals");

equal.addEventListener("click", () => {
    if (!was_equal){
    equal_change = visor_obj.current_value;
    buffer.operate(visor_obj.current_value);
    was_equal = true;
    } else {
        buffer.value1 = visor_obj.current_value;
        buffer.set_value1(equal_change, buffer.operator);
    }
})

const clear = document.querySelector(".clear");

clear.addEventListener("click", () => {
    visor_obj.current_value = "0";
    visor_obj.change = true;
    visor_obj.update("0");
    visor_obj.change = true;
    buffer.value1 = null;
    buffer.value2 = null;
    buffer.operator = null;
});