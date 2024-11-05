import { useState } from 'react';
import './App.css';

function App() {
  const [count, setCount] = useState(1);
  /*  pizza başına sabit fiyat*/
  const basePrice = 85.50;
  /* secilen ek malzemeleri tutan state */

  const [extras, setExtras] = useState([]);
  /* eklenebilir malzeme seçenekleri */
  const extraOptions = ['Pepperoni', 'Sosis', 'Kanada Jambonu', 'Tavuk Izgara', 'Soğan', 'Domates', 'Mısır', 'Sucuk', 'Jalapeno', 'Sarmısak', 'Biber', 'Kabak', 'Ananas'];

  const handleExtraChange = (option) => {
    if (extras.includes(option)) {
      setExtras(extras.filter((item) => item !== option));
    } else if (extras.length < 10) {
      setExtras([...extras, option]);
    }
  };
  /* Toplam fiyat hesaplaması Baz fiyat çarpı sipariş sayısı ve her ekstra malzeme için 5₺ ekleniyor.*/

  const totalPrice = basePrice * count + extras.length * 5; 

  return (
    <div id="root">
      <header className="header">
        <h1>TEKNOLOJIK YEMEKLER</h1>
        <nav>
          <small>Ana Sayfa</small> &gt; <small>Sipariş Oluştur</small>
        </nav>
      </header>

      <div className="card">
        <div className="options-row">
          <div className="option-section column">
            <h4>Boyut Seç</h4>
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
            <h4>Hamur Seç</h4>
            <select>
              <option value="">Hamur Kalınlığı</option>
              <option value="İnce">İnce</option>
              <option value="Orta">Orta</option>
              <option value="Kalın">Kalın</option>
            </select>
          </div>
        </div>

        <h3>Ek Malzemeler</h3>
        <p>En Fazla 10 malzeme seçebilirsiniz.</p>
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

        <h3>Sipariş Notu</h3>
        <textarea placeholder="Siparişine eklemek istediğin bir not var mı?"></textarea>
      </div>

      <div className="order-summary">
        <p>Seçimler: {extras.length * 5}₺</p>
        <p>Toplam: {totalPrice.toFixed(2)}₺</p>
      </div>

      <div className="order-controls">
        <button onClick={() => setCount(count > 1 ? count - 1 : 1)}>-</button>
        <input type="text" value={count} readOnly />
        <button onClick={() => setCount(count + 1)}>+</button>
        <button className="order-button">Sipariş Ver</button>
      </div>
    </div>
  );
}

export default App;
