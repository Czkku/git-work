function add(){
    window.location.href = "/backstage";
// console.log("fsl")
  }


Array.from(document.getElementsByClassName("upd_data")).forEach( i =>{
    i.onclick = function(){
        alert(1);
        // id = this.getAttribute("data-id");
        // console.log(id);
    }
})

