const js = require('./build-js');
const css = require('./build-css');

const tasks = { js, css };


function runTask(name) {
  const task = tasks[name];
  if(typeof task === 'function') {
    console.log(`${name} started...`);
    const result = task();

    if(result instanceof Promise) {
      result.then(() => console.log(`${name} finished`));
    } else if(result.on) {
      result.on('close', () => console.log(`${name} finished`));
    } else {
      console.log(`${name} finished`);
    }
  } else {
    console.log(`No task named ${name}`);
  }
}


let [,,...tasksToRun] = process.argv;

if(tasksToRun.length === 0) {
  tasksToRun = Object.keys(tasks);
}

tasksToRun.forEach(taskName => runTask(taskName));
