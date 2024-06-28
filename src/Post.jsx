import axios from 'axios';
import { useState } from 'react';
import { Link, useNavigate } from 'react-router-dom'


function Post() {

    const [values, setValues] = useState({
        name: '',
        email: '',
        phone: ''
    })

    const navigate = useNavigate();

    const handleSubmit = (event) => {
        event.preventDefault();
        axios.post('https://664ca32335bbda1098814123.mockapi.io/usuarios', values)
        .then(res => {
            console.log(res);
            navigate('/')
        })
        .catch(err => console.log(err))
    }
        
  return (
    <div className='d-flex w-100 vh-100 justify-content-center align-items-center bg-light'>
    <div className='w-150 border bg-white shadow px-5 pt-3 pb-5 rounded'>
    <h1>Adicionar Usuário</h1>

    <form onSubmit={handleSubmit}>
    <div className='mb-2'>
        <label htmlFor='nickname'>Nickname:</label>
        <input type="text" name='nickname' className='form-control' placeholder='insira o nome'
        onChange={e => setValues({...values, nickname: e.target.value})}/>
    </div>
        <div className='mb-2'>
        <label htmlFor='email'>Email:</label>
        <input type="email" name='email' className='form-control' placeholder='insira o email'
         onChange={e => setValues({...values, email: e.target.value})}/>
    </div>
        <div className='mb-2'>
        <label htmlFor='senha'>Senha:</label>
        <input type="text" name='senha' className='form-control' placeholder='insira a senha'
         onChange={e => setValues({...values, senha: e.target.value})}/>
    </div>
    <button className='btn btn-primary'>Enviar</button>
    <Link to= "/" className='btn btn-danger ms-3'>Voltar</Link>
    </form>
    </div>
    </div>
  )
}

export default Post