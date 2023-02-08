import React from 'react'
import { useState } from 'react'

function Form() {

    const [details, setDetails] = useState({
        discord: '',
        wallet: '',
       
    })

    const PostData =async(e)=>{
        e.preventDefault()

        const{discord, wallet}=details;

       const res=await fetch("https://demonsdb-1d911-default-rtdb.firebaseio.com/demonform.json",
       {
           method:'POST',
           headers:{
               'Content-Type':'application/json'
           },
           body:JSON.stringify({
            discord,
            wallet,
           
           })
        })

    }

  return (
    <div className='forms' >
        <form>
        <label>Discord Name: </label>
        <input type='text' required='required' placeholder='Discord#1234' onChange={(e)=> setDetails ({...details, discord: e.target.value})} />
        <label>Wallet: </label>
        <input type='text' required='required' placeholder='Cantos Wallet' onChange={(e)=> setDetails ({...details, wallet: e.target.value})} />
        {/* <button onClick={PostData} type="submit">Submit</button> */}
        <input type="submit" onClick={PostData} />
        </form>
    </div>
  )
}

export default Form