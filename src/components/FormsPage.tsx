import React from 'react'
import {useForm} from 'react-from-hook'


type FormInputs = {
  email:string;
  password:string;
}

export const FormsPage = () => {

  const {register} = useForm<FormInputs>({
    defaultValues:{
      email:'job@mail.com',
      password:'666',
    }
  });

  return (
    <>
        <form action="">
            <h3>Formularios</h3>

        <div style={{display: 'flex', flexDirection:'column'}}>
            <input type="text" placeholder='email' />

            <input type="text" placeholder='password'/>


            <button type='submit'>Ingresar</button>
        </div>





        </form>
    </>

  )
}
