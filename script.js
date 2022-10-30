let temp = '';
let calculation = [];
let number2 = [];
let sqr;
let dis = document.querySelector('#result');
let his = document.querySelector('#history');

`Handling Multiple Operations in Given Input`
let calculate = (r) => {
    for(i of r){
        if(r[1] == '+'){
            number2 = parseFloat(r[0]) + parseFloat(r[2]);
            dis.value = number2;
            r.splice(0,3,number2);
            temp = dis.value;
        }
        if(r[1] == '-'){
            number2 = parseFloat(r[0]) - parseFloat(r[2]);
            dis.value = number2;
            r.splice(0,3,number2);
            temp = dis.value;
        }
        if(r[1] == '*'){
            number2 = parseFloat(r[0]) * parseFloat(r[2]);
            dis.value = number2;
            r.splice(0,3,number2);
            temp = dis.value;
        }
        if(r[1] == '/'){
            number2 = parseFloat(r[0]) / parseFloat(r[2]);
            dis.value = number2;
            r.splice(0,3,number2);
            temp = dis.value;
        }
        if(r[1] == '%'){
            number2 = parseFloat(r[0]) % parseFloat(r[2]);
            dis.value = number2;
            r.splice(0,3,number2);
            temp = dis.value;
        }
    }
    }
`clearing Entries Number Using Click`
document.querySelector('#clear').addEventListener('click',function(){
    dis.value = '';
    his.innerText = ''; 
    calculation = [];
})
document.querySelector('#numbers').addEventListener('click', function(a){
    `Displaying Numbers Using Click`   
    if(a.target.innerText >= 0){
        dis.value += a.target.innerText;
        temp = dis.value;
    }
    `Restricting Multiple Dots Using Click`
    if((a.target.innerText == '.') && (!dis.value.includes('.')) && (!dis.value.includes == '*' || '+' || '/' || '=' || '%')){
        dis.value += a.target.innerText;
        temp = dis.value;
    }
    if((a.target.innerText == '.') && ((dis.value[dis.value.length-2] == ' '))){
        dis.value += a.target.innerText;
        temp = dis.value;
    }
    `Restricting Multiple Square Roots Using Click`
    if(a.target.innerText == '√' && dis.value.length === 0){
        dis.value = `${a.target.innerText}`;
        temp = dis.value;
    }
    `Removing Number Using Click`
    if(a.target.innerText == 'Back' && dis.value != ''){
        temp = temp.trim();
        dis.value = temp.slice(0,-1);
        temp = dis.value;
    }
    `Restricting Operator Values before entering any number`
    if((a.target.innerText == '*' || '+' || '/' || '=' || '%') && dis.value.length === 0){
        dis.value = '';
    }
    `Handling Operators`
    if((dis.value.trim()[dis.value.length-1] >= 0) && (a.target.innerText == '*' || a.target.innerText == '+' || a.target.innerText == '-' || a.target.innerText == '/' || a.target.innerText == '%')){
        dis.value = dis.value + ' ' +a.target.innerText + ' ';
        temp = dis.value;
    }
    `Handling Minus Inputs at 0-th character`
    if((dis.value.length === 0) && (a.target.innerText == '-')){
        dis.value += a.target.innerText;
        temp = dis.value;
    }
    `Final Result`
    if((a.target.innerText == '=') && (dis.value[dis.value.length-1] >= 0)){
        his.innerText = dis.value;
        calculation = [];
        calculation.push(dis.value.split(' '));
        calculate(...calculation);
    }if((a.target.innerText == '=') && dis.value.includes('√')){
        sqr = dis.value.slice(1);
        sqr = parseFloat(sqr);
        dis.value = Math.sqrt(sqr);
    }
})
window.addEventListener('keydown',function(k){
    `Displaying Number using Keyboard`   
    if(k.key >= 0){
        dis.value += k.key;
        temp = dis.value;
    }
    `Alert MSG for Not a Number`
    if(isNaN(k.key) == true && k.key != 'Backspace'){
        this.alert('Only Numbers are allowed');
    }
    `Removing Number Using Keyboard`
    if(k.key == 'Backspace'){
        dis.value = temp.slice(0,-1);
        temp = dis.value;
    }
});