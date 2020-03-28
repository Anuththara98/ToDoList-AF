import React, {Component} from 'react';

class TaskInput extends Component {
    render() {
        const {item,handleChange,handleSubmit,editItem} = this.props    //getting props
        return(
            <div className="card card-body my-3 bg-light">
                <form onSubmit={handleSubmit}>
                    <div className="input-group ">
                        <div className="input-group-prepend">
                        <div className="input-group-text bg-danger text-center text-white">
                            <i className="fas fa-book"/>
                        </div>
                        </div>
                        <input type="text" className="form-control text-center text-capitalize text-black-50"
                               placeholder="Enter Tasks"
                                value={item}
                                onChange={handleChange}/>
                    </div>
                    <button type="submit"
                            className={
                                editItem ?
                                    "btn btn-block btn-success mt-3":
                                    "btn btn-block btn-primary mt-3"
                            }
                    >{editItem ? "update task" : "add task"}</button>

                </form>
            </div>
        );

    }
}

export default TaskInput;