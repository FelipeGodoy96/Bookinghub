/* eslint-disable no-param-reassign */
/* eslint-disable react/react-in-jsx-scope */
/* eslint-disable react/prop-types */

import Card from 'react-bootstrap/Card';
import { useNavigate } from 'react-router-dom';
import Button from 'react-bootstrap/esm/Button';
import erroImagem from '../../assets/img/erro-imagem.png';

export default function CategoriesCard({ data }) {
  const navigate = useNavigate();

  return (
    <Card className="categoriesCard" style={{ width: '19rem' }}>
      <Card.Img
        id="imagemCategoriesCard"
        variant="top"
        onError={({ currentTarget }) => {
          currentTarget.onerror = null; // prevents looping
          currentTarget.src = erroImagem;
        }}
        src={data.fotoCategoria}
      />
      <Card.Body className="d-flex flex-column align-items-center">
        <Card.Title>{data.descricaoCategoria}</Card.Title>
        <Card.Text>Mais de 1.000 encontrados</Card.Text>
        <Button
          id="buttonMoveToCategory"
          className="m-1"
          onClick={() => navigate(`/buscar/${data.descricaoCategoria}`)}
        >
          Ver todos
        </Button>
      </Card.Body>
    </Card>
  );
}
