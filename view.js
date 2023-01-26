const taskContainer = document.querySelector(".task-container");
const newTaskButton = document.getElementById("new-task-button");
const modal = document.querySelector(".modal");
const modalClose = document.querySelector(".modal-close");
const modalBackground = document.querySelector(".modal-background");

const taskForm = document.querySelector(".task-form");
const formCancel = document.querySelector(".form-cancel");

const home = document.querySelector(".home");
const today = document.querySelector(".today");
const week = document.querySelector(".week");
const projects = document.querySelector(".projects");

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
    if (index === 0) return "is-danger";
    console.log(index);
  }

  removeTaskPriority() {
    [lowButton, mediumButton, highButton].forEach((button) => {
      button.classList.remove("is-focused");
      console.log("HH");
    });
  }

  renderTask(title, details) {
    const html = `
    <div class="column is-4">
      <article class="message">
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

  clearInput() {
    document.getElementById("task-title").value = "";
    document.getElementById("task-details").value = "";
  }

  getFormData() {
    const task = {
      title: document.getElementById("task-title").value,
      details: document.getElementById("task-details").value,
      priority: this.priority,
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
}

export default new View();