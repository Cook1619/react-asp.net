import React from "react";
import useInputState from "../CustomHooks/UseInputState";
import TextField from "@material-ui/core/TextField";
import Button from "@material-ui/core/Button";
import { Consumer } from "../Context";

export default function EditTodo({ id, task, toggle }) {
    const [value, handleChange, reset] = useInputState(task);
    return (
        <Consumer>
            {({ actions }) => (
                <>
                    <TextField
                        margin="normal"
                        value={value}
                        onChange={handleChange}
                        fullWidth
                        autoFocus
                    />
                    <Button
                        variant="contained"
                        color="secondary"
                        style={{ margin: "1rem" }}
                        onClick={(e) => {
                            e.preventDefault();
                            actions.editTodo(id, value);
                            reset();
                            toggle();
                        }}
                    >
                        Save
                    </Button>
                </>
            )}
        </Consumer>
    );
}