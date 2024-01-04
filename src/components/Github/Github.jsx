import { useState } from "react";
import Personlist from "../Personlist/Personlist";
import Search from "../Search/Search";
import PersonDetails from "../PersonDetails/PersonDetails";

function Github()
{
    const [searchterm,setsearchterm]=useState('');
    return(
        <>
        <Search updatesearch={setsearchterm}/>
        {(!searchterm)?<Personlist/>:<PersonDetails key={searchterm} personname={searchterm}/>}
        </>
    )


}

export default Github;