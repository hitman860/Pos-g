import React from 'react'
import Adduser from './Adduser'
import { UserCirclePlus, Printer, Notepad, CircleHalfTilt } from 'phosphor-react'
import SaveSale from './SaveSale'
import Cash from './Cash'
import LastRecept from './LastRecept'
import Coupon from './Coupon'
import Note from './Note'
import Discount from './Discount'
import { useState } from 'react'
import { Modal } from './Modal'

const Services = () => {
  const [openModl, setopenModl] = useState(false)
  const id = Math.floor(Math.random()*1000)

  return (
    <>
      <Adduser Icon={UserCirclePlus} />
      <SaveSale openmodl={setopenModl} />
      <Cash />
      <LastRecept Icon={Printer} />
      <Coupon />
      <Note Icon={Notepad} />
      <Discount Icon={CircleHalfTilt} />
      {openModl && <Modal closeModl={setopenModl} id={id} />}
    </>
  )
}

export default Services