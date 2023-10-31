import React, { Component, useState, ChangeEvent, FormEvent, useEffect } from 'react';

import styles from "../../App.module.css";

import axios from 'axios';
import { CadastroProfissionalInterface } from '../../interfaces/CadastroProfissionalInterface';

const ListagemProduto = () => {

    const [profissionals, setProfissionals] = useState<CadastroProfissionalInterface[]>([]);
    const [pesquisa, setPesquisa] = useState<string>('');
    const [error, setError] = useState("");

    const handleState = (e: ChangeEvent<HTMLInputElement>) => {
        if (e.target.name === "pesquisa") {
            setPesquisa(e.target.value);
        }
    }

    
}