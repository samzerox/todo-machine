import { useContext, useState } from 'react';
import './TodoForm.css';
import { TodoContext } from '../TodoContext';

export const TodoForm = () => {

    const {
        setOpenModal,
        addTodo,
    } = useContext(TodoContext);

    const [newTodoValue, setNewTodoValue] = useState('');

    const onSubmit = (event) => {
        event.preventDefault();
        addTodo(newTodoValue);
        setOpenModal(false);
    }

    const onCancel = (event) => {
        event.preventDefault();
        setOpenModal(false);
    }
 
    const onChange = (event) => {
        setNewTodoValue(event.target.value);
    }

  return (
    <form onSubmit={ onSubmit }>
        <label>Escribe tu nuevo TODO</label>
        <textarea 
            placeholder='Cortar cebolla para el almuerzo'
            value={ newTodoValue }
            onChange={ onChange }
        />
        <div className='TodoForm-buttonContainer'>
            <button
                type="button" 
                className='TodoForm-button TodoForm-button--cancel'
                onClick={ onCancel }
            >Cancelar</button>
            <button
                type="submit" className='TodoForm-button TodoForm-button--add'>Agregar</button>
        </div>
    </form>
  )
}
