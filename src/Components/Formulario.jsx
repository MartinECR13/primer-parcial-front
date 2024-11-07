import React, { useState } from 'react'
import '../Styles/Formulario.css'
import Card from './Card';

const Formulario = () => {

  const [dev, setDev] = useState({
    name: '',
    lastname: '',
    age: '',
    email: '',
    password: ''
  });
  const [success, setSuccess] = useState(false);
  const [error, setError] = useState(false);

  const handleSubmit = (event) => {
    event.preventDefault()
    let  regexEmail = /^[\w-\.]+@([\w-]+\.)+[\w-]{2,4}$/;
    let regexPass = /^(?=.*\d)(?=.*[a-z])(?=.*[A-Z]).{6,20}$/;
    if (
      dev.name.trim().length > 6 &&
      dev.lastname.includes(" ") &&
      regexEmail.test(dev.email) &&
      regexPass.test(dev.password)
    ) {
      setSuccess(true);
    } else setError(true);
    
}


  return (

    <div className='Form'>
      {success ? (
        <Card/>
      ):(
<form onSubmit = {handleSubmit}>
            <label>
            Nombre:
            <input type='text' name='name' 
            onChange={(event) =>
              setDev({ ...dev, name: event.target.value })
            } />
            </label>
            <label>
            Apellido:
            <input type='text' name='lastname' 
            onChange={(event) =>
              setDev({ ...dev, lastname: event.target.value })
            } 
            />
            </label>
            <label>
            Edad:
            <input type='number' name='age'
            onChange={(event) =>
              setDev({ ...dev, age: event.target.value })
            }  />
            </label>
            <label>
            Email:
            <input type='email' name='email' 
            onChange={(event) =>
              setDev({ ...dev, email: event.target.value })
            } />
            </label>
            <label>
            Contraseña:
            <input type='password' name='password' 
            onChange={(event) =>
              setDev({ ...dev, password: event.target.value })
            } />
            </label>
            <button type='submit'>Enviar</button>
            {error && (
            <h4 style={{ color: "red" }}>
              Por favor, complete todos los campos correctamente
            </h4>
          )}

        </form>

      )
       }
      
        
        
    </div>
  )
}

export default Formulario