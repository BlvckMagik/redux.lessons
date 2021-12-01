import React from 'react';
import CreateTaskInput from './CreateTaskInput.jsx';
import * as actions from '../tasks.actions.js';
import { connect } from 'react-redux';
import Task from './Task.jsx';
import { tasksListSelector } from '../tasks.selectors.js';

class TasksList extends React.Component {
  componentDidMount() {
    this.props.getTaskList();
  }

  render() {
    const sortedTaskList = this.props.tasks
      .slice()
      .sort((a, b) => a.done - b.done);
    return (
      <main className='todo-list'>
        <CreateTaskInput addTask={this.props.createTask} />
        <ul className='list'>
          {sortedTaskList.map(task => (
            <Task
              onCheckboxChange={this.props.updateTask}
              onDelete={this.props.deleteTask}
              key={task.id}
              {...task}
            />
          ))}
        </ul>
      </main>
    );
  }
}

const mapDispatch = {
  getTaskList: actions.getTaskList,
  updateTask: actions.updateTask,
  deleteTask: actions.deleteTask,
  createTask: actions.createTask,
};

const mapState = state => {
  return {
    tasks: tasksListSelector(state),
  };
};

export default connect(mapState, mapDispatch)(TasksList);
