import { Dispatch, SetStateAction, useState } from "react"
 import init, { cal } from "./wasm-cal/pkg/hello_wasm";

type Props = {
  setCount: Dispatch<SetStateAction<number>>
  setIsProccesing: Dispatch<SetStateAction<boolean>>
  limit:number
}
let startTime = 0
export const CalOnWasmBuiltRust = (props: Props) => {
  const [time, setTime] = useState(0)
  const onClickHandler = () => {
    props.setIsProccesing(true)
    startTime = new Date().getTime();
    init().then(() => {
      const res = cal(props.limit)
      props.setCount(res)
      setTime(new Date().getTime() - startTime)
      props.setIsProccesing(false)
    })

  }

  return (
    <>
      <button onClick={() => { 
          onClickHandler()
        }}>素数をRustからビルドしたWasmでカウント
      </button>
      処理時間: {time/1000}秒
    </>
  )
}