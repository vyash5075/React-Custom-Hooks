
import { useState,useEffect ,useLayoutEffect} from "react"
import usePrevious from "./usePrevious"

export default function PreviousComponent() {
  const [count, setCount] = useState(0)
  const [name, setName] = useState("Kyle")
  const previousCount = usePrevious(count)
  useEffect(() => {
      alert("useEffect")
  }, [ ])

  useLayoutEffect(() => {
    alert("useLayoutEffect")
}, [ ])

  return (
    <div>
      <div>
        {count} - {previousCount}
        {alert("return")}
      </div>
      <div>{name}</div>
      <button onClick={() => setCount(currentCount => currentCount + 1)}>
        Increment
      </button>
      <button onClick={() => setName("John")}>Change Name</button>
    </div>
  )
}