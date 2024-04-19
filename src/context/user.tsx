import { ReactNode, createContext, useState } from "react";

interface UserProviderProps{
    children: ReactNode;
}

interface UserContextData{
    aluno: string[];
    qtdAlunos: number;
    addAluno: (nome: string) => void;
}

export const UserContext = createContext({} as UserContextData);

export function UserProvider({children}: UserProviderProps){
    const [aluno, setAluno] = useState<string[]>([]);
    const qtdAlunos = aluno.length;

    
    function addAluno(nome: string){
        setAluno([...aluno, nome])
    }

    return(
        <UserContext.Provider value={{ aluno, qtdAlunos, addAluno }}>
            {children}
        </UserContext.Provider>
    )
}

export default UserProvider;