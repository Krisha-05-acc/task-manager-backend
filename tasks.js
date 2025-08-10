let tasks = ['Buy groceries', 'Finish homework'];

module.exports = {
  getTasks: () => tasks,
  addTask: (task) => tasks.push(task),
};