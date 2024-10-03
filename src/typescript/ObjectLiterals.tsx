import React from 'react'

interface Person{
  firstName:string;
  fullName:string;
  age:number;
  address:Address;
  isAlive?:boolean;
}

interface Address{
  country:string;
  houseNo:number;
}

export const ObjectLiterals = () => {
  
  const person:Person={
    firstName:'Jimmy',
    fullName:'Jason',
    age:22,
    address:{
      country:'Mexico',
      houseNo:666 
    },
    isAlive:true
  }
  
  
  
  return (
  <>
    <h3>Objetos Literales</h3>
    <pre>
      {JSON.stringify(person,null,2)}
    </pre>
  </>
  
  )
}

