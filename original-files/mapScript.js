let list = document.getElementsByClassName("statepath");

let currentState;




if (localStorage.getItem('currentState') == null){
    currentState = "";
  } else {
    currentState = localStorage.getItem('currentState');
}

for (var i = 0; i<list.length; i++){
    list[i].addEventListener("click", e=>{
        //let mapBox = document.getElementById("map-box");
        
        currentState=e.target.getAttribute("id");
        currentState = document.getElementById(currentState).childNodes[1].textContent;
        localStorage.setItem("currentState", currentState);
        window.location.href = "info.html";

        /*mapBox.style.visibility="visible";
        document.getElementById("statename").textContent = currentState;

        mapBox.style.top = (e.clientY - mapBox.offsetHeight)+ 'px';
        mapBox.style.left = (e.clientX -mapBox.offsetWidth/2) + 'px';*/
    })
}

document.getElementById("statename").innerHTML = currentState; 







