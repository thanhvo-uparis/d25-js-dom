const $ = document.querySelector.bind(document);
const $$ = document.querySelectorAll.bind(document);

const countSelected = $("#checked-count");
console.log(countSelected);

const checkAll = $("#check-all");
const checkRows = $$(".row-checkbox");
console.log(checkRows);

function uploadDisplay(arr) {
    // Đếm số checkbox được chọn
    const updateCheckedCount = () => {
        const checkedCount = Array.from(arr).filter(cb => cb.checked).length;
        
        countSelected.textContent = `${checkedCount} Selected`;
        if (checkedCount >= 1) {
            checkAll.indeterminate = true;
        }
    }
    // Lắng nghe sử kiện mỗi lần checkbox thay đổi
    checkRows.forEach(cb => {
        cb.addEventListener("change", updateCheckedCount);
    })
    //render khởi tạo lúc chưa ai chọn gì
    updateCheckedCount();
}
uploadDisplay(checkRows);

function checkedAll(element) {
    element.addEventListener("change", function() {
        checkRows.forEach(cb => {
            cb.checked = element.checked;
        })
        uploadDisplay(checkRows);
    })
}
checkedAll(checkAll);