import React,{useState,useEffect} from 'react'
import {Form, Modal,Input, Select, message, Table} from 'antd'
import {UnorderedListOutlined,AreaChartOutlined} from '@ant-design/icons'
import { Layout } from '../components/Layout/Layout'
import axios from 'axios'
import Analytics from '../components/Analytics'

export const HomePage = () => {

  const [showModal,setModal] = useState(false)
  const [ allTransactions,setAllTransactions] = useState([])
  const [viewData,setViewData] = useState('table')

  //table data
  const columns = [
    {
      title:'Amount',
      dataIndex:'amount',
    },
    {
      title:'Date',
      dataIndex:'date',
    },
    {
      title:'Type',
      dataIndex:'type',
    },
    {
      title:'Category',
      dataIndex:'category',
    },
    {
      title:'Description',
      dataIndex:'description',
    },
    {
      title:'Action',
      
    },
  
  ]
  //get trancsactions
  const getAllTransactions = async () =>{
    try {
      const user = JSON.parse(localStorage.getItem('user'))
      const res = await axios.post('/transaction/get-transaction',{userId:user._id})
      setAllTransactions(res.data)
      console.log(res.data)
    } catch (error) {
      console.log(error)
      message.error('fetech issue')
    }
  }
  //useEffect
  useEffect(() => {
    getAllTransactions()
  },[])

  
  const handleSubmit= async(values)=>{
    try {
      const user = JSON.parse(localStorage.getItem('user'))
      const {userData} = await axios.post('/transaction/add-transaction', {...values, userId:user._id})
      message.success("Transaction added succcessfully")
      localStorage.setItem('tranc',JSON.stringify({...userData}))

    } catch (error) {
      message.error('Failed to add transaction')
    }
  }
  return (
    <div>
        <Layout>
         <div className='filter'>
          <div>{viewData === 'table'?<h3>All Transactions</h3>:<h3>Summary</h3>}</div>
          <div className='switch-icon'>
              <UnorderedListOutlined className={`mx-4 ${viewData === 'table' ? 'active-icon' : 'inactive-icon'}`} onClick={() => setViewData('table')}/>
              <AreaChartOutlined className={`mx-4 ${viewData === 'analytics' ? 'active-icon' : 'inactive-icon'}`} onClick={()=> setViewData('analytics')}/>
            </div>
          <div>
            
            <button className='btn btn-primary' onClick={()=> setModal(true)}>Add New</button>
          </div>
         </div>
         <div className='content'>
          {viewData === 'table' ?
           <Table columns={columns} dataSource={allTransactions}/>
          : <Analytics allTransactions={allTransactions}/>
          }
          
         </div>
         <Modal title="Add Transaction" open={showModal} onCancel={() => setModal(false)} footer={false}>
          <Form layout='vertical' onFinish={handleSubmit}>
            <Form.Item label='Amount' name= 'amount'>
              <Input type='text'/>
            </Form.Item>
            <Form.Item label='Type' name= 'type'>
              <Select>
                <Select.Option value='expense'>Expense</Select.Option>
                <Select.Option value='income'>Income</Select.Option>
              </Select>
            </Form.Item>
            <Form.Item label='Category' name= 'category'>
              <Select>
                <Select.Option value='salary'>Salary</Select.Option>
                <Select.Option value='rent'>Rent</Select.Option>
                <Select.Option value='bills'>Bills</Select.Option>
                <Select.Option value='food'>Food</Select.Option>
                <Select.Option value='movie'>Movie</Select.Option>
                <Select.Option value='medical'>Medical</Select.Option>
              </Select>
            </Form.Item>
            <Form.Item label='Date' name= 'date'>
              <Input type='date'/>
            </Form.Item>
            <Form.Item label='Description' name= 'description'>
              <Input type='text'/>
            </Form.Item>
            <div className='d-flex justify-content-end'>
              <button type='submit' className='btn btn-primary'>Save</button>
            </div>
          </Form>
         </Modal>
        </Layout>
       
    </div>
  )
}
