import {Routes,Route} from 'react-router-dom'
import Personlist from '../components/Personlist/Personlist'
import PersonDetails from '../components/PersonDetails/PersonDetails'
import Github from '../components/Github/Github'

function CustomRoutes()
{
    return(
        <Routes>
            <Route path="/" element={<Github/>}/>
            <Route path="/user/:id" element={<PersonDetails/>}/>
        </Routes>
    )


}
export default CustomRoutes