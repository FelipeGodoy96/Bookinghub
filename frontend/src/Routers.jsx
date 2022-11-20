import React from 'react';
import { Routes, Route, Navigate } from 'react-router-dom';
import Busca from './Busca';
import Categoria from './Categoria';
import Home from './Home';
import Anuncio from './Anuncio';
import NotFound from './NotFound';
import Login from './Login';
import Cadastro from './Cadastro';
import Reserva from './Reserva';
import ConfirmacaoReserva from './ConfirmacaoReserva';
import RedefinirSenha from './RedefinirSenha';

export default function Routers() {
  return (
    <Routes>
      <Route path="/" element={<Home />} />
      <Route path="/reserva" element={<Reserva />} />
      <Route path="/anuncio/:id" element={<Anuncio />} />
      <Route path="/buscar/" element={<Busca />} />
      <Route path="/categoria/:nomecategoria" element={<Categoria />} />
      <Route path="/login" element={<Login />} />
      <Route path="/cadastro" element={<Cadastro />} />
      <Route path="/redefinirSenha" element={<RedefinirSenha />} />
      <Route path="/confirmacao-reserva" element={<ConfirmacaoReserva />} />
      <Route path="/404-NaoEncontrado" element={<NotFound />} />
      <Route path="*" element={<Navigate to="/404-NaoEncontrado" />} />
    </Routes>
  );
}
