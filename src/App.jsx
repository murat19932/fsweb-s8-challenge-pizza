import { useState } from 'react';
import './App.css';

function App() {
  const [count, setCount] = useState(1);
  const [selectedIngredients, setSelectedIngredients] = useState([]);

  const handleIngredientChange = (event) => {
    const value = event.target.value;
    if (selectedIngredients.includes(value)) {
      setSelectedIngredients(selectedIngredients.filter((ingredient) => ingredient !== value));
    } else {
      if (selectedIngredients.length < 10) {
        setSelectedIngredients([...selectedIngredients, value]);
      }
    }
  };

  const increaseQuantity = () => {
    setCount(count + 1);
  };

  const decreaseQuantity = () => {
    if (count > 1) setCount(count - 1);
  };

  return (
    <>
      <div className="full-width-header">
        <h1>Teknolojik Yemekler</h1>
        <p>Anasayfa / Sipariş Oluştur</p>
      </div>
      <div className="card">
        <h2>Position Absolute Acı Pizza</h2>
        <p className="price">85.50₺</p>
        <p className="description">
          Frontend Dev olarak hala position:absolute kullanıyorsanız bu çok acı bir pizza. Pizza sosunun, çerçeve ve genel kod dizisi gibi özel malzemelerle kaplandığı, daha sonra geleneksel olarak en üstte yer alan bir frontend pizza.
        </p>
        <form>
          <div className="form-section">
            <label>Ek Malzemeler:</label>
            <p className="info-text">En Fazla 10 malzeme seçebilirsiniz. 5₺</p>
            <div className="checkbox-group">
              {['Pepperoni', 'Sosis', 'Kanada Jambonu', 'Tavuk Izgara', 'Soğan', 'Domates', 'Mısır', 'Sucuk', 'Jalapeno', 'Sarımsak', 'Biber', 'Ananas', 'Kabak'].map((ingredient) => (
                <label key={ingredient} className="checkbox-label">
                  <input
                    type="checkbox"
                    value={ingredient}
                    onChange={handleIngredientChange}
                    checked={selectedIngredients.includes(ingredient)}
                  />
                  {ingredient}
                </label>
              ))}
            </div>
          </div>
          <div className="form-section">
            <label>Sipariş Notu:</label>
            <textarea placeholder="Siparişine eklemek istediğin bir not var mı?" />
          </div>
          <div className="order-summary-container">
            <div className="order-summary-box">
              <h3>Sipariş Toplamı</h3>
              <p>Seçimler: {selectedIngredients.length * 5}.00₺</p>
              <p className="total-price">Toplam: {(85.50 + selectedIngredients.length * 5).toFixed(2)}₺</p>
            </div>
          </div>
          <div className="quantity-control">
            <button type="button" onClick={decreaseQuantity}>-</button>
            <span>{count}</span>
            <button type="button" onClick={increaseQuantity}>+</button>
          </div>
          <button className="order-button">SİPARİŞ VER</button>
        </form>
      </div>
    </>
  );
}

export default App;
