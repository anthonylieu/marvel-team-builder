var teamSelect = document.querySelector(".character");
console.log(teamSelect);

teamSelect.addEventListener("click", function(event) {
    var element = event.target;
    const response = await fetch("/api/teams"), {
        method: "POST",
    
    
}});

fetch(/api/teams)