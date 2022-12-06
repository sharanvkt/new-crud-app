import React, { useState } from 'react'
import {useNavigate, useParams} from "react-router-dom"
import {useSelector, useDispatch} from "react-redux"
import Button from '../../components/Button'
import TextField from '../../components/TextField'
import { editUser } from './UserSlice'


const EditUser = () => {
    const params= useParams()
    const dispatch = useDispatch();
    console.log(params.id);
    const users = useSelector(store=>store.users)
    const navigate = useNavigate();
    const existingUser= users.filter(user =>user.id === params.id)
    const {name, email}= existingUser[0]
    const [values, setValues] = useState({
        name,
        email
    })

    const handleEdituser =()=>{
        setValues({name:'', email:''})
        dispatch(editUser({
            id: params.id,
            name: values.name,
            email: values.email
        }))
        navigate('/')
    }

  return (
    <div className="mt-10 max-w-xl mx-auto">
        <TextField 
            label="Name"
            value={values.name}
            onChange={(e)=>setValues({...values, name: e.target.value})}
            inputProps={{type:"text", placeholder: "sharan"}}
        />
        <br/>
        <TextField 
            label="Email"
            value={values.email}
            onChange={(e)=>setValues({...values, email: e.target.value})}
            inputProps={{type:"email", placeholder: "sharan@gmail.com   "}}
        />
        <Button onClick={handleEdituser}>Edit</Button>
    </div>
  )
}

export default EditUser