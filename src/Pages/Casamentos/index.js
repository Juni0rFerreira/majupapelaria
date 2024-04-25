import React from 'react';
import Header from '../../Components/Header';
import logomaju from '../../assets/imgs/logomaju.png';
import casamentos from '../../bases/dadosCasamento';
import '../stylecards.css';

function CasamentosPage() {
  const enviarMensagemWhatsApp = (produto) => {
    const numeroWhatsApp = '5517991401756';
    const mensagem = `Olá, vi o produto ${produto.nome} com valor R$ ${produto.valor.toFixed(2).replace('.', ',')} e gostaria de saber mais e fazer um orçamento.`;
    const urlWhatsApp = `https://api.whatsapp.com/send?phone=${numeroWhatsApp}&text=${encodeURIComponent(mensagem)}`;
    console.log('URL WhatsApp:', urlWhatsApp); // Adicionando um log para verificar a URL gerada
    window.open(urlWhatsApp, '_blank');
  };

  return (
    <div className="App">
      <Header />
      <div className='container-cards'>
        {casamentos.map((casamento, index) => (
          <div className='card' key={index}>
            <img
              src={casamento.imagem || logomaju}
              alt="Item sem imagem"
            />
            <div className='card-body'>
              <h1>{casamento.nome}</h1>
              <p>{casamento.descricao}</p>
              <span>R$ {casamento.valor.toFixed(2).replace('.', ',')}</span>
              <button onClick={() => enviarMensagemWhatsApp(casamento)}>Comprar</button>
            </div>
          </div>
        ))}
      </div>
      <p>Site criado pela Maju Holding.</p>
      <br />
      <p><i><b>Localizada em São José do Rio Preto-SP</b></i></p>
    </div>
  );
}

export default CasamentosPage;
