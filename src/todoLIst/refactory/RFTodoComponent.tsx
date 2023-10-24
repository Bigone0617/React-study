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

const TodoComponent: React.FC<ChangeTodoListProps> = ({ removeTodoList, updateTodoList, todo }) => {
    const [localTodo, setLocalTodo] = useState<TodoProps>(todo);
    const [isEditing, setIsEditing] = useState(false);

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

    const toggleEdit = (): void => {
        setIsEditing(!isEditing);
    }

    const updateTodoHandler = (): void => {
        updateTodoList(localTodo);
        toggleEdit();
    }

    return (
        <div>
            {isEditing ? (
                <>
                    <input id="title" value={localTodo.title} onChange={onChangeHandler}></input>
                    <input id="description" value={localTodo.description} onChange={onChangeHandler}></input>
                    <button onClick={updateTodoHandler}>수정</button>
                </>
            ) : (
                <>
                    <span>{localTodo.title}</span>
                    <span>{localTodo.description}</span>
                    <button onClick={toggleEdit}>수정</button>
                </>
            )}
            <button onClick={() => removeTodoList(localTodo.id)}>삭제</button>
        </div>
    );
}

export default TodoComponent;
