import { CompleteIcon } from './CompleteIcon';
import { DeleteIcon } from './DeleteIcon';
import './TodoItem.css';

export const TodoItem = (props) => {
  return (
    <li className="TodoItem">

      <CompleteIcon 
        completed={ props.completed }
        onComplete={props.onComplete}
      />
        
      <p className={`TodoItem-p ${ props.completed && 'TodoItem-p--complete'}`}>
        { props.text }
      </p>

      <DeleteIcon
        onDelete={props.onDelete}
      />
        
    </li>
  )
}
