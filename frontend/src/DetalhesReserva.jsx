/* eslint-disable jsx-a11y/alt-text */
import React, { useContext } from 'react';
import Container from 'react-bootstrap/esm/Container';
import Card from 'react-bootstrap/Card';
import { useParams } from 'react-router-dom';
import Footer from './components/Footer/Footer';
import LogomarcaIco from './assets/icon/booking_hub_logo_semfundo.png';
import Context from './Contexts/Context';
import Cripto from './assets/img/criptomoeda.png';
import Visa from './assets/img/logotipo-visa.png';
import Pix from './assets/img/logo-pix.png';
import Boleto from './assets/img/Boleto-Bancario.png';
import American from './assets/img/american-credit-card.png';
import Blue from './assets/img/credit-card-blue.png';

export default function DetalhesReserva() {
  const { id } = useParams();

  const { filters } = useContext(Context);
  const reservaPorID = filters.getReservaByID(parseInt(id, 10));

  const anuncioSelected = filters.getAnuncioByID(parseInt(reservaPorID.produtos.id, 10));

  const categoriaFiltrada = filters.getCategoriaByID(anuncioSelected.idCategoria);

  const cidadeFiltrada = filters.getCidadeByID(anuncioSelected.idCidade);

  return (
    <>
      <Container className="vh-100">
        <div className="logoBooking  d-flex align-items-center">
          <img width="60" height="auto" src={LogomarcaIco} alt="logomarcaIcone" id="logomarcaIcone" />
          <p className="textIcon" style={{ margin: '0' }}>
            Booking Hub
          </p>
        </div>

        <Card className="cardContainer-1 p-0 m-0">

          <Card.Body>
            <div className="d-flex  flex-wrap flex-column flex-lg-row" style={{ borderBottom: '1px solid' }}>
              <Card.Img src={anuncioSelected.fotosAnuncio[0].url} />

              <div className="textCard d-flex flex-column flex-wrap mx-2  " style={{ width: '25%' }}>
                <h5><b>{anuncioSelected.nomeAnuncio}</b></h5>
                <h6>
                  <b>{cidadeFiltrada.nomeCidade}</b>
                </h6>
                <p>
                  {categoriaFiltrada.descricaoCategoria}
                </p>

              </div>

              <div className="entradaSaida d-flex flex-wrap p-1 align-items-center flex-column " style={{ width: '25%' }}>
                <p className="p-title mb-2 ">Check-in</p>
                <p className=" mt-2 text-center">
                  {reservaPorID.d_inic_reser}
                </p>

                <p className=" mt-1 p-1 bi-clock horario">a partir das 14:00</p>
              </div>

              <div className="entradaSaida d-flex flex-wrap p-1 align-items-center flex-column" style={{ width: '25%' }}>
                <p className="p-title mb-2">Check-out</p>
                <p className=" mt-2 mx-auto text-center ">
                  {reservaPorID.d_fin_reser}
                </p>

                <p className=" mt-1 p-1 bi-clock horario">at?? as 12:00</p>
              </div>

            </div>

            <div className="politica-preco mt-5" style={{ borderBottom: '1px solid' }}>
              <p>
                <b>Email: </b>
                {reservaPorID.hospede_email}
              </p>

              <div className="d-flex justify-content-between">

                <h2>Quantidade de Di??rias: </h2>
                <p>4</p>
              </div>

              <div className="d-flex justify-content-between">
                <h2>Valor da Di??ria: </h2>
                <p>R$XX,XX </p>
              </div>

              <div className="d-flex justify-content-between">
                <p>Valor Final: </p>
                <p>R$XX,XX </p>
              </div>

            </div>
            <div className="mt-4 politaPreco" style={{ borderBottom: '1px solid' }}>
              <h2>Pre??o</h2>
              <p>
                O pre??o final exibido ?? o valor que voc?? vai pagar ?? acomoda????o.
                A Booking Hub n??o cobra dos h??spedes nenhuma taxa de reserva,
                administrativa ou de qualquer outro tipo.
                O emissor do seu cart??o pode cobrar uma taxa de transa????o internacional.
              </p>
            </div>

            <div className="mt-4 politaPreco" style={{ borderBottom: '1px solid' }}>
              <h2>Informa????o sobre pagamentos</h2>
              <div className="d-flex flex-wrap">
                <p>Esta propriedade aceita as seguintes formas de pagamento:  </p>
                <img className="mx-1" src={Cripto} style={{ width: '35px', height: '35px ' }} />
                <img className="mx-1" src={Visa} style={{ width: '35px', height: '35px ' }} />
                <img className="mx-1" src={Pix} style={{ width: '60px ', height: '35px ' }} />
                <img className="mx-1" src={Boleto} style={{ width: '35px ', height: '35px ' }} />
                <img className="mx-1" src={American} style={{ width: '35px ', height: '35px ' }} />
                <img className="mx-1" src={Blue} style={{ width: '35px ', height: '35px ' }} />
              </div>

            </div>

            <div className="mt-4 politaPreco">
              <h2>Outras informa????es</h2>
              <p>
                Por favor, observe que pedidos adicionais (por exemplo, cama extra)
                n??o est??o inclu??dos neste valor.
                <br />
                Impostos adicionais ainda poder??o ser cobrados
                pela acomoda????o se voc?? n??o comparecer ou cancelar.
                <br />
                Por favor, lembre-se de ler as Informa????es importantes abaixo,
                pois podem conter dados importantes que n??o foram mencionados aqui.
              </p>
            </div>

          </Card.Body>
        </Card>
      </Container>
      {/* <Footer /> */}
    </>
  );
}
