sizeChange();
window.onresize = function() {
    sizeChange();
}

function sizeChange() {
    if (window.innerWidth > 861) {
        document.getElementById('mobil-wrapper-res').style.display = 'none';  
    }
    else {     
        document.getElementById('mobil-wrapper-res').style.display = 'block';   
    }    
}
