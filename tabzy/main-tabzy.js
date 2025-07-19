const $ = document.querySelector.bind(document);
const $$ = document.querySelectorAll.bind(document);
const tabs = document.querySelectorAll(".tabs-container");

tabs.forEach(tab => {
    const listItems = tab.querySelectorAll(".btn-item");
    if (listItems.length) {
        listItems[0].classList.add("active");
    }
    listItems.forEach(item => {
        item.onclick = function() {
            const itemActivate = tab.querySelector(".active");
            itemActivate.classList.remove("active");
            this.classList.add("active");
        }
    })
})

