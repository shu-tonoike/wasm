import { useState } from "react"

const colors = ["red","green","blue"]

export const ColorButton = () => {
  const [colorsIndex,setColorsIndex] = useState(0)
  return (<button style={{color: colors[colorsIndex]}}  onClick={() => {
        setColorsIndex((prev)=>prev === 2 ? 0 : prev + 1)
      }}>
        押すと色が切り替わる
  </button>
  )
}