import { useContext } from "react";
import { createContext } from "react";

export const ToDoContext = createContext({
    toDos: [
        {
            id: 1,
            todo: "",
            completed: false,

        },
    ],

    addTodo: (todo) =>{},

    updateTodo: (todo, id) => {},

    deleteTodo: (id) => {},

    completeTodo: (id) => {},

})

export const ToDoProvider = ToDoContext.Provider

export const useTodo = () => {
    return (useContext(ToDoContext))
}