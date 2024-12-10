import { useEffect, useState } from "react";

export function useLocalStorage(itemName, initialValue) {

  const [item, setItem] = useState(initialValue);
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState(false);
  
  
  useEffect(() => {
     setTimeout(() => {
        try {
          const localStorageItems = localStorage.getItem(itemName);
        let parsedItems

        if (!localStorageItems) {
          localStorage.setItem(itemName, JSON.stringify(initialValue));
          parsedItems = initialValue;
        } else {
          parsedItems = JSON.parse(localStorageItems);
          setItem(parsedItems);
        }

        setLoading(false);
      } catch (error) {
        console.log(error);
        setLoading(false);
          setError(true)
        }
     }, 2000);
    },[]);
    
    
  
    const saveItems = (newItems) => {
      localStorage.setItem(itemName, JSON.stringify(newItems));
      setItem(newItems);
    };
  
    return {
      item,
      saveItems,
      loading,
      error
    }
  }



// const defaultTodos = [
//   {text: 'Cortar cebolla', completed: true },
//   {text: 'Tomar curso de React', completed: false },
//   {text: 'Hacerme rico', completed: false },
//   {text: 'Usar estados derivados', completed: true },
//   {text: 'LALALALA', completed: false },
// ]

// localStorage.setItem('TODOS_V1', JSON.stringify(defaultTodos));
// localStorage.removeItem('TODOS_V1');