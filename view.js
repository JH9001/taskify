const taskContainer = document.querySelector(".task-container");
const newTaskButton = document.getElementById("new-task-button");
const modal = document.querySelector(".modal");
const modalClose = document.querySelector(".modal-close");
const modalBackground = document.querySelector(".modal-background");

const taskForm = document.querySelector(".task-form");
const formCancel = document.querySelector(".form-cancel");

const home = document.querySelector(".home");
const urgent = document.querySelector(".urgent");
const upcoming = document.querySelector(".upcoming");
const anytime = document.querySelector(".anytime");

const lowButton = document.querySelector(".low-button");
const mediumButton = document.querySelector(".medium-button");
const highButton = document.querySelector(".high-button");

[modalClose, modalBackground, formCancel].forEach((el) =>
  el.addEventListener("click", () => modal.classList.remove("is-active"))
);

class View {
  clearView() {
    taskContainer.innerHTML = "";
  }

  setTaskPriority(index) {
    if (index === 0) return "is-primary";
    if (index === 1) return "is-warning";
    if (index === 2) return "is-danger";
  }

  removeTaskPriority() {
    [lowButton, mediumButton, highButton].forEach((button) => {
      button.classList.remove("is-focused");
    });
  }

  getTaskPriority() {
    let priority;
    [lowButton, mediumButton, highButton].forEach((button, index) => {
      if (button.classList.contains("is-focused")) {
        priority = this.setTaskPriority(index);
      }
    });
    return priority;
  }

  renderTask(title, details, priority, id) {
    const html = `
    <div class="column is-4" id="${id}">
      <article class="message ${priority}">
        <div class="message-header">
          <p>${title}</p>
          <button class="delete" aria-label="delete"></button>
        </div>
        <div class="message-body">
          ${details}
        </div>
      </article>
    </div>
    `;
    taskContainer.insertAdjacentHTML("beforeend", html);
  }

  renderUrgentTasks() {}

  clearInput() {
    document.getElementById("task-title").value = "";
    document.getElementById("task-details").value = "";
    [lowButton, mediumButton, highButton].forEach((button) => {
      button.classList.remove("is-focused");
    });
  }

  getFormData() {
    const task = {
      title: document.getElementById("task-title").value,
      details: document.getElementById("task-details").value,
      priority: this.getTaskPriority(),
      id: (Date.now() + "").slice(-10),
    };
    return task;
  }

  addHandlerPriority() {
    let removePriority = this.removeTaskPriority.bind(this);
    [lowButton, mediumButton, highButton].forEach((button) => {
      button.addEventListener("click", function (e) {
        removePriority();
        e.target.classList.add("is-focused");
      });
    });
  }

  addHandlerSubmit(handler) {
    taskForm.addEventListener("submit", function (e) {
      e.preventDefault();
      modal.classList.remove("is-active");
      handler();
    });
  }

  addHandlerForm() {
    newTaskButton.addEventListener("click", function (e) {
      e.preventDefault();
      modal.classList.add("is-active");
    });
  }

  addHandlerHome(handler) {
    home.addEventListener("click", function (e) {
      e.preventDefault();
      handler();
    });
  }

  addHandlerUrgent(handler) {
    urgent.addEventListener("click", function (e) {
      e.preventDefault();
      handler();
    });
  }

  addHandlerUpcoming(handler) {
    upcoming.addEventListener("click", function (e) {
      e.preventDefault();
      handler();
    });
  }

  addHandlerAnytime(handler) {
    anytime.addEventListener("click", function (e) {
      e.preventDefault();
      handler();
    });
  }

  addHandlerTaskDelete(handler) {
    taskContainer.addEventListener("click", function (e) {
      e.preventDefault();
      if (e.target.classList.contains("delete")) {
        handler(e);
      }
    });
  }
}

export default new View();
