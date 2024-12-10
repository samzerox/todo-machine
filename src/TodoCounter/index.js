import { useContext } from 'react';
import './TodoCounter.css';
import { TodoContext } from '../TodoContext';

export const TodoCounter = () => {

  const { 
    completedTodos: completed ,
    totalTodos: total,
   } = useContext(TodoContext);

  return (
    <>
    {
      (total === completed)
      ? <h1 className='TodoCounter'> <span>Felicidades has completado todos los TODOS.</span></h1>
      : <h1 className='TodoCounter'> Has completado <span>{ completed }</span> de <span>{ total }</span> TODOS</h1>
    }
    
    </>
  )
}

