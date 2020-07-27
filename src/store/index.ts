import { createContext } from 'react';

interface IContext {
    language: string;
    theme: string;
    changeLanguage: (value: string) => void;
    changeTheme: (value: string) => void;
}

const StoreContext = createContext<IContext | undefined>(undefined);
export default StoreContext;
