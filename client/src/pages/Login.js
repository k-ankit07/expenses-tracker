import React, { useEffect } from 'react'
import{Form,Input, message } from "antd"
import {Card} from 'antd'
import { Link,useNavigate } from 'react-router-dom'
import axios from 'axios'

export const Login = () => {
    const navigate = useNavigate()
    const submitHandle= async(values)=>{
       try {
            const {data} = await axios.post('api/v1/users/login',values)
            message.success('Login successfull')
            localStorage.setItem('user',JSON.stringify({...data.user,password:''}))
            navigate('/')
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
        <h1>Login page</h1>
            <Form.Item label="Email" name='email'>
                <Input type='email'/>
            </Form.Item>
            <Form.Item label="Password" name='password'>
                <Input type='password'/>
            </Form.Item>
            <div className='d-flex justify-content-between'>
                <Link to='/register'>Register</Link>
                <button className='btn btn-primary'>Login</button>
            </div>
        </Form>
    </Card>
      
    </div>
    </>
  )
}
