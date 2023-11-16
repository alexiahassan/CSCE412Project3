
    function changeStyleSheet(){
        var stylesheet = document.getElementById("stylesheet");
        if (localStorage.getItem("stylesheet_page") == "main.css")
            localStorage.setItem("stylesheet_page", "stylesheet2.css");
        else {
            localStorage.setItem("stylesheet_page", "main.css");
        }
        stylesheet.setAttribute('href', localStorage.getItem("stylesheet_page"));
     }


     function setStyle() {
        if (localStorage.getItem("stylesheet_page") == null)
            changeStyleSheet();
        stylesheet.setAttribute('href', localStorage.getItem("stylesheet_page"));
     }

