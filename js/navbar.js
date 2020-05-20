console.log("This is Working")

document.getElementById("navprofildropdown").addEventListener("click", openMenu);

function openMenu() {

  document.getElementById("dropdown").classList.toggle("active");
}
