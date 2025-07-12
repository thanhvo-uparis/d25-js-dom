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
        let checkedCount = 0;
        arr.forEach(cb => {
            if (cb.checked) {
                checkedCount += 1;
            }
        })
        countSelected.textContent = `${checkedCount} Selected`;
    }

    // Lắng nghe sử kiện mỗi lần checkbox thay đổi
    checkRows.forEach(cb => {
        cb.addEventListener("change", updateCheckedCount);
    })
    //render khởi tạo lúc chưa ai chọn gì
    updateCheckedCount()
}

uploadDisplay(checkRows);