import { Dispatch, SetStateAction } from "react";

type Props =  {
  limit: number;
  setLimit: Dispatch<SetStateAction<number>>;
}
export const InputLimit = (props: Props) => {
  return (
    <input value={props.limit} onChange={(e) => {
        props.setLimit( Number(e.target.value))
    }} type="number"></input>
  )
}