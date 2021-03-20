import { useState } from "react";

const useToggle = (initalVal = false) => {
    //call useState
    const [state, setState] = useState(initalVal);
    const toggle = () => {
        setState(!state);
    };
    //return piece of state and the function which toggles it
    return [state, toggle];
};

export default useToggle;