import React from 'react';

class TodoForm extends React.Component {
   constructor(props) {
      super(props);
      this.state = {
         todoName: ''
      };
   }

   updateTodoName(e) {
      this.setState({ todoName: e.target.value });
   }

   addTodo(e) {
      e.preventDefault();
      this.props.addTodoFunc(this.state.todoName);
   }

   render() {
      return (
         <form onSubmit={this.addTodo.bind(this)}>
            <input type='submit' value='Add Task' />
            <input value={this.state.todoName} onChange={this.updateTodoName.bind(this)} type='text' />
         </form>
      );
   }
}

export default TodoForm;
