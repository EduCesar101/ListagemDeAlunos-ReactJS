import { useContext } from "react";
import { UserContext } from "../../context/user";
import { Nome } from "../Nome"

export function Alunos(){
    const {qtdAlunos, addAluno} = useContext(UserContext)

    return(
        <div>
            <h3>Quantidade de alunos: {qtdAlunos}</h3>
            <button onClick={ () => addAluno('João')}>
                Adicionar Aluno
            </button>
            <Nome />
        </div>
    )
}