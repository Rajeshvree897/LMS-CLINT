import React, { useState, useCallback, useEffect } from 'react';
import axios from 'axios';
import { Link } from "react-router-dom";
import { MDBDataTable } from "mdbreact";
import DHeader from './DHeader';
import { useNavigate } from "react-router-dom";

export default function Users() {
    const navigate = useNavigate();
    const apiData = {
        columns: [
          {
            label: "Id",
            field: "_id",
            sort: "asc",
            width: 150,
          },
          {
            label: "First Name",
            field: "firstname",
            sort: "asc",
            width: 150,
          },
       
          {
            label: "Last Name",
            field: "lastname",
            sort: "asc",
            width: 270,
          },
          {
            label: "Email",
            field: "email",
            sort: "asc",
            width: 200,
          },
          {
            label: "Role",
            field: "role",
            sort: "asc",
            width: 200,
          },
        ]
      }

    const ngrok_url = process.env.REACT_APP_NGROK_URL;
    const accessToken = localStorage.getItem('accessToken');
    const [userData, setUserdata] = useState([]);   

    useEffect(() => {
        axios({
            method: "get",
            url: 'http://localhost:8080/api/users',
            headers: {
                "Accept": "Application/json",
                "Content-Type": "Application/json",
                "Authorization": accessToken
            },
        })
            .then((response => {
                let userArr = [];
                let newArray = {};
                response.data.map((items, i) => {
                    userArr.push({

                             _id:    items._id,
                        firstname:       (
                                         <Link to="/UserProfile"
                                         state={{ _id: items._id }}
                                         >
                                         {items.firstname}
                                         
                                         </Link>
                                         ),
                        lastname:   items.lastname,
                           email:   items.email,
                            role:   items.role 
                    });
                })
                newArray["rows"] =      userArr;
                newArray["columns"] =   apiData["columns"];
                setUserdata(newArray)
            }))
            .catch(err => {
              
            })
    }, [])
  return (
    <>
        <DHeader />
        <main id="main" class="main">
            <p class="text-center p-5">
            <MDBDataTable entries={50}  striped bordered small data={userData} />

            </p>
        </main>
        </>
    )
}
