let toast = document.getElementById("toast")
let showtoast = document.getElementById("show_toast")
showtoast.addEventListener("click",()=>{
  toast.style.display = "flex";
  setTimeout(()=>{
    toast.style.display = "none"; 
  },3000)
})