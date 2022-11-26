import React, { useState, useEffect } from 'react'
import '../content/content.css'
import Element from '../posElements/Element'
import Producut from '../posElements/Producut'
import AddPro from '../service/AddPro'
import Services from '../service/services'
import PayElements from '../payelement/PayElements'
import { useSearchParams } from 'react-router-dom'
const Content = ({ elements }) => {
  const [random, setrandom] = useState([])
  const [params] = useSearchParams()
  const q = params.get('query')
  const category = []
  elements && elements.map(element => {
    if (category.includes(element.category)) {
    }
    else {
      category.push(element.category)

    }
  })
  useEffect(() => {
    randompro()

  }, [elements])

  const randompro = () => {

    const randompro = []
    for (let i = 0; i < 14; i++) {
      if (elements) {
        const product = elements[Math.floor(Math.random() * elements.length)]
        if (randompro.includes(product)) {
          console.log('conflect')
        }
        else {
          randompro.push(product)
        }
      }
    }
    console.log('ran', randompro)
    setrandom(randompro)
  }

  return (
    <div className='content' >
      <div className='product_type'>
        <AddPro />
        {category && category.map(element => {
          return <Element category={element} key={[element]} />
        })}
      </div>

      <div className='products'>

        {
          q ? elements && elements.map(element => {
            if (element.category === q) {
              return <Producut element={element} key={element.id} />
            }

          })

            :
            random && random.map(element => {


              return <Producut element={element} key={element.id} />
            })
        }

      </div>
      <div className='service'>
        <Services />
      </div>
      <div className='pay'>
        <PayElements />
      </div>

    </div>
  )
}

export default Content