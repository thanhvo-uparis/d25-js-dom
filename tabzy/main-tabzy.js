const $ = document.querySelector.bind(document);
const $$ = document.querySelectorAll.bind(document);
const tabs = document.querySelectorAll(".tabs-container");

tabs.forEach(tab => {
    const listItems = tab.querySelectorAll(".btn-item");
    const listContents = tab.querySelectorAll(".tab-content");

    if (listItems.length && listContents.length) {
        listItems[0].classList.add("active");
        listContents[0].classList.add("active");
    }
    const activateTab = (tabIndex) => {
        if (tabIndex < 0 || (tabIndex > listItems.length - 1)) return;
        const itemActivate = tab.querySelector(".btn-item.active");
        itemActivate.classList.remove("active");
        const contentActivate = tab.querySelector(".tab-content.active");
        contentActivate.classList.remove("active");
        
        listItems[tabIndex].classList.add("active");
        listContents[tabIndex].classList.add("active");
    }
    
    listItems.forEach((item, index) => {
        item.addEventListener("click", () => activateTab(index));
    })

})