import { createContext } from "react";

const LanguajeContext = createContext();


const LanguageProvider = ({children})=>{
    return <LanguajeContext>{children}</LanguajeContext>
}
export {LanguageProvider};
export default LanguajeContext;
