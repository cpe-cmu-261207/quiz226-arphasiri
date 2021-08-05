const author = document.querySelector("#author")
const calculation = document.querySelector("#calculation")
const btn_toggle = document.querySelector("#toggle");
const length = document.getElementById('length')
const color = document.querySelector('#color')
const search = document.getElementById('search')
const text = document.getElementById('text')
const reset = document.getElementById('reset')

// define more constants and variables here
const defcolor = color.value
const deftext = text.innerHTML


author.innerHTML = "630610771 ARPASIRI KONGNGERN"
btn_toggle.onclick = () => {
  if(btn_toggle.innerHTML === "Show Calculation"){
    calculation.innerHTML = 630610771 + parseInt(length.value)
    btn_toggle.innerHTML = "Show Author"
    author.innerHTML = ""
  }else{
    btn_toggle.innerHTML = "Show Calculation"
    author.innerHTML = "630610771 ARPASIRI KONGNGERN"
    calculation.innerHTML = ""
  }
}

// more codes for Search and Reset buttons here

search.onclick = () => {
  
  let textspan = ""
  const words = deftext.split(" ");

  for(let i = 0; i < words.length; i++){
    if(words[i].length >= length.value){
      words[i] = "<span style='color:"+ color.value+ "'>" + words[i] + "</span>";
    }
  }

  for(let i = 0; i < words.length; i++){
    textspan += words[i] +" ";
  }

    text.innerHTML = textspan;
}


reset.onclick = () => {
    text.innerHTML = deftext;
    length.value = 5
    color.value = defcolor;
}

