import * as model from "./model.js";
import View from "./view.js";

const taskDelete = function (e) {
  const taskEl = e.target.closest(".column");

  model.state.taskArr = model.state.taskArr.filter(
    (task) => task.id !== taskEl.id
  );

  taskEl.remove();
};

const renderTasks = function (priority) {
  View.clearView();
  model.state.taskArr.forEach((task) => {
    if (task.priority === priority)
      View.renderTask(task.title, task.details, task.priority, task.id);
  });
};

const renderAllTasks = function () {
  View.clearView();
  model.state.taskArr.forEach((task) => {
    View.renderTask(task.title, task.details, task.priority, task.id);
  });
};

const renderUrgentTasks = function () {
  renderTasks("is-danger");
};

const renderUpcomingTasks = function () {
  renderTasks("is-warning");
};

const renderAnytimeTasks = function () {
  renderTasks("is-primary");
};

const controlTask = function () {
  const task = View.getFormData();
  model.loadTask(task);
  View.clearInput();
  renderAllTasks();
};

const init = function () {
  View.addHandlerForm();
  View.addHandlerPriority();
  View.addHandlerSubmit(controlTask);
  View.addHandlerHome(renderAllTasks);
  View.addHandlerUrgent(renderUrgentTasks);
  View.addHandlerUpcoming(renderUpcomingTasks);
  View.addHandlerAnytime(renderAnytimeTasks);
  View.addHandlerTaskDelete(taskDelete);
};

init();
