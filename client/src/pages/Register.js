import React from 'react'
import{Form,Input, message,Card } from "antd"
import { Link, useNavigate } from 'react-router-dom'
import axios from 'axios'
import { useEffect } from 'react'

export const Register = () => {

    const navigate = useNavigate()
    const submitHandle= async(values)=>{
        try {
            await axios.post('api/v1/users/register', values)
            message.success('Registeration Successfull')
            navigate('/login')
        } catch (error) {
            message.error('Invalid')
        }
    }
//loged in
useEffect(() =>{
    if(localStorage.getItem('user')){
        navigate('/')
    }
},[navigate])

  return (
    <>
    
    <div className='register'>
    <Card>
        <Form layout='vertical' onFinish={submitHandle}>
        <h1>Register page</h1>
            <Form.Item label="Name" name='name'>
                <Input/>
            </Form.Item>
            <Form.Item label="Email" name='email'>
                <Input type='email'/>
            </Form.Item>
            <Form.Item label="Password" name='password'>
                <Input type='password'/>
            </Form.Item>
            <div className='d-flex justify-content-between'>
                <Link to='/login'>Login</Link>
                <button className='btn btn-primary'>Register</button>
            </div>
        </Form>
        </Card>
    </div>
  
    </>
  )
}
