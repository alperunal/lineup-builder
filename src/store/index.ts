import { createContext } from 'react';
import { languageType, themeType } from 'constants/types';

interface IContext {
    language: string;
    theme: string;
    isLoading: boolean;
    changeLanguage: (value: languageType) => void;
    changeTheme: (value: themeType) => void;
    changeLoading: (state: boolean) => void;
}

const StoreContext = createContext<IContext | undefined>(undefined);
export default StoreContext;
