import {UserButton} from "../button/button";
import { useContext } from "react";
import UserContext from "../../store/userContext";

import './usertable.scss';

const UserTable = ()=> {

    const {userList, showData} = useContext(UserContext);

    return (
        <div className='user_table'>
            <table>
                <thead>
                    <tr>
                        <th>#</th>
                        <th>First Name</th>
                        <th>Last Name</th>
                        <th>Title</th>
                        <th>Actions</th>
                    </tr>
                </thead>
                <tbody>

                    {   
                        showData && 

                        userList.map((item, index)=> 
                            <tr key={item.id}>
                                <td>{index + 1 }</td>
                                <td> <img src={item.picture} />{item.firstName}</td>
                                <td>{item.lastName}</td>
                                <td>{item.title}</td>
                                <td>
                                    <UserButton title="View Details" type="button" style="sm_" />
                                </td>
                            </tr>
                        )
                       
                    }

      
              
                </tbody>
            </table>
        </div>
    )
}

export default UserTable;