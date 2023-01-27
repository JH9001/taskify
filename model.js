export const state = {
  task: {},
  taskArr: [],
};

export const loadTask = function (task) {
  state.task = task;
  state.taskArr.push(task);
  console.log(task);
};
