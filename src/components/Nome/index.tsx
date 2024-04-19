import { useContext } from "react"
import { UserContext } from "../../context/user"

export function Nome(){
    const { aluno } = useContext(UserContext)

    return(
        <div>
            <strong>Alunos: {aluno} <br /></strong>
        </div>
    )
}