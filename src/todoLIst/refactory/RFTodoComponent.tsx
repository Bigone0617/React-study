import React, { useState, useEffect } from "react";

interface TodoProps {
    id: string;
    title: string;
    description: string;
}

interface ChangeTodoListProps {
    removeTodoList(id: string): void;
    updateTodoList(todo: TodoProps): void;
    todo: TodoProps;
}

const RFTodoComponent: React.FC<ChangeTodoListProps> = ({ removeTodoList, updateTodoList, todo }) => {
    const [localTodo, setLocalTodo] = useState<TodoProps>(todo);

    useEffect(() => {
        setLocalTodo(todo);
    }, [todo]);

    const onChangeHandler = (e: React.ChangeEvent<HTMLInputElement>): void => {
        const { id, value } = e.target;
        setLocalTodo({
            ...localTodo,
            [id]: value
        });
    }

    const updateTodoHandler = (): void => {
        updateTodoList(localTodo);
    }

    return (
        <div>
            <input id="title" value={localTodo.title} onChange={onChangeHandler}></input>
            <input id="description" value={localTodo.description} onChange={onChangeHandler}></input>
            <button onClick={updateTodoHandler}>수정</button>
            <button onClick={() => removeTodoList(localTodo.id)}>삭제</button>
        </div>
    );
}

export default RFTodoComponent;
