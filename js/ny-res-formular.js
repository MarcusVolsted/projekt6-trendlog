var divs = ["slide-one", "slide-two", "slide-three"];
var visibleDivId = null;
function toggleVisibilityNewRes(divId) {
  if(visibleDivId === divId) {
  } else {
    visibleDivId = divId;
  }
  hideNonVisibleDivsNewRes();
}
function hideNonVisibleDivsNewRes() {
  var i, divId, div;
  for(i = 0; i < divs.length; i++) {
    divId = divs[i];
    div = document.getElementById(divId);
    if(visibleDivId === divId) {
      div.style.display = "block";
    } else {
      div.style.display = "none";
    }
  }
}