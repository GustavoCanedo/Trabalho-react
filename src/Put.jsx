import axios from 'axios';
import React, { useEffect, useState } from 'react'
import { Link, useNavigate, useParams } from 'react-router-dom';


function Put() {

 // const [data, setData] = useState([]);
  const {id} = useParams();
  const [values, setValues] = useState({
    name: '',
    email: '',
    phone: ''
})


  useEffect(() => {
    axios
      .get("https://664ca32335bbda1098814123.mockapi.io/usuarios/" + id)
      .then((response) => {
       setValues(response.data)
      })
      .catch(() => {
        console.log("Requisição deu errado");
      });
  }, []);

  const navigate = useNavigate();

  const handleUpdate = (event)=> {
    event.preventDefault();
    axios.put('https://664ca32335bbda1098814123.mockapi.io/usuarios/' + id, values)
    .then(res => {
        console.log(res);
        navigate('/')
    })
    .catch(err => console.log(err))
  }
  return (
    <div className='d-flex w-100 vh-100 justify-content-center align-items-center bg-light'>
    <div className='w-150 border bg-white shadow px-5 pt-3 pb-5 rounded'>
    <h1>Editar usuário</h1>

    <form onSubmit={handleUpdate}>
    <div className='mb-2'>
        <label htmlFor='nickname'>Nickname:</label>
        <input type="text" name='nickname' className='form-control' placeholder='insira o nome'
        value={values.nickname} onChange={e => setValues({...values, nickname: e.target.value})}/>
    </div>
        <div className='mb-2'>
        <label htmlFor='email'>Email:</label>
        <input type="email" name='email' className='form-control' placeholder='insira o email'
         value={values.email} onChange={e => setValues({...values, email: e.target.value})}/>
    </div>
        <div className='mb-2'>
        <label htmlFor='senha'>Senha:</label>
        <input type="text" name='senha' className='form-control' placeholder='insira a senha'
        value={values.senha} onChange={e => setValues({...values, senha: e.target.value})}/>
    </div>
    <button className='btn btn-primary'>Enviar</button>
    <Link to= "/" className='btn btn-danger ms-3'>Voltar</Link>
    </form>
    </div>
    </div>
  )
}

export default Put