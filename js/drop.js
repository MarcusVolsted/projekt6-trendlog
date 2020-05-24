// Add på alle fra web versionen  
  
  function addnewgroup() {
       var container = document.getElementById("group-add-select");
       var option = document.createElement("OPTION");
       option.innerHTML = document.getElementById("nyt-element-navn").value;
       option.setAttribute("selected","")
       container.options.add(option);
   }

   function addnewgrouptwo() {
    var container2 = document.getElementById("group-add-select-out");
    var option = document.createElement("OPTION");
    option.innerHTML = document.getElementById("nyt-element-navn").value;
    option.setAttribute("selected","")
    container2.options.add(option);
}

function addnewgroup1() {
    var container = document.getElementById("group-add-select-out-1");
    var option = document.createElement("OPTION");
    option.innerHTML = document.getElementById("nyt-element-navn").value;
    option.setAttribute("selected","")
    container.options.add(option); 
}

function addnewgrouptwo1() {
 var container2 = document.getElementById("group-add-select3");
 var option = document.createElement("OPTION");
 option.innerHTML = document.getElementById("nyt-element-navn").value;
 option.setAttribute("selected","")
 container2.options.add(option);
}

// Add på alle fra mobil versionen 

function addnewgroupmobil() {
    var container = document.getElementById("group-add-select");
    var option = document.createElement("OPTION");
    option.innerHTML = document.getElementById("nyt-element-navn-1").value;
    option.setAttribute("selected","")
    container.options.add(option);
}

function addnewgrouptwomobil() {
 var container2 = document.getElementById("group-add-select-out");
 var option = document.createElement("OPTION");
 option.innerHTML = document.getElementById("nyt-element-navn-1").value;
 option.setAttribute("selected","")
 container2.options.add(option);
}

function addnewgroup1mobil() {
 var container = document.getElementById("group-add-select-out-1");
 var option = document.createElement("OPTION");
 option.innerHTML = document.getElementById("nyt-element-navn-1").value;
 option.setAttribute("selected","")
 container.options.add(option); 
}

function addnewgrouptwo1mobil() {
var container2 = document.getElementById("group-add-select3");
var option = document.createElement("OPTION");
option.innerHTML = document.getElementById("nyt-element-navn-1").value;
option.setAttribute("selected","")
container2.options.add(option);
}

// Add på alle fra new resources mobile/web 

function addnewgroupresources() {
    var container = document.getElementById("group-add-select-out-res");
    var option = document.createElement("OPTION");
    option.innerHTML = document.getElementById("nyt-element-navn-2").value;
    option.setAttribute("selected","")
    container.options.add(option);
}

function addnewgrouptworesources() {
 var container2 = document.getElementById("group-add-select-res");
 var option = document.createElement("OPTION");
 option.innerHTML = document.getElementById("nyt-element-navn-2").value;
 option.setAttribute("selected","")
 container2.options.add(option);
}