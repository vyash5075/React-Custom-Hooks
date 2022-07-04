import { useEffect, useRef } from "react"

//It runs oly when the things chnges not on the first Render.
export default function useUpdateEffect(callback, dependencies) {
  const firstRenderRef = useRef(true)

  useEffect(() => {
      //alert(firstRenderRef.current)
    if (firstRenderRef.current) {
      firstRenderRef.current = false
      return
    }
    return callback()
  }, dependencies)
}

//react 18 me panga hai 
// component   mount --> unmount--> mount  
// tohapko lagega ye mount pr bhi chal rha hai.
//isiliye hamne yaha alert laga kar choda hai test karne ke liye