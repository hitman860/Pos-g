import React from 'react'
import  './testpage.css'
//import useTesti from '../Components/hooks/testi'
import useCatagory from '../Components/hooks/testCatagory'
import {Form,Input,Button,Checkbox,Select, DatePicker} from 'antd'
const Testpage = () => {

  //   const items=useCatagory()
    
  // return (
  //   <div>{ items && items.map(item=>{
      
  //       return  item
  //   })
        
  //       }</div>
  // )
  return(
    <div className='formpage'>
      <Form 
     labelCol={{span:10}}
     autoComplete='off'
     
    >
     <Form.Item
      name='full Name'
       label='Full Name'
       rules={[{required:true,
       message:'pls inter name'},
       {whitespace:true},
       {min:3}]}
       hasFeedback > 
      <Input  />
     </Form.Item>
     <Form.Item 
     name='email' 
     label='Email'
     rules={[{required:true,message:'pls inter email'},
     {type:'email',message:' invalid email'}]}
     hasFeedback > 
      <Input />
     </Form.Item>
     <Form.Item 
     name='password'
      label='Password'
      rules={[{required:true,message:'inter password'},{min:6}]}
      hasFeedback > 
      <Input.Password />
     </Form.Item>
     <Form.Item name='confirmpassword' label='Confirm Password' > 
      <Input.Password />
     </Form.Item>
     <Form.Item name='gender' label='gender' >
      <Select placeholder='select gender'>
        <Select.Option value='male'>Male</Select.Option>
        <Select.Option value='female'>Female</Select.Option>
      </Select>
     </Form.Item>
     <Form.Item name='dob' label='Date Of Birth'>
      <DatePicker 
      style={{width:'100%'}} 
      picker='date' placeholder='chose Date' />
     </Form.Item>
     <Form.Item  wrapperCol={{span:24}} >
      <Button 
      block
      type='primary' 
      htmlType='submit'>
        register
      </Button>
     </Form.Item>
      </Form>
    </div>
  )
}

export default Testpage