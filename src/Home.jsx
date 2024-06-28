import React, { useEffect, useState } from 'react';
import axios from 'axios';
import { Link, useNavigate } from 'react-router-dom';
import HeaderMain from '../components/HeaderMain';

function Home() {
    const [data, setData] = useState([]);

    useEffect(() => {
        axios
            .get("https://664ca32335bbda1098814123.mockapi.io/usuarios")
            .then((response) => {
                setData(response.data);
            })
            .catch(() => {
                console.log("Requisição deu errado");
            });
    }, []);

    const navigate = useNavigate();

    const handleDelete = (id) => {
        const confirm = window.confirm("Tem certeza?");
        if (confirm) {
            axios.delete('https://664ca32335bbda1098814123.mockapi.io/usuarios/' + id)
                .then(res => {
                    navigate('/');
                })
                .catch(err => console.log(err));
        }
    };

    return (
        <div>
            <HeaderMain />
            <div className='d-flex flex-column justify-content-center align-items-center bg-light vh-100 mt-5'>
                <div className='w-100 rounded bg-white border shadow p-4'>
                    <div className='d-flex justify-content-end'>
                        <Link to="/post" className='btn btn'>Add+</Link>
                    </div>

                    <table className='table table-striped mt-4'>
                        <thead>
                            <tr>
                                <th>Id</th>
                                <th>Nickname</th>
                                <th>Email</th>
                                <th>Senha</th>
                                <th>Ação</th>
                            </tr>
                        </thead>
                        <tbody>
                            {data.map((d, i) => (
                                <tr key={i}>
                                    <td>{d.id}</td>
                                    <td>{d.nickname}</td>
                                    <td>{d.email}</td>
                                    <td>{d.senha}</td>
                                    <td>
                                        <Link to={`/put/${d.id}`} className='btn btn-sm btn-dark'>Editar</Link>
                                        <button className='btn btn-sm btn-danger ms-2' onClick={e => handleDelete(d.id)}>Deletar</button>
                                        <Link to={`/read/${d.id}`} className='btn btn-sm btn-dark ms-2'>Ver</Link>
                                    </td>
                                </tr>
                            ))}
                        </tbody>
                    </table>
                </div>
            </div>
        </div>
    );
}

export default Home;
