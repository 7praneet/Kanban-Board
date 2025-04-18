const addTaskBtn = document.getElementById('add-task-btn');
const todoBoard = document.getElementById('todo-board');
const themeToggleBtn = document.getElementById('theme-toggle');
const body = document.body;


function attachDragEvents(target) {
    target.addEventListener('dragstart', () => {
        target.classList.add('flying');
    });

    target.addEventListener('dragend', () => {
        target.classList.remove('flying');
    });
}


addTaskBtn.addEventListener('click', () => {
    const input = prompt('What is the task?');
    if (!input) return;

    const taskCard = document.createElement('p');
    taskCard.classList.add('item');
    taskCard.setAttribute('draggable', true);
    taskCard.innerText = input;

    attachDragEvents(taskCard);
    todoBoard.appendChild(taskCard);
});


const allItems = document.querySelectorAll('.item');
allItems.forEach((item) => attachDragEvents(item));

const allBoards = document.querySelectorAll('.board');
allBoards.forEach((board) => {
    board.addEventListener('dragover', (event) => {
        event.preventDefault();
        const flyingElement = document.querySelector('.flying');
        if (flyingElement) {
            board.appendChild(flyingElement);
        }
    });
});


if (localStorage.getItem('theme') === 'light') {
    body.classList.add('light-mode');
    themeToggleBtn.innerText = '🌙 Dark Mode';
}


themeToggleBtn.addEventListener('click', () => {
    body.classList.toggle('light-mode');
    if (body.classList.contains('light-mode')) {
        localStorage.setItem('theme', 'light');
        themeToggleBtn.innerText = '🌙 Dark Mode';
    } else {
        localStorage.setItem('theme', 'dark');
        themeToggleBtn.innerText = '☀️ Light Mode';
    }
});
