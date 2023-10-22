import { cal } from "./cal";

self.addEventListener('message', (e) => {
  console.log(e)
  const limit = Number(e.data)
  const res = cal(limit)
  self.postMessage(res);
});

export default {}