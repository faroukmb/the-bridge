/* eslint-disable react-refresh/only-export-components */
/* eslint-disable react/prop-types */
import { createContext, useState } from "react";
import {useNavigate} from "react-router-dom"
export const context = createContext();
const ContextProvider = ({ children }) => {
  const [courses, setCourses] = useState([]);
  const navigate = useNavigate();
  const backendurl = import.meta.env.VITE_BACKEND_URL;
  return (
    <context.Provider
      value={{
        backendurl,
        courses,
        setCourses,
        navigate
      }}
    >
      {children}
    </context.Provider>
  );
};
export default ContextProvider;
