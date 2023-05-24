import { createContext } from "react";

interface ContextProviderProps {
	name?: string;
}

interface ContextProps {
	children: React.ReactNode;
	name?: string;
}

export const ContextProvider = createContext<
	undefined | ContextProviderProps
>(undefined);

export const Context = ({ children }: ContextProps) => {
	const name = "silvio";

    const gamesObject = [
        {
            
        }
    ]

	return (
		<ContextProvider.Provider value={{ name }}>
			{children}
		</ContextProvider.Provider>
	);
};
