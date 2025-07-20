const $ = document.querySelector.bind(document);
const $$ = document.querySelectorAll.bind(document);
const tabs = document.querySelectorAll(".tabs-container");

tabs.forEach(tab => {
    const listItems = tab.querySelectorAll(".btn-item");
    const listContents = tab.querySelectorAll(".tab-content");

    if (listItems.length) {
        listItems[0].classList.add("active");
        listContents[0].classList.add("active");
    }
    listItems.forEach((item, index) => {
        item.onclick = function() {
            const itemActivate = tab.querySelector(".btn-item.active");
            itemActivate.classList.remove("active");
            this.classList.add("active");

            const contentActivate = tab.querySelector(".tab-content.active");
            contentActivate.classList.remove("active");
            listContents[index].classList.add("active");
        }
    })

    document.body.addEventListener("keydown", function(event){
        listItems.forEach(item => {
            const dataTab = item.dataset.tab;
            if (event.key === dataTab) {
                console.log(item);
            }
        })
    })
})

