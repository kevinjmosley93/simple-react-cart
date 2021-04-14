import React from 'react'
import { MyComponent } from './components/MyComponent'

export const App = () => {
  return (
    <div className='app'>
      <h1>This is app</h1>
      <MyComponent myProp='This is MyProp' />
    </div>
  )
}
