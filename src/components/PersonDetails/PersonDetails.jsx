import { useEffect, useState } from "react";
import axios from 'axios';
import { useParams } from "react-router-dom";
function PersonDetails({personname})
{


    // name it as id beacuse any other name is not working
    const {id}=useParams();

    const [persondetail,setpersondetail]=useState({});
    const [isloading,setisloading]=useState(true)
    async function downloadPersonDetails()
    {
        let response;
        if(personname)
        {
            response=await axios.get(`https://api.github.com/users/${personname}`);
        }else{
         response=await axios.get(`https://api.github.com/users/${id}`);
        }
        setpersondetail(
            {
                login:response.data.login,
                id:response.data.id,
                image:response.data.avatar_url,
                name:response.data.name,
                type:response.data.type
            }
        )
        setisloading(false);
    }
    useEffect(()=>
    {
        downloadPersonDetails();

    },[])



    return(
        <>
        <div>
            <div>NAME:{persondetail.name}</div>
            <img src={persondetail.image} alt="" />
            <div>TYPE:{persondetail.type}</div>
            <div>ID:{persondetail.id}</div>
        </div>
        </>
    )

}
export default PersonDetails;