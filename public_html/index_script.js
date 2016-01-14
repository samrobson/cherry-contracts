function checkEnter() {
    if(document.getElementById("grade").value === "8" && document.getElementById("block").value === "6") {
        console.log("User correctly inputted block + grade");
        document.getElementById("enter").className = "button expanded";
    }
    else {
        document.getElementById("enter").className = "button expanded disabled";
    }
}

function enter() {
    var name = document.getElementById("cmp_mng").value;
    if (name.toUpperCase() === "WOODARD") {
        window.location = "companies/woodard.html";
    }
    if (name.toUpperCase() === "BROWN") {
        window.location = "companies/brown.html";
    }
    if (name.toUpperCase() === "IJAMS") {
        window.location = "companies/ijams.html";
    }
    if (name.toUpperCase() === "PATTON") {
        window.location = "companies/patton.html";
    }
    if (name.toUpperCase() === "RODRIGUEZ") {
        window.location = "companies/rodriguez.html";
    }
    if (name.toUpperCase() === "WALKER") {
        window.location = "companies/walker.html";
    }
    if (name.toUpperCase() === "WANAMAKER") {
        window.location = "companies/wanamaker.html";
    }
    if (name.toUpperCase() === "YAMASHITA") {
        window.location = "companies/yamashita.html";
    }
}

 {
    document.getElementById("grade").value = "";
    document.getElementById("block").value = "";
}