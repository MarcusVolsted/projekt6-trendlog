var divs = ["mobile-settings-container", "mobile-checkliste-container", "mobile-history-container", "mobile-service-settings-container", "mobile-service-settings-container", "mobile-add-to-settings-container"];
var visibleDivId = null;
function toggleVisibility(divId) {
  if(visibleDivId === divId) {
  } else {
    visibleDivId = divId;
  }
  hideNonVisibleDivs();
}
function hideNonVisibleDivs() {
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
