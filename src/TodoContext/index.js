import { createContext, useState } from "react";
import { useLocalStorage } from "./useLocalStorage";

const TodoContext = createContext();

function TodoProvider({ children }) {
const {
    item: todos,
    saveItems: saveTodos,
    loading,
    error
  } = useLocalStorage('TODOS_V1', []);
  const [searchValue, setSearchValue] = useState('');
  const [openModal, setOpenModal] = useState(false);

  const completedTodos = todos.filter( 
    todo => !!todo.completed
  ).length;
  
  const totalTodos = todos.length;

  // console.log('Log 1');

  // useEffect(() => {
  //   console.log('Looooog 2');
  
  // }); // Sin el 2° atributo se ejecuta siempre

  // useEffect(() => {
  //   console.log('Looooog 2');
  
  // }, []); // Con el 2° atributo vacio no se ejecuta, solo cundo se refresca la pagina
  
  // useEffect(() => {
  //   console.log('Looooog 2');
  
  // }, [totalTodos]); // Con el 2° atributo no se ejecuta, solo cundo se refresca la pagina
  
  // console.log('Log 3');
  

  const searchedTodos = todos.filter(
    (todo) => {
      return todo.text.toLowerCase().includes(searchValue.toLowerCase() );
    }
  );

  const addTodo = (text) => {
    const newTodos = [...todos];

    newTodos.push({
      text,
      completed: false,
    })
    
    saveTodos(newTodos);
  }

  const completeTodo = (text) => {
    const newTodos = [...todos];
    const todoIndex = newTodos.findIndex(
      (todo) => todo.text === text
    );
    
    if (newTodos[todoIndex].completed === true ) {

      newTodos[todoIndex].completed = false
    } else {
      newTodos[todoIndex].completed = true

    }
    saveTodos(newTodos);
  }

  const deleteTodo = (text) => {
    const newTodos = [...todos];
    const todoIndex = newTodos.findIndex(
      (todo) => todo.text === text
    );
    newTodos.splice(todoIndex, 1);
    saveTodos(newTodos);
  }

    return (
    <TodoContext.Provider value={{
        completedTodos,
        totalTodos,
        searchValue,
        setSearchValue,
        searchedTodos,
        completeTodo,
        deleteTodo,
        loading,
        error,
        openModal,
        setOpenModal,
        addTodo
    }}>
        { children }
    </TodoContext.Provider>

    )
}


export { TodoContext, TodoProvider };