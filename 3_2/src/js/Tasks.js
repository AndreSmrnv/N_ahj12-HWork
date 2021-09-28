import Task from './Task.js';
const tasks = {
  pinned: [new Task('task1 pin')],
  all: [
    new Task('task2'),
    new Task('task3')
  ]
};

export default class Tasks {
  constructor(tasksUI) {
    this.ui = tasksUI;
    this.tasks = tasks;
  }

  init() {
    this.ui.drawUI(this.tasks);
    this.ui.input.addEventListener('keypress', this.checkSubmit);
    this.ui.input.addEventListener('input', this.filterTasks);
    this.ui.all.addEventListener('click', this.moveTasks);
    this.ui.pinned.addEventListener('click', this.moveTasks);
  }

  addTask = (name) => {
    const task = new Task(name);
    this.tasks.all.push(task);
  }

  checkSubmit = (e) => {
    if (e.key === 'Enter') {
      if (this.ui.input.value === '') {
        this.ui.showError('Enter at least 1 symbol!');
        return;
      }
      this.addTask(this.ui.input.value);
      this.ui.input.value = '';
      this.ui.drawUI(this.tasks);
    }
  }

  filterTasks = (e) => {
    this.ui.showError('');
    const searchWord = e.target.value;
    const searchResults = this.tasks.all.filter((elem) => elem.name.includes(searchWord));
    this.ui.drawUI({ pinned: this.tasks.pinned, all: searchResults });
  }

  moveTasks = (e) => {
    if (!e.target.attributes.length) return;
    let divsArr;
    let arrToAdd;
    let arrToRemove;
    if (e.target.closest('.all')) {
      divsArr = [...document.getElementsByClassName('all')[0].children];
      arrToAdd = this.tasks.pinned; arrToRemove = this.tasks.all;
    } else {
      divsArr = [...document.getElementsByClassName('pinned')[0].children];
      arrToRemove = this.tasks.pinned; arrToAdd = this.tasks.all;
    }
    const index = divsArr.indexOf(e.target.parentElement);
    arrToAdd.push(arrToRemove[index]);
    arrToRemove.splice(index, 1);
    this.ui.drawUI(this.tasks);
  }
}
