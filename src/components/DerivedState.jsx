import { useState } from "react"

export const DerivedState = ()=>{
    const[users, setUsers] = useState([
        {name:"Jacko", age: 20},
        {name:"Packo", age: 30},
        {name:"Tacko", age: 40},
        {name:"Lacko", age: 60}
    ]);
    const userCount= users.length;
    //userCount is derived state

    const averageAge = users.reduce((accum, curElem)=> accum+ curElem.age, 0)/ userCount;
    return <>
    <div className = "main-div">
        <h1>Users List</h1>
        <ul>
            {
                users.map((item, index)=>{
                    return( 
                    <li key={index}>
                        {item.name}- {item.age} year old
                    </li>
                    )
                })
            }
        </ul>
        <p>Total Users : {userCount}</p>
        <p>Average Age : {averageAge} </p>
    </div>
    </>
}