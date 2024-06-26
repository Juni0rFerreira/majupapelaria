import React from 'react';
import Header from '../../Components/Header';
import aniversarios from '../../bases/dadosAniversarios';
import '../stylecards.css';

function AniversariosPage() {
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
        {aniversarios.map((aniversario, index) => (
          <div className='card' key={index}>
            <img
              src={aniversario.imagem}
              alt="Item sem imagem"
            />
            <div className='card-body'>
              <h1>{aniversario.nome}</h1>
              <p>{aniversario.descricao}</p>
              <span>R$ {aniversario.valor.toFixed(2).replace('.', ',')}</span>
              <button onClick={() => enviarMensagemWhatsApp(aniversario)}>Comprar</button>
            </div>
          </div>
        ))}
      </div>
      <p>Site criado pela Maju Holding.</p>
    </div>
  );
}

export default AniversariosPage;
