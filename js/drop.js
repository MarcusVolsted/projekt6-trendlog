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