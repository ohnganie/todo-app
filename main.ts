const input = document.querySelector('input');
const btn = document.querySelector<HTMLButtonElement>('.addbtn');

btn?.addEventListener('click', addList);
input?.addEventListener('keyup', (e) => {
    (e.keyCode === 13 ? addList(e) : null);
})

function addList(e:any): void {
    const notCompleted = document.querySelector('.notCompleted');
    const Completed = document.querySelector('.Completed');
    
    const newLi = document.createElement('li');
    newLi.classList.add('task');
    newLi.classList.add('fill');
    newLi.setAttribute("draggable", "true");
    newLi.addEventListener('dragstart', dragStart);
    newLi.addEventListener('dragend', dragEnd);
// delete and check button
    const checkBtn = document.createElement('button');
    const delBtn = document.createElement('button');
    
    const todoStart = document.querySelector<HTMLInputElement>(".datestart");
    const newDates = document.createElement('li');
    newDates.innerHTML = todoStart?.value ?? "";
    newDates.classList.add('.todo-Dates');

    const todoEnd = document.querySelector<HTMLInputElement>(".dateend");
    const endDates = document.createElement('li');
    endDates.innerHTML = todoEnd?.value ?? "";
    endDates.classList.add('.todos-Dates');

    checkBtn.innerHTML = '<i class="fa fa-check"></i>';
    delBtn.innerHTML = '<i class="fa fa-trash"></i>';


//Dates
    const labelStart = document.querySelector(".label");
    const labelInput = document.createElement('label');
    labelInput.innerText = "---Start Date";

    const labelEnd = document.querySelector(".labels");
    const labelsInput = document.createElement('label');
    labelsInput.innerText = "---Due Date";

    
    if (input?.value !== '') {
        newLi.textContent = input.value;

        input.value = '';
        todoStart.value = '';
        todoEnd.value = '';
        notCompleted?.appendChild(newLi);
        newDates.appendChild(labelInput);
        newLi.appendChild(checkBtn);
        newLi.appendChild(delBtn);
        newLi.appendChild(newDates);
        newLi.appendChild(endDates);
        endDates.appendChild(labelsInput);
    }

    checkBtn.addEventListener('click', function () {
        const parent = this.parentNode;
        parent?.remove();
        Completed?.appendChild(parent);
        checkBtn.style.display = 'none';
    });

    delBtn.addEventListener('click', function () {
        const parent = this.parentNode;
        parent?.remove();

    });
}

let newLi:any

const dragStart = (event:any) => {
    // console.log(event.target);
    event.target.className += ' hold';
    newLi = event.target;

}

const dragEnd = (event:any) => {
    // console.log(event.target);
    event.target.className = 'task fill';
}

const dropzones = document.querySelectorAll('.tasks');

const dragEnter = (event:any) => {
    // console.log("ENTER");
    if(event.target.className === "tasks") {
        event.target.className += ' hovered';   
    }
    event.preventDefault();


}

const dragOver = (event:any) => {
    // console.log("OVER");
    event.preventDefault();
}

const dragLeave = (event:any) => {
    // console.log("LEAVE");
    event.preventDefault();
}

const dragDrop = (event:any) => {
    // console.log("DROP");
    event.target.append(newLi);
    event.preventDefault();
}

dropzones.forEach(dropzone =>{
    dropzone.addEventListener('dragenter', dragEnter);
    dropzone.addEventListener('dragover', dragOver);
    dropzone.addEventListener('dragleave', dragLeave);
    dropzone.addEventListener('drop', dragDrop);
});
