import { createContext, useContext } from "react";

export const SelectBoxContext = createContext({});

export const useSelectBoxContext = () => useContext(SelectBoxContext);
