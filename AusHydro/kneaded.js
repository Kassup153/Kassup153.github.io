var firstY = false;

function run() {

    let marker = document.getElementById("pghead");
    let header = document.getElementById("header");

    if (firstY == false) {
        firstY = marker.getBoundingClientRect().y + 1;
    }

    let y = marker.getBoundingClientRect().y;

    header.style.opacity = y / firstY;

    console.log(firstY);
    console.log(y);

    console.log(firstY / y);

}