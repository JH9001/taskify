import * as model from "./model.js";
import View from "./view.js";

const renderAllTasks = function () {
  View.clearView();
  model.state.taskArr.forEach((task) => {
    View.renderTask(task.title, task.details, task.priority);
  });
};

const renderUrgentTasks = function () {
  View.clearView();
  model.state.taskArr.forEach((task) => {
    if (task.priority === "is-danger")
      View.renderTask(task.title, task.details, task.priority);
  });
};

const renderUpcomingTasks = function () {
  View.clearView();
  model.state.taskArr.forEach((task) => {
    if (task.priority === "is-warning")
      View.renderTask(task.title, task.details, task.priority);
  });
};

const renderAnytimeTasks = function () {
  View.clearView();
  model.state.taskArr.forEach((task) => {
    if (task.priority === "is-primary")
      View.renderTask(task.title, task.details, task.priority);
  });
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
};

init();
