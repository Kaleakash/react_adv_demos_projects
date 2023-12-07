import React, { useMemo, useState } from 'react'
import './App.css'


function UseMemoWithDependency() {
    console.log('re-render')
    const [someBool,setSomeBool] = useState(false)
    const [amount,setAmount] = useState(1000)

    const expensiveFunction=()=>{
        console.log('run expensive function')
        const data=[]
        for(let i=0;i<=amount;i++){
            if(i%2===0){
                console.log(i)
                data.push(i)
            }
        }
        return data
    }
    // Run This First and See The OutPut in Console
        // const calculationData=expensiveFunction()
    // After This Execute This With useMemo and See the Difference
           const calculationData = useMemo(()=>expensiveFunction(),[amount])




  return (
    <div>
        <div>current Value:{someBool?'true':'false'}</div>
        <button onClick={()=>setSomeBool(prevState=>!prevState)}>change bool</button>
        {/* Lets Add Some data Now */}
        <button onClick={()=>setAmount(prevState=>prevState+100)}>Add Data</button>
        <hr/>
        {calculationData&&calculationData.map((el)=>{
            return <p key={el}>{el}</p>
        })}
    </div>
  )
}
export default UseMemoWithDependency;
