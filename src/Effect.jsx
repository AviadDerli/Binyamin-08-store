import { useEffect, useState } from "react"

export default function Effect({ cntA, setCntA }) {
    const [cnt, setCnt] = useState(0);

    // useEffect( what , when    )
    // useEffect( ()=>{} , []  )

    // Mounting  - first time render
    useEffect(() => {
        console.log("🍧🍧🍧 FIRST TIME 🍧🍧🍧");
    }, [])

    // Updating  - setState / new props
    useEffect(() => {
        console.log("🍍🍍🍍 Changed State 🍍🍍🍍");
    }, [cnt])
   
    // useEffect(() => {
    //     console.log("🍍🍍🍍 Changed State 🍍🍍🍍");
    // }, [cnt,cntA])
    
    // useEffect(() => {
    //     console.log("🌴🌴🌴 Changed Props 🌴🌴🌴");
    // }, [cntA])
    
    useEffect(() => {
        console.log("🥑🥑🥑 Any Change 🥑🥑🥑");
    })

    return (
        <div>
            <h1>UseEffect Example</h1>
            <h2>From this components : {cnt}</h2>
            <button onClick={() => setCnt(cnt + 1)}>+</button>
            <hr/>
            <h2>From App : {cntA}</h2>
            <button onClick={() => setCntA(cntA + 1)}>+</button>
            </div>
    )
}
