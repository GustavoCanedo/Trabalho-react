import axios from 'axios';
import React, { useEffect, useState } from 'react'
import { Link, useParams } from 'react-router-dom';


function Read() {
  const [data, setData] = useState([]);
  const {id} = useParams();

  useEffect(() => {
    axios
      .get("https://664ca32335bbda1098814123.mockapi.io/usuarios/" + id)
      .then((response) => {
        setData(response.data);
      })
      .catch(() => {
        console.log("Requisição deu errado");
      });
  }, []);

  return (
    <div className='d-flex w-100 vh-100 justify-content-center align-items-center bg-light'>
      <div className='w-100 border bg-white shadow px-5 pt-3 pb-5 rounded'>
        <h3>Detalhes do usuário</h3>
        <div className='mb-2'>
          <strong>Ninckname: {data.nickname}</strong>
        </div>
        <div className='mb-2'>
          <strong>Email: {data.email}</strong>
        </div>
        <div className='mb-2'>
          <strong>Senha: {data.senha}</strong>
        </div>
        <Link to={`/put/${id}`} className='btn btn-primary'>Editar</Link>
        <Link to={`/`} className='btn btn-danger ms-3'>Voltar</Link>
      </div>
    </div>
  
  )
}

export default Read