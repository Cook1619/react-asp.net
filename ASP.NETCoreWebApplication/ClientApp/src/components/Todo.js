
import React from "react";
import useToggle from "../CustomHooks/useToggle";
import EditTodo from "./EditTodo";
import ListItem from "@material-ui/core/ListItem";
import ListItemText from "@material-ui/core/ListItemText";
import Checkbox from "@material-ui/core/Checkbox";
import IconButton from "@material-ui/core/IconButton";
import DeleteIcon from "@material-ui/icons/Delete";
import EditIcon from "@material-ui/icons/Edit";
import ListItemSecondaryAction from "@material-ui/core/ListItemSecondaryAction";
import { Consumer } from "../Context";

export default function Todo({ id, task, completed }) {
    const [isEditing, toggle] = useToggle();
    return (
        <Consumer>
            {({ actions }) => (
                <ListItem style={{ height: "64px" }}>
                    {isEditing ? (
                        <EditTodo id={id} task={task} toggle={toggle} />
                    ) : (
                        <>
                            <Checkbox
                                checked={completed}
                                tabIndex={-1}
                                onClick={() => actions.toggleTodo(id)}
                            />
                            <ListItemText
                                style={{ textDecoration: completed ? "line-through" : "none" }}
                            >
                                {task}
                            </ListItemText>
                            <ListItemSecondaryAction>
                                <IconButton
                                    aria-label="Delete"
                                    onClick={() => actions.removeTodo(id)}
                                >
                                    <DeleteIcon />
                                </IconButton>
                                <IconButton aria-label="Edit" onClick={toggle}>
                                    <EditIcon />
                                </IconButton>
                            </ListItemSecondaryAction>
                        </>
                    )}
                </ListItem>
            )}
        </Consumer>
    );
}