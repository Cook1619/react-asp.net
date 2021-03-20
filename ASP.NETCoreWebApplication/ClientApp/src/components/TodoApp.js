import React, { useEffect } from "react";
import useTodoState from "../CustomHooks/UseTodoState";
import Typography from "@material-ui/core/Typography";
import Paper from "@material-ui/core/Paper";
import Appbar from "@material-ui/core/Appbar";
import Toolbar from "@material-ui/core/Toolbar";
import Grid from "@material-ui/core/Grid";
import TodoList from "./TodoList";
import TodoForm from "./TodoForm";
import { Provider } from "../Context";

const TodoApp = () => {
    const initialTodos = JSON.parse(window.localStorage.getItem("todos") || "[]");
    const { todos, addTodo, removeTodo, toggleTodo, editTodo } = useTodoState(
        initialTodos
    );

    useEffect(() => {
        window.localStorage.setItem("todos", JSON.stringify(todos));
    }, [todos]);

    return (
        <Provider
            value={{
                todos,
                actions: {
                    addTodo,
                    removeTodo,
                    toggleTodo,
                    editTodo,
                },
            }}
        >
            <Paper
                style={{
                    padding: 0,
                    margin: 0,
                    height: "100vh",
                    backgroundColor: "#fafafa",
                }}
                elevation={0}
            >
                <Appbar color="secondary" position="static" style={{ height: "64px" }}>
                    <Toolbar>
                        <Typography color="inherit">LIST WITH HOOKS</Typography>
                    </Toolbar>
                </Appbar>
                <Grid container justify="center" style={{ marginTop: "2rem" }}>
                    <Grid item xs={11} md={8} lg={4}>
                        <TodoForm />
                        <TodoList />
                    </Grid>
                </Grid>
            </Paper>
        </Provider>
    );
};

export default TodoApp;