import React, { useState } from 'react';
import './index.css';

function AdminUser() {
  const [productName, setProductName] = useState('');
  const [productDescription, setProductDescription] = useState('');
  const [productValue, setProductValue] = useState('');
  const [eventType, setEventType] = useState('Casamento');
  const [productImage, setProductImage] = useState(null);

  const handleClear = () => {
    setProductName('');
    setProductDescription('');
    setProductValue('');
    setEventType('Casamento');
    setProductImage(null);
  };

  const handleSave = () => {
    // Aqui você pode implementar a lógica para salvar os dados, como enviar para um backend, por exemplo
    console.log('Produto salvo:', {
      productName,
      productDescription,
      productValue,
      eventType,
      productImage
    });
  };

  return (
    <div className="admin-container">
      <h1>Admin Page</h1>
      <div className="form-container">
        <label htmlFor="productName">Nome do Produto:</label>
        <input
          type="text"
          id="productName"
          value={productName}
          onChange={(e) => setProductName(e.target.value)}
        />

        <label htmlFor="productDescription">Descrição:</label>
        <textarea
          id="productDescription"
          value={productDescription}
          onChange={(e) => setProductDescription(e.target.value)}
        ></textarea>

        <label htmlFor="productValue">Valor:</label>
        <input
          type="text"
          id="productValue"
          value={productValue}
          onChange={(e) => setProductValue(e.target.value)}
        />

        <label htmlFor="eventType">Tipo de Evento:</label>
        <select
          id="eventType"
          value={eventType}
          onChange={(e) => setEventType(e.target.value)}
        >
          <option value="Casamento">Casamento</option>
          <option value="Aniversario">Aniversário</option>
          <option value="Sazonal">Sazonal</option>
        </select>

        <label htmlFor="productImage">Imagem:</label>
        <input
          type="file"
          id="productImage"
          accept="image/*"
          onChange={(e) => setProductImage(e.target.files[0])}
        />

        <div className="buttons">
          <button onClick={handleSave}>Salvar</button>
          <button onClick={handleClear}>Limpar</button>
        </div>
      </div>
    </div>
  );
}

export default AdminUser;
