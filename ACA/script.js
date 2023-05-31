let string = "";
let buttons = document.querySelectorAll('.button');
Array.from(buttons).forEach((button)=>{
  button.addEventListener('click', (e)=>{
    //for =
    if(e.target.innerHTML == '='){
      string = eval(string);
      document.querySelector('input').value = string;
    }
      //for C
    else if(e.target.innerHTML == 'C'){
      string = ""
      document.querySelector('input').value = string;
    }
      //sin
      else if(e.target.innerHTML == 'sin'){
        document.querySelector('input').value = Math.sin(string*(Math.PI/180));//degree to radian
      }
       //cos
      else if(e.target.innerHTML == 'cos'){
        document.querySelector('input').value = Math.cos(string*(Math.PI/180));//degree to radian
      }
        //tan
       else if(e.target.innerHTML == 'tan'){
        document.querySelector('input').value = Math.tan(string*(Math.PI/180));//degree to radian
      }
        //for log
      else if(e.target.innerHTML == 'log'){
        document.querySelector('input').value = Math.log10(string);//base 10
      }
      //for ln
      else if(e.target.innerHTML == 'ln'){
        document.querySelector('input').value = Math.log(string);//log is base e
        string += Math.log(string);
      }
      //for e
      else if(e.target.innerHTML == 'e'){
        document.querySelector('input').value = Math.E;
        string += Math.E;
      }
      //for exp
      else if(e.target.innerHTML == 'exp'){
        document.querySelector('input').value = Math.exp(string);
      }
      //for square root
      else if(e.target.innerHTML == '√'){
        document.querySelector('input').value = Math.sqrt(string);
      }
      //for pi
      else if(e.target.innerHTML == 'π'){
        document.querySelector('input').value = Math.PI;
        string += Math.PI;
      }
        // factorial
      //for backspace
      else if(e.target.innerHTML == '⌫'){
        document.querySelector('input').value = string.slice(0, -1);
        string = string.slice(0, -1);
      }
      //for concatenation
    else{
      console.log(e.target)
      string = string + e.target.innerHTML;
      document.querySelector('input').value = string;
    }
  })
})
