import React from 'react'
import {SketchPicker} from 'react-color'
import { useSnapshot } from 'valtio'
import state from '../store'
import { color } from 'framer-motion'

const ColorPicker = () => {
  const snap=useSnapshot(state);
  return (
    <div className='absolute left-full ml-3'>
      <SketchPicker 
      color={snap.color}
      disableAlpha
      presetColors={
        [
          '#FF1493',
'#32CD32',
'#6495ED',
'#FFD700',
'#8A2BE2',
'#00FFFF',
'#800000',
'#FF4500',
'#00FF00',
'#1E90FF'         
        ]
      }
      onChange={(color)=>state.color=color.hex}/>

    </div>
  )
}

export default ColorPicker