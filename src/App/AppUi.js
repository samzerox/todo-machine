import { TodoCounter } from '../TodoCounter';
import { TodoSearch } from '../TodoSearch';
import { TodoList } from '../TodoList';
import { CreateTodoButton } from '../CreateTodoButton';
import { TodoItem } from '../TodoItem';
import { TodosLoading } from '../TodosLoading';
import { TodosError } from '../TodosError';
import { EmptyTodos } from '../EmptyTodos';
import { TodoContext } from '../TodoContext';
import { useContext } from 'react';
import { Modal } from '../Modal';
import { TodoForm } from '../TodoForm';


export const AppUi = () => {

  const {
    searchedTodos,
    completeTodo,
    deleteTodo,
    loading,
    error,
    openModal,
    setOpenModal
 } = useContext(TodoContext)

  return (
    <>

      <TodoCounter />

      <TodoSearch />
     
      <TodoList>

        {loading && (
          <>
            <TodosLoading />
            <TodosLoading />
            <TodosLoading />
          </>
        )}
        {error && <TodosError />}
        {(!loading && searchedTodos.length === 0) && <EmptyTodos />}
          { searchedTodos.map(todo => (
            <TodoItem
              key={ todo.text }
              text={todo.text}
              completed={ todo.completed }
              onComplete={ () => completeTodo(todo.text) }
              onDelete={ () => deleteTodo(todo.text) }
            />
          ))}
      
      </TodoList>
      
    <CreateTodoButton setOpenModal={ setOpenModal }/>

    {openModal && (
      <Modal>
        <TodoForm />
      </Modal>
    )}

    </>
  )
}
