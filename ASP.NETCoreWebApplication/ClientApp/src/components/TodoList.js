import React from "react";
import Paper from "@material-ui/core/Paper";
import List from "@material-ui/core/List";
import Divider from "@material-ui/core/Divider";

import { Consumer } from "../Context";
import Todo from "./Todo";

export default function TodoList() {
    return (
        <Consumer>
            {({ todos }) => {
                if (todos.length)
                    return (
                        <Paper>
                            <List>
                                {todos.map((todo, index) => (
                                    <React.Fragment key={todo.id}>
                                        <Todo
                                            task={todo.task}
                                            id={todo.id}
                                            completed={todo.completed}
                                        />
                                        {index < todos.length - 1 && <Divider />}
                                    </React.Fragment>
                                ))}
                            </List>
                        </Paper>
                    );
                return null;
            }}
        </Consumer>
    );
}