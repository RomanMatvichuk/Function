
document.getElementById("btn").addEventListener("click", myFunction);

function myFunction() {

    var inputText = document.getElementById("text").value;
    document.getElementById("text").value = inputText.toUpperCase();

}

