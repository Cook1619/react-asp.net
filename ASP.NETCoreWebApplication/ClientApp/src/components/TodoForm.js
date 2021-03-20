import React from "react";
import Paper from "@material-ui/core/Paper";
import TextField from "@material-ui/core/TextField";
import useInputState from "../CustomHooks/UseInputState";
import { Consumer } from "../Context";

export default function TodoForm() {
    const [value, handleChange, reset] = useInputState("");
    return (
        <Paper style={{ margin: "1rem 0", padding: "0 1rem" }}>
            <Consumer>
                {({ actions }) => (
                    <form
                        onSubmit={(e) => {
                            e.preventDefault();
                            actions.addTodo(value);
                            reset();
                        }}
                    >
                        <TextField
                            value={value}
                            onChange={handleChange}
                            margin="normal"
                            label="Add New Todo"
                            fullWidth
                        />
                    </form>
                )}
            </Consumer>
        </Paper>
    );
}