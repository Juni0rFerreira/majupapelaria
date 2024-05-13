import React from 'react';
import Header from '../../Components/Header';
import './index.css';

function HomePage() {
  const enviarMensagemWhatsApp = () => {
    console.log('Enviar mensagem WhatsApp clicked');
    const numeroWhatsApp = '5517991401756';
    const mensagem = `Olá, vim pelo seu site e gostaria de saber mais sobre seu trabalho!`;
    const urlWhatsApp = `https://api.whatsapp.com/send?phone=${numeroWhatsApp}&text=${encodeURIComponent(mensagem)}`;
    console.log('URL WhatsApp:', urlWhatsApp);
    window.open(urlWhatsApp, '_blank');
  };

  return (
    <div className="App">
      <Header />
      <div>
        <br />
      </div>
      <div className='contato'>
        <h1 className='sobre'>Precisando criar um convite, mas está sem ideias?</h1>
        <h1 className='sobre'>Venha conhecer Maju Papelaria Personalizada. Contamos com uma variedade de kits personalizados para ocasiões especiais. Se você está procurando por convites únicos que reflitam o seu estilo pessoal, estamos aqui para ajudar, com diversos modelos de convites personalizados esperando por você.</h1>
        <h1 className='sobre'>Entre em contato para começarmos a planejar. Agora que as dúvidas foram esclarecidas aproveite e crie seu convite personalizado agora, basta clicar no botão abaixo.</h1>
        <button className='custom-btn' onClick={() => enviarMensagemWhatsApp()}>Entre em contato</button>
      </div>
      <p>Site criado pela Maju Holding.</p>
      <br />
      <p><i><b>Localizada em São José do Rio Preto-SP</b></i></p>
    </div>
  );
}

export default HomePage;
