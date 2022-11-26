import React from 'react'
import Adduser from './Adduser'
import {UserCirclePlus,Printer,Notepad,CircleHalfTilt} from 'phosphor-react'
import SaveSale from './SaveSale'
import Cash from './Cash'
import LastRecept from './LastRecept'
import Coupon from './Coupon'
import Note from './Note'
import Discount from './Discount'
const Services = () => {
  return (
    <>
        <Adduser Icon={UserCirclePlus}/>
        <SaveSale />
        <Cash />
        <LastRecept Icon={Printer} />
        <Coupon />
        <Note Icon={Notepad}/>
        <Discount Icon={CircleHalfTilt} />
    </>
  )
}

export default Services