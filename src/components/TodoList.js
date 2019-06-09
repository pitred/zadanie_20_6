import React from 'react';
import style from '../components/TodoList.css';

const TodoList = props => {
   return (
      <div className={style.TodoList}>
         {props.data.map(task => (
            <li key={task.id}>
               {' '}
               <button
                  href={'#'}
                  onClick={() => {
                     props.remove(task.id);
                  }}>
                  Delete{' '}
               </button>{' '}
               {task.text}
            </li>
         ))}
      </div>
   );
};

export default TodoList;
