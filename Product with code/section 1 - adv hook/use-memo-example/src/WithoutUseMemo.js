import React, { useState } from 'react'
import './App.css'


function WithoutUseMemo() {
    console.log('re-render')
    const [someBool,setSomeBool] = useState(false)

    const expensiveFunction=()=>{
        console.log('run expensive function')
        const data=[]
        for(let i=0;i<=10000;i++){
            if(i%2===0){
                console.log(i)
                data.push(i)
            }
        }
        return data
    }
    // Run This First and See The OutPut in Console
       const calculationData=expensiveFunction()
    



  return (
    <div>
        <div>current Value:{someBool?'true':'false'}</div>
        <button onClick={()=>setSomeBool(prevState=>!prevState)}>change</button>
        <hr/>
        {calculationData&&calculationData.map((el)=>{
            return <p key={el}>{el}</p>
        })}
    </div>
  )
}
export default WithoutUseMemo;
