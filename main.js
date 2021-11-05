var input = document.querySelector('input');
var btn = document.querySelector('.addbtn');
btn === null || btn === void 0 ? void 0 : btn.addEventListener('click', addList);
input === null || input === void 0 ? void 0 : input.addEventListener('keyup', function (e) {
    (e.keyCode === 13 ? addList(e) : null);
});
function addList(e) {
    var _a, _b;
    var notCompleted = document.querySelector('.notCompleted');
    var Completed = document.querySelector('.Completed');
    var newLi = document.createElement('li');
    newLi.classList.add('task');
    newLi.classList.add('fill');
    newLi.setAttribute("draggable", "true");
    newLi.addEventListener('dragstart', dragStart);
    newLi.addEventListener('dragend', dragEnd);
    // delete and check button
    var checkBtn = document.createElement('button');
    var delBtn = document.createElement('button');
    var todoStart = document.querySelector(".datestart");
    var newDates = document.createElement('li');
    newDates.innerHTML = (_a = todoStart === null || todoStart === void 0 ? void 0 : todoStart.value) !== null && _a !== void 0 ? _a : "";
    newDates.classList.add('.todo-Dates');
    var todoEnd = document.querySelector(".dateend");
    var endDates = document.createElement('li');
    endDates.innerHTML = (_b = todoEnd === null || todoEnd === void 0 ? void 0 : todoEnd.value) !== null && _b !== void 0 ? _b : "";
    endDates.classList.add('.todos-Dates');
    checkBtn.innerHTML = '<i class="fa fa-check"></i>';
    delBtn.innerHTML = '<i class="fa fa-trash"></i>';
    //Dates
    var labelStart = document.querySelector(".label");
    var labelInput = document.createElement('label');
    labelInput.innerText = "---Start Date";
    var labelEnd = document.querySelector(".labels");
    var labelsInput = document.createElement('label');
    labelsInput.innerText = "---Due Date";
    if ((input === null || input === void 0 ? void 0 : input.value) !== '') {
        newLi.textContent = input.value;
        input.value = '';
        todoStart.value = '';
        todoEnd.value = '';
        notCompleted === null || notCompleted === void 0 ? void 0 : notCompleted.appendChild(newLi);
        newDates.appendChild(labelInput);
        newLi.appendChild(checkBtn);
        newLi.appendChild(delBtn);
        newLi.appendChild(newDates);
        newLi.appendChild(endDates);
        endDates.appendChild(labelsInput);
    }
    checkBtn.addEventListener('click', function () {
        var parent = this.parentNode;
        parent === null || parent === void 0 ? void 0 : parent.remove();
        Completed === null || Completed === void 0 ? void 0 : Completed.appendChild(parent);
        checkBtn.style.display = 'none';
    });
    delBtn.addEventListener('click', function () {
        var parent = this.parentNode;
        parent === null || parent === void 0 ? void 0 : parent.remove();
    });
}
var newLi;
var dragStart = function (event) {
    // console.log(event.target);
    event.target.className += ' hold';
    newLi = event.target;
};
var dragEnd = function (event) {
    // console.log(event.target);
    event.target.className = 'task fill';
};
var dropzones = document.querySelectorAll('.tasks');
var dragEnter = function (event) {
    // console.log("ENTER");
    if (event.target.className === "tasks") {
        event.target.className += ' hovered';
    }
    event.preventDefault();
};
var dragOver = function (event) {
    // console.log("OVER");
    event.preventDefault();
};
var dragLeave = function (event) {
    // console.log("LEAVE");
    event.preventDefault();
};
var dragDrop = function (event) {
    // console.log("DROP");
    event.target.append(newLi);
    event.preventDefault();
};
dropzones.forEach(function (dropzone) {
    dropzone.addEventListener('dragenter', dragEnter);
    dropzone.addEventListener('dragover', dragOver);
    dropzone.addEventListener('dragleave', dragLeave);
    dropzone.addEventListener('drop', dragDrop);
});
