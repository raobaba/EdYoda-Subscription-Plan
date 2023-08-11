import React from 'react'
import '../Styles/Home.css'
import Description from './Description';
import Subscription from './Subscription';
export default function Home() {
  return (
      <div className='home'>
          <div className="left">
              <Description/>
          </div>
          <div className="right">
               <Subscription/>
          </div>
      </div>
  )
}
