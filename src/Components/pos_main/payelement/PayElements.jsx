import React from 'react'
import Changeuser from './Changeuser'
import './Pay.css'
import Lockuser from '../payelement/Lockuser'
import Pay from '../payelement/Pay'
import Sale from '../payelement/Sale'
import {Trash,LockKey,Users} from 'phosphor-react'
const PayElements = () => {
  return (
    <>
<Changeuser Icon={Users} />
<Lockuser  Icon={LockKey} />
<Sale Icon={Trash} />
<Pay />
    </>
  )
}

export default PayElements