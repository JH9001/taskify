import * as model from "./model.js";
import View from "./view.js";

const renderTask = function () {
  View.clearView();
  model.state.taskArr.forEach((task) => {
    View.renderTask(task.title, task.details);
  });
};

const controlTask = function () {
  const task = View.getFormData();
  model.loadTask(task);
  View.getTaskPriority();
  View.clearInput();
  renderTask();
};

const init = function () {
  View.addHandlerForm();
  View.addHandlerPriority();
  View.addHandlerSubmit(controlTask);
  View.addHandlerHome(renderTask);
};

init();
