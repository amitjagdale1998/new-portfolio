import { Button, Flex } from 'antd'
import React from 'react'

export default function Sidebar() {
  return (
    <div className="max-w-[400px] bg-blue-300 h-screen    flex flex-col   ">
        <div  className='flex justify-center m-5'>
        <img 
    src="https://images.pexels.com/photos/674010/pexels-photo-674010.jpeg?auto=compress&cs=tinysrgb&w=600" 
    className="rounded-full h-[200px] w-[200px]  justify-center" 
    alt="Profile"
  />
        </div>
  
  <hr className="text-blue-300 bg-white w-full h-[2px]  " />
  <div className='p-5   items-center align-middle'>
  <Flex 
  gap="small" 
  className='flex flex-col justify-center' 
  style={{ flexDirection: 'column', alignItems: 'center', width:'100%',borderRadius:'0px'}}
>
  <Button type="primary" className='w-[95%] ' style={{height:'40px'}}>Primary Button</Button>
  <Button type="primary" className='w-[95%]'>Primary Button</Button>
  <Button type="primary" className='w-[95%]'>Primary Button</Button>
  <Button type="primary" className='w-[95%]'>Primary Button</Button>
  <Button type="primary" className='w-[95%]'>Primary Button</Button>
</Flex>

  </div>
    
  
</div>

  )
}
