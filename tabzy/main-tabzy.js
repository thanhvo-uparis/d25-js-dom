const $ = document.querySelector.bind(document);
const $$ = document.querySelectorAll.bind(document);

const tabs = document.querySelectorAll(".tabs-container");
tabs.forEach(tab => {
    const listItems = tab.querySelectorAll(".btn-item");
    listItems.forEach(item => {
        item.onclick = () => {
            item.classList.add("show");
        }
    })
})

