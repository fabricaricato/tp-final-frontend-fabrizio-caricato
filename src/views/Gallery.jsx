import React, { useState } from "react";
import { useNavigate } from "react-router-dom";

const images = [
  "https://picsum.photos/400/300?random=1",
  "https://picsum.photos/400/300?random=2",
  "https://picsum.photos/400/300?random=3",
  "https://picsum.photos/400/300?random=4",
  "https://picsum.photos/400/300?random=5",
];

export default function Gallery() {
  const [selectedImg, setSelectedImg] = useState(null);
  const navigate = useNavigate();

  const handleBackToChat = () => {
    navigate("/chat"); 
  };

  return (
    <div className="gallery-container">
      <h1 className="gallery-title">Bienvenido a la galería</h1>
      <button className="back-to-chat-btn" onClick={handleBackToChat}>
        ← Volver al Chat
      </button>

      <div className="gallery-grid">
        {images.map((img, index) => (
          <div key={index} className="gallery-item" onClick={() => setSelectedImg(img)}>
            <img src={img} alt={`Gallery ${index}`} />
          </div>
        ))}
      </div>

      {selectedImg && (
        <div className="modal" onClick={() => setSelectedImg(null)}>
          <span className="close">&times;</span>
          <img className="modal-content" src={selectedImg} alt="Selected" />
        </div>
      )}
    </div>
  );
}