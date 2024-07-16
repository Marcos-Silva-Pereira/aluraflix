import Banner from '../../components/Banner';
import Categoria from '../../components/Categorias';
import { useGetData } from '../../hook/useDatas.js';
import { useState, useEffect} from 'react'
import DataContext from '../../contexts/dataContext'
import db from '../../json/db.json'


function Inicio() {

    function nome(id) {
        const categoriaInfo = db.categorias;
        const titulo = categoriaInfo.filter((categoria) => categoria.id === id);
        return (
            titulo[0].nome
        )
    }

    function cor(id) {
        const categoriaInfo = db.categorias;
        const corInfo = categoriaInfo.filter((categoria) => categoria.id === id);
        return (
            corInfo[0].cor
        )
    }

    return (
        <>
            <Banner/>
            <Categoria tipo={nome(1)} cor={cor(1)}/>
            <Categoria tipo={nome(2)} cor={cor(2)}/>
            <Categoria tipo={nome(3)} cor={cor(3)}/>
        </>
    )
}

export default Inicio;