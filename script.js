
function darkMode(inp){

        inp.addEventListener("click", function (e) {
            const all_light = document.getElementsByClassName("light")
            if (all_light.length > 0){
                Array.from(all_light).forEach(element => {
                    element.classList.remove("light")
                    element.classList.add("dark")
                });
                inp.textContent = "Light Mode";
            }
            else {
                const all_dark = document.getElementsByClassName("dark")
                Array.from(all_dark).forEach(element => {
                    element.classList.remove("dark")
                    element.classList.add("light")
                });
                inp.textContent = "Dark Mode";
            }
        });}


function botInfoChanger(inp) {
    let text = [
        "Example1",
        "Example2",
        "Example3"
    ]
    Array.from(inp.children).forEach(element => {
        element.addEventListener("click", function (e) {
            element.classList.add("selected")
            Array.from(inp.children).forEach(child => {
                if (child !== element)
                    child.classList.remove("selected")
            });
            const descr = document.getElementById("description");
            descr.textContent = text[Array.from(inp.children).indexOf(element)];
        })
    });

}

/* Open */
function openNav() {
    document.getElementById("myNav").style.display = "block";
  }
  
  /* Close */
  function closeNav() {
    document.getElementById("myNav").style.display = "none";
  }