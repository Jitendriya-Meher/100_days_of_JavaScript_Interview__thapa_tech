const tabs = document.querySelector(".tabs");
// console.log(tabs);

const images = document.querySelectorAll(".images");
// console.log(images);

tabs.addEventListener("click", (event) => {
    // console.log(event.target);

    // console.log(event.target.dataset.category);

    if( event.target.dataset.category ){
        filterSearch(event.target.dataset.category);
    }

});

function filterSearch(category) {

    images.forEach((currImg) => {
        // console.log(currImg.dataset.category);
        if( currImg.dataset.category === category){
            // console.log(currImg);
            currImg.style.display = "block";
        }
        else if( category === "all"){
            currImg.style.display = "block";
        }
        else{
            currImg.style.display = "none";
        }
    })

}