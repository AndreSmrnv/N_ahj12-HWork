export default class TasksUI {
  constructor() {
    [this.all] = document.getElementsByClassName('all');
    [this.pinned] = document.getElementsByClassName('pinned');
    [this.addtask] = document.getElementsByClassName('addtask');
    [this.error] = document.getElementsByClassName('error');
    this.input = document.querySelector('.addtask input');
  }

  drawUI(tasks) {
    this.all.innerHTML = '';
    this.pinned.innerHTML = '';
    !!tasks.pinned.length ? this.drawTasks(tasks.pinned) : this.pinned.innerHTML += 'No pinned tasks' ;
    !!tasks.all.length ? this.drawTasks(tasks.all, '') : this.all.innerHTML += 'No tasks' ;
  }

  drawTasks(tasksList, checked = 'checked') {
    tasksList.forEach((elem) => {
      const div = document.createElement('div');
      div.innerHTML = `${elem.name} <input type="checkbox" ${checked}>`;
      checked ? this.pinned.appendChild(div) : this.all.appendChild(div);
    });
  }

  showError(error) {
    this.error.innerHTML = error;
  }
}
