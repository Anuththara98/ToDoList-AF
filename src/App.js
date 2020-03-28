import React,{Component} from 'react';
import TaskInput from "./Components/taskInput";
import TodoList from "./Components/todoList";

import "bootstrap/dist/css/bootstrap.min.css";

class App extends Component {

    //Initialize the state and create an object
    state = {
        items: [],
        id: Date.now(),
        item: '',
        editItem: false
    };

    //this method is tracking values which are input in the insert box.
    changeEvent = event => {
        this.setState({
            item: event.target.value
        });
    };

    //this method is listening event to the input values
    submitTask = event => {
        event.preventDefault();   //keep the value in the text box

        const newTask = {
            id: this.state.id,
            title: this.state.item  //creating a new item
        };

        const updatedItems = [...this.state.items,newTask];

        this.setState({
            items: updatedItems,
            item: "",
            id: Date.now(),
            editItem :false
        });
    };
    clearList = () =>{
        this.setState({
            items:[]
        })
    };

    deleteTask = (id) =>{
        const filteredItems = this.state.items.filter(item =>
        item.id !== id);
        this.setState({
            items: filteredItems,
        });
    };

    updateTask = (id) => {
        const filteredItems = this.state.items.filter(item =>
            item.id !== id);
        const selectedItem = this.state.items.find(item => item.id === id);

        console.log(selectedItem);
        this.setState({
            items: filteredItems,
            item: selectedItem.title,
            editItem: true,
            id:id
        });
    }
        render()
        {
            return (
                <div className="container">
                    <div className="row">
                        <div className="col-10 mx-auto col-md-8 mt-4">
                            <h3 className="text-capitalize text-center">To Do List</h3>
                            <TaskInput item={this.state.item}
                                       handleChange={this.changeEvent}
                                       handleSubmit={this.submitTask}
                                       editItem={this.state.editItem}/>
                            <TodoList items={this.state.items}
                                      clearList={this.clearList}
                                      handleDelete={this.deleteTask}
                                      handleEdit={this.updateTask}/>
                        </div>
                    </div>
                </div>

            )
        }
}

export default App;
