import { Dispatch, SetStateAction, useState } from "react"
import { cal } from "./cal"

type Props = {
  setCount: Dispatch<SetStateAction<number>>
  setIsProccesing: Dispatch<SetStateAction<boolean>>
  limit:number
}
export const CalOnMainThread = (props: Props) => {
  const [time,setTime] = useState(0)
  const onClickHandler = () => {
    props.setIsProccesing(true)
    setTimeout(() => {
      const startTime = new Date().getTime()
      const res = cal(props.limit)
      props.setCount(res)
      const endTime = new Date().getTime()
      setTime(endTime - startTime)
      props.setIsProccesing(false)
    },0)
  }
  return (
    <>
      <button onClick={() => { 
          onClickHandler()
        }}>素数をJSのメインスレッドでカウント
      </button>
      処理時間: {time/1000}秒
    </>

  )
}