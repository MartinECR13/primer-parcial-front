import React from 'react'
import '../Styles/Formulario.css'

const Formulario = () => {
  return (
    <div className='Form'>
        <form>
            <label>
            Nombre:
            <input type='text' name='name' />
            </label>
            <label>
            Apellido:
            <input type='text' name='lastname' />
            </label>
            <label>
            Edad:
            <input type='number' name='age' />
            </label>
            <label>
            Email:
            <input type='email' name='email' />
            </label>
            <label>
            Contraseña:
            <input type='password' name='password' />
            </label>
            <button type='submit'>Enviar</button>
        </form>
    </div>
  )
}

export default Formulario