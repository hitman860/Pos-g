import React from 'react'
import { Button, Result } from 'antd';
import {useNavigate} from 'react-router-dom'
const Page404 = () => {
    const navegate=useNavigate()
  return (
    <div>
   
      <Result
        status="404"
        title="404"
        subTitle="Sorry, the page you visited does not exist."
        extra={<Button type="primary" onClick={()=>navegate('/home')} >Back Home</Button>}
      />
 
   </div>
  )
}

export default Page404