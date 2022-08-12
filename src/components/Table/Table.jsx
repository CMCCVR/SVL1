import React, { useState, useEffect } from 'react';
import BootstrapTable from 'react-bootstrap-table-next';

export const Table = () =>{
    let [posts, setPosts] = useState([])
    const columns = [
        {
            dataField: 'id',
            text: 'id'
        },
        {
            dataField: 'title',
            text: 'Titulo'
        },
        {
            dataField: 'body',
            text: 'texto'
        }
    ]

    const getPosts = () => {
        fetch('https://jsonplaceholder.typicode.com/posts')
            .then(response => response.json())
            .then(data => {
                // consol.log('posts', data)
                setPosts(data)
            })
    }
    useEffect(() => {
        getPosts()

    }, []);

    return (

        <div>
            <h3>Tabela de Usuários</h3>
            <BootstrapTable
                keyField='id'
                data={posts}
                columns={columns}

            />
        </div>
    )
}