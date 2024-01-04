import { useEffect, useState } from "react";
import axios from 'axios'
import Person from "../Person/Person";
import './Personlist.css'
function Personlist()
{
    const [personlist,setpersonlist]=useState({});
    const [isloading,setisloading]=useState(true);

    async function downloadlist()
    {
        const response=await axios.get('https://api.github.com/users');
        const person=response.data;
        const res=(person.map((p)=>
        {
            return{
                id:p.id,
                image:p.avatar_url,
                login:p.login,
                type:p.type
            }
        }))
        setpersonlist(res);
        setisloading(false);
    }

    useEffect(()=>
    {
        downloadlist();
    },[])
    return(
        <>
          <div className="person-wrapper">
            {(isloading)?'loading...':
            personlist.map((p)=><Person key={p.id} login={p.login} id={p.id} image={p.image}  />)}
            </div>
        </>
    )
}

export default Personlist;