import React, {Component} from 'react';
import Input from './components/UI/input';
import Actions from './components/actions';
import Checkbox from './components/UI/checkbox';
import './App.css';

class App extends Component {
    state = {
        tasks: [
            {text: 'Buy bread', done: false},
            {text: 'Do Homework', done: true},
            {text: 'Throw trash', done: false},
        ],
        filter: 'all',
        task: ''
    };

    handleInputChange = event => {
        this.setState({task: event.target.value});
    };

    handleEnterPress = event => {
        if (event.key === "Enter") {
            this.addTask();
        }
    };

    handleSetFilter = filter => {
        this.setState({filter})
    };

    updateTaskStatus = index => {
        const tasks = [...this.state.tasks];
        tasks[index].done = !tasks[index].done;

        this.setState({tasks});
    };

    addTask() {
        const task = this.state.task;
        const tasks = [...this.state.tasks];

        const valid = task !== '';
        const exists = tasks.find(t => t.text === task);

        if (!valid || exists) {
            this.setState({task: ''});
            return;
        }

        tasks.push({
            text: task,
            done: false
        });

        this.setState({
            tasks,
            task: ''
        });
    }

    deleteTask = task => {
        let tasks = [...this.state.tasks];
        tasks = tasks.filter(t => t.text !== task.text);

        this.setState({tasks});
    };

    filteredTasks() {
        return this.state.tasks.filter(task => {
            if (this.state.filter === 'completed') {
                return task.done;
            }

            if (this.state.filter === 'incompleted') {
                return !task.done;
            }

            return task;
        });
    }

    render() {
        const { task, filter } = this.state;

        return (
            <div className="container">
                <div className="todos shadow">
                    <div>
                        <h3>My Todo List</h3>

                        <div className="input-group">
                            <Input type="text"
                                   placeholder="I need to.."
                                   onInputChange={this.handleInputChange}
                                   onKeyPress={this.handleEnterPress}
                                   value={task}
                            />
                            <button onClick={() => this.addTask()}>Add</button>
                        </div>

                        <div className="divider shadow"></div>

                        <div className="task-group">
                            {
                                this.filteredTasks().map((task, index) =>
                                    <div key={index} className="task">
                                        <Checkbox id={index}
                                               type="checkbox"
                                               checked={task.done}
                                               onChange={() => this.updateTaskStatus(index)}
                                        />
                                        <label htmlFor={index}>{task.text}</label>
                                        <span title="Delete"
                                              onClick={() => this.deleteTask(task)}
                                        >X</span>
                                    </div>
                                )
                            }
                        </div>
                    </div>

                    <Actions filter={filter} setFilter={this.handleSetFilter}/>
                </div>
            </div>
        );
    }
}

export default App;
