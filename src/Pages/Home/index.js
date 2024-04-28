import React, { useState, useEffect } from 'react';
import Header from '../../Components/Header';
import { format } from 'date-fns-tz'; // Importando a função format do date-fns-tz
import diadasmaesevento from '../../assets/imgs/diadasmaesevento.png'
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

  // Calculando a data alvo (30/06/2024 às 18:00) no fuso horário de Brasília
  const targetDate = new Date("2024-05-12T18:00:00-03:00");

  const calculateTimeRemaining = () => {
    // Obtendo a data atual no fuso horário de Brasília
    const currentDateTime = new Date();
    // Formatando a data atual no formato brasileiro (dd/MM/yyyy HH:mm:ss)
    const currentDateTimeBR = format(currentDateTime, 'dd/MM/yyyy HH:mm:ss', { timeZone: 'America/Sao_Paulo' });
    // Calculando a diferença em milissegundos
    const difference = targetDate - currentDateTime;
    // Convertendo a diferença para dias, horas, minutos e segundos
    const days = Math.floor(difference / (1000 * 60 * 60 * 24));
    const hours = Math.floor((difference % (1000 * 60 * 60 * 24)) / (1000 * 60 * 60));
    const minutes = Math.floor((difference % (1000 * 60 * 60)) / (1000 * 60));
    const seconds = Math.floor((difference % (1000 * 60)) / 1000);
    return { days, hours, minutes, seconds, currentDateTimeBR };
  }

  const [timeRemaining, setTimeRemaining] = useState(calculateTimeRemaining());
  const [showCopacabana, setShowCopacabana] = useState(false);

  useEffect(() => {
    const timer = setTimeout(() => {
      const remainingTime = calculateTimeRemaining();
      setTimeRemaining(remainingTime);

      // Verificando se chegou a zero segundos
      if (remainingTime.days === 0 && remainingTime.hours === 0 && remainingTime.minutes === 0 && remainingTime.seconds === 0) {
        setShowCopacabana(true);
      }
    }, 1000);

    // Limpando o timer ao desmontar o componente
    return () => clearTimeout(timer);
  }, [timeRemaining]);


  return (
    <div className="App">
      <Header />
      <div>

        <img
          style={{
            height: 'auto', // Mantém a proporção da imagem
            maxWidth: '100%', // Garante que a imagem não ultrapasse a largura do contêiner
            border: '8px'
          }}
          src={diadasmaesevento}
          alt="Dia das Mães imagem"
        />

        <br />
        <div className='timer'>
          {showCopacabana ? (
            <span>Dia das Mães Chegou!</span>
          ) : (

            <>
              <span>{timeRemaining.days}d </span>
              <span>{timeRemaining.hours}h </span>
              <span>{timeRemaining.minutes}m </span>
              <span>{timeRemaining.seconds}s </span>
            </>
          )}

        </div>

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
