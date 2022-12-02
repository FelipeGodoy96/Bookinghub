/* eslint-disable no-unused-vars */
/* eslint-disable no-param-reassign */
/* eslint-disable react/prop-types */
import React from 'react';
import Button from 'react-bootstrap/esm/Button';
import Card from 'react-bootstrap/esm/Card';
import { Link, useNavigate } from 'react-router-dom';
import erroImagem from '../../assets/img/erro-imagem.png';

export default function ProductCardReserva({ dadosDoAnuncioReserva }) {
  const navigate = useNavigate();

  return (
    <Card className="anuncioCardReserva d-flex flex-column m-2">
      <Card.Img
        variant="top"
        onError={({ currentTarget }) => {
          currentTarget.onerror = null; // prevents looping
          currentTarget.src = erroImagem;
        }}
        src={dadosDoAnuncioReserva.fotosAnuncio[1].url ? dadosDoAnuncioReserva.fotosAnuncio[1].url : 'Erro Imagem não encontrada'}
      />

      <Card.Body className="cardInfo d-flex flex-column">
        <div className="d-flex flex-row flex-column justify-content-between">
          <div className="d-flex justify-content-between align-items-center">
            <p>
              {dadosDoAnuncioReserva.categoria}
            </p>
          </div>
          <div>
            <h3 className="nomeAnuncianteReserva">
              {dadosDoAnuncioReserva.nome}
            </h3>
          </div>
        </div>
        <hr className="solid" />
        <div className="verMapa mb-4 d-flex flex-row align-items-center justify-content-between">
          <div className="bi bi-geo-alt">
            {dadosDoAnuncioReserva.cidade}
          </div>

          <Link className="bi bi-pin-map" to="/">
            Ver no mapa
          </Link>
        </div>
        <div className="d-flex flwx-row justify-content-between">
          <Card.Title>Check-in</Card.Title>
          <Card.Text>Data</Card.Text>
        </div>

        <div className="d-flex flwx-row justify-content-between">
          <Card.Title>Check-out</Card.Title>
          <Card.Text>Data</Card.Text>
        </div>
        <div className="d-flex flwx-row justify-content-between">
          <Card.Title>Valor Final</Card.Title>
          <Card.Text>R$ XXX.XX</Card.Text>
        </div>

        <Button className="m-1" onClick={() => navigate('/confirmacao-reserva')}>

          Confirmar Reserva
        </Button>
      </Card.Body>
    </Card>
  );
}
