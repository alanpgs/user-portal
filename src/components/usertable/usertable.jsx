import {UserButton} from "../button/button";
import { useState, useLayoutEffect } from "react";


import './usertable.scss';

const UserTable = ()=> {

    const [userList, setUserList] = useState(null);
    const [showData, SetShowData] = useState(false);

    useLayoutEffect(()=> {

        let url_ = 'https://dummyapi.io/data/v1/user?limit=20';
    
        let fetch_ = fetch(url_, {
            method: 'GET',
            headers: {
                'app-id': '62397bb1bb759e527cacb6f1',
            },
        })
        .then((res) => {return res.json()})
        .then((data)=> {
            setUserList(data.data)
            SetShowData(true)
        });

    }, [])

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