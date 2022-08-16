import React, { useState, useEffect } from 'react';
import BootstrapTable from 'react-bootstrap-table-next';
import paginationFactory from 'react-bootstrap-table2-paginator';

export const Table = () => {
    // 1º criar o state que vai conter a lista da API
    let [Comments, setComments] = useState([])
    // 2º criar o objeto colunas no qual o dataFild é a propriedade do objeto
    const columns = [
        {
            dataField: 'id',
            text: 'id'
        }, {
            dataField: 'Nome',
            text: 'Nome'
        }, {
            dataField: 'E-mail',
            text: 'E-mail'
        }, {
            dataField: 'body',
            text: 'Texto'
        }
    ]
    const getComments = () => {
        fetch('https://jsonplaceholder.typicode.com/Comments')
            .then(response => response.json())
            .then(data => {
                // consol.log('posts', data)
                setComments(data)
            })
    }
    useEffect(() => {
        getComments()
    }, []);
    return (
        <div>
            <h3>Tabela de Usuários</h3>
            <BootstrapTable
                keyField='id'
                data={Comments}
                columns={columns}
                pagination={ paginationFactory() }
            />
        </div>
    )
}