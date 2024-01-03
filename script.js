let pages = document.getElementsByClassName('page');
let pagesArray = Array.from(pages);

function nextPage(givenIndex){
    pagesArray.forEach((page) => {
        let index = pagesArray.indexOf(page);
        if (index === givenIndex) {
            page.style.display = "flex";
        } else {
            page.style.display = "none";
        }
    });
}