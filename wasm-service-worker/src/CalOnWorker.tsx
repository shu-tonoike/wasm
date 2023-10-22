import { Dispatch, SetStateAction, useEffect, useRef, useState } from "react"
import tryWorker from "./worker?worker";


type Props = {
  setCount: Dispatch<SetStateAction<number>>
  setIsProccesing: Dispatch<SetStateAction<boolean>>
  limit:number
}
let startTime = 0
export const CalOnWorker = (props: Props) => {
  const [time, setTime] = useState(0)
  const workerRef = useRef<Worker | null>(null);
  
  useEffect(() => {
    workerRef.current = new tryWorker(); // worker読み込み
    if (!workerRef.current) return;
    workerRef.current.onmessage = (event) => {
      const data = event.data;
      props.setCount(data)
      const endTime = new Date().getTime();
      setTime(endTime - startTime)
      props.setIsProccesing(false)
    };

    return () => {
      workerRef.current?.terminate();
    };
  }, []);

  const onClickHandler = () => {
    props.setIsProccesing(true)
    startTime = new Date().getTime();
    workerRef.current?.postMessage(props.limit)
  }

  return (
    <>
      <button onClick={() => { 
          onClickHandler()
        }}>素数をWebWorkerでカウント
      </button>
      処理時間: {time/1000}秒
    </>

  )
}