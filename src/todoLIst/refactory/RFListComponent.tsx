import React, { useState } from "react";
import { v4 as uuidv4 } from 'uuid';
import RFTodoComponent from "./RFTodoComponent";

interface TodoProps {
    id: string;
    title: string;
    description: string;
}

const RFListComponent: React.FC = () => {
    const [todoList, setTodoList] = useState<TodoProps[]>([
        {
            id: uuidv4(),
            title: '공부하기',
            description: 'react component'
        },
        {
            id: uuidv4(),
            title: '운동하기',
            description: '푸시업 100개'
        },
    ]);

    const addTodoList = (): void => {
        const newTodo: TodoProps = {
            id: uuidv4(),
            title: '',
            description: ''
        };

        setTodoList([...todoList, newTodo]);
    }

    const removeTodoList = (id: string): void => {
        const newTodoList = todoList.filter((todo) => todo.id !== id);
        setTodoList(newTodoList);
    }

    const updateTodoList = (updatedTodo: TodoProps): void => {
        const updatedList = todoList.map((todo) => (todo.id === updatedTodo.id ? updatedTodo : todo));
        setTodoList(updatedList);
    }

    return (
        <>
            {todoList.map((todo) => (
                <RFTodoComponent
                    key={todo.id}
                    removeTodoList={removeTodoList}
                    updateTodoList={updateTodoList}
                    todo={todo}
                />
            ))}
            <button onClick={addTodoList}>Todo 추가하기</button>
        </>
    );
}

export default RFListComponent;
