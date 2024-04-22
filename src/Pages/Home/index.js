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
      <div className='contato'>
        <h1 className='sobre'>Olá, meu nome é Mariana, e sou especialista no ramo de papelaria há 5 anos. Durante esse tempo, tenho criado uma variedade de kits personalizados para casamentos, aniversários e outras ocasiões especiais. Se você está procurando por convites únicos que reflitam o seu estilo pessoal, estou aqui para ajudar!</h1>
        <h1 className='sobre'>Com minha experiência e dedicação, estou pronta para colaborar com você na criação do seu próprio kit personalizado. Juntos, podemos transformar suas ideias em realidade, criando convites e materiais que serão verdadeiramente memoráveis.</h1>
        <h1 className='sobre'>Entre em contato comigo para começarmos a planejar o seu kit personalizado. Estou animada para trabalhar em conjunto e tornar seu evento ainda mais especial com convites que se destacam!</h1>
        <button className='custom-btn' onClick={() => enviarMensagemWhatsApp()}>Entre em contato!</button>

      </div>
      <p>Site criado pela Maju Holding.</p>
      <br />
      <p><i><b>Localizada em São José do Rio Preto-SP</b></i></p>
    </div>
  );
}

export default HomePage;
