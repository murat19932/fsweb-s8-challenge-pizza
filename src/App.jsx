import { useState, useEffect } from 'react';
import './App.css';

function App() {
  const [count, setCount] = useState(1);
  const basePrice = 85.50;
  const [extras, setExtras] = useState([]);
  const [totalPrice, setTotalPrice] = useState(basePrice);

  const extraOptions = ['Pepperoni', 'Sosis', 'Kanada Jambonu', 'Tavuk Izgara', 'Soğan', 'Domates', 'Mısır', 'Sucuk', 'Jalapeno', 'Sarmısak', 'Biber', 'Kabak', 'Ananas'];

  const handleExtraChange = (option) => {
    if (extras.includes(option)) {
      setExtras(extras.filter((item) => item !== option));
    } else if (extras.length < 10) {
      setExtras([...extras, option]);
    }
  };

  useEffect(() => {
    setTotalPrice(basePrice * count + extras.length * 5);
  }, [count, extras]);

  return (
    <div id="root">
      <header className="header">
        <h1>Teknolojik Yemekler</h1>
        <nav>
          <small>Anasayfa</small> - <small>Sipariş Oluştur</small>
        </nav>
      </header>

      <div className="product-info">
        <h2>Position Absolute Acı Pizza</h2>
        <div className="product-price">
          <p className="price">{basePrice.toFixed(2)}₺</p>
          <p className="rating">4.9</p>
          <p className="reviews">(200)</p>
        </div>
        <p className="description">
          Frontend Dev olarak hala position:absolute kullanıyorsan bu çok acı pizza tam sana göre. Pizza, domates, peynir ve genellikle çeşitli diğer malzemelerle kaplanmış, daha sonra geleneksel olarak odun ateşinde bir fırında yüksek sıcaklıkta pişirilen, genellikle yuvarlak, düzleştirilmiş mayalı buğday bazlı hamurdan oluşan İtalyan kökenli lezzetli bir yemektir. Küçük bir pizzaya bazen pizzetta denir.
        </p>
      </div>

      <div className="card">
        <div className="options-row">
          <div className="option-section column">
            <h4>Boyut Seç <span style={{ color: 'red' }}>*</span></h4>
            <label>
              <input type="radio" name="size" value="Küçük" /> Küçük
            </label>
            <label>
              <input type="radio" name="size" value="Orta" /> Orta
            </label>
            <label>
              <input type="radio" name="size" value="Büyük" /> Büyük
            </label>
          </div>

          <div className="option-section">
            <h4>Hamur Seç <span style={{ color: 'red' }}>*</span></h4>
            <select>
              <option value="">Hamur Kalınlığı</option>
              <option value="İnce">İnce</option>
              <option value="Orta">Orta</option>
              <option value="Kalın">Kalın</option>
            </select>
          </div>
        </div>

        <h3 className="ekmalzeme">Ek Malzemeler</h3>
        <p>En Fazla 10 malzeme seçebilirsiniz. 5₺</p>
        <div className="extras-list">
          {extraOptions.map((option, index) => (
            <label key={index}>
              <input
                type="checkbox"
                value={option}
                onChange={() => handleExtraChange(option)}
                checked={extras.includes(option)}
              />{' '}
              {option}
            </label>
          ))}
        </div>

        <h3 className="siparisnotu">Sipariş Notu</h3>
        <textarea placeholder="Siparişine eklemek istediğin bir not var mı?"></textarea>
      </div>

      <div className="separator"></div>

      <div className="order-summary">
        <h4>Sipariş Toplamı</h4>
        <div className="summary-details">
          <p>Seçimler <span>{(extras.length * 5).toFixed(2)}₺</span></p>
          <p className="total">Toplam <span>{totalPrice.toFixed(2)}₺</span></p>
        </div>
      </div>

      <div className="order-controls">
        <button className="control-button" onClick={() => setCount(count > 1 ? count - 1 : 1)}>-</button>
        <input type="text" value={count} readOnly />
        <button className="control-button" onClick={() => setCount(count + 1)}>+</button>
        <button className="order-button">SİPARİŞ VER</button>
      </div>
    </div>
  );
}

export default App;
