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

var divsNewRes = ["slide-one", "slide-two", "slide-three"];
var visibleDivIdNewRes = null;
function toggleVisibilityNewRes(divId) {
  if(visibleDivIdNewRes === divId) {
  } else {
    visibleDivIdNewRes = divId;
  }
  hideNonVisibleDivsNewRes();
}
function hideNonVisibleDivsNewRes() {
  var i, divId, divNewRes;
  for(i = 0; i < divsNewRes.length; i++) {
    divId = divsNewRes[i];
    divNewRes = document.getElementById(divId);
    if(visibleDivIdNewRes === divId) {
      divNewRes.style.display = "block";
    } else {
      divNewRes.style.display = "none";
    }
  }
}
