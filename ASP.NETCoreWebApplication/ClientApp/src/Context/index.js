import React from "react";

const TodoContext = React.createContext();

export const Provider = TodoContext.Provider;
export const Consumer = TodoContext.Consumer;