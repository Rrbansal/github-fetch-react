import { Link } from "react-router-dom";
import './Person.css'

function Person({login,id,image})
{

    return(
        <>
        <Link to={`/user/${login}`}>
        <div>{login}</div>
        <img className="person-image" src={image} alt="" />
        </Link>
        </>
    )
}
export default Person;