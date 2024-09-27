import React from 'react'

export const BasicTypes = () => {
    const name:string ='job';
    const age:number = 20;
    const isActive:boolean=true;

    const powers:string[] = ['React','ReactNative','Angular','Vue','Qwik'];

    powers.push('Siguiente')
  return (<>


    <h3>Tipos</h3>
        {name} {age} {isActive? 'true':'false'}
        <br />
        {powers.join(',  ')}

        
    </>)
}
