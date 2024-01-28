
const [tasks, dispatch] = useReducer(tasksReducer, []);

function handleAddTask(text) {
    dispatch({
      type: 'added',
      id: nextId++,
      text: text,
    });
  }
  
  function handleChangeTask(task) {
    dispatch({
      type: 'changed',
      task: task,
    });
  }
  
  function handleDeleteTask(taskId) {
    dispatch({
      type: 'deleted',
      id: taskId,
    });
  }

  function tasksReducer(tasks, action) {
    if (action.type === 'added') {
      return [
        ...tasks,
        {
          id: action.id,
          text: action.text,
          done: false,
        },
      ];
    } else if (action.type === 'changed') {
      return tasks.map((t) => {
        if (t.id === action.task.id) {
          return action.task;
        } else {
          return t;
        }
      });
    } else if (action.type === 'deleted') {
      return tasks.filter((t) => t.id !== action.id);
    } else {
      throw Error('Unknown action: ' + action.type);
    }
  }