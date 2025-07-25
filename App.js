import React, { useState } from 'react';
import './App.css';

const plantsData = [
  // ... (data remains the same)
  { id: 1, name: 'Fiddle Leaf Fig', category: 'Indoor', price: 30, image: 'https://images.unsplash.com/photo-1501004318641-b39e6451bec6?auto=format&fit=crop&w=400&q=80' },
  { id: 2, name: 'Snake Plant', category: 'Indoor', price: 25, image: 'https://snappyliving.com/wp-content/uploads/2023/05/snake-plant.jpg' },
  { id: 3, name: 'thimble Plant ', category: 'Succulents', price: 18, image: 'https://i.pinimg.com/originals/2a/ca/dc/2acadc81346b4d087fbcc1cbbab93bab.jpg' },
  { id: 4, name: 'Aloe Vera', category: 'Succulents', price: 20, image: 'https://img.staticmb.com/mbcontent/images/uploads/2023/12/How-to-grow-aloe-vera-plant-at-home.jpg' },
  { id: 5, name: 'Monstera Deliciosa', category: 'Indoor', price: 35, image: 'https://i.pinimg.com/originals/02/44/09/0244091b32b048107fb95e98793eb989.jpg' },
  { id: 6, name: 'Boston Fern', category: 'Outdoor', price: 22, image: 'https://images.esellerpro.com/3048/I/619/66/Nephrolepis%20boston%20fern-10.jpg' },
  { id: 7, name: 'Lavender', category: 'Outdoor', price: 15, image: 'https://www.gardeningexpress.co.uk/media/product/ab7/lavender-x-intermedia-sensational-lavandula-large-flowered-0d8.jpg' },
  { id: 8, name: ' Chinese Dunce Cap Plant', category: 'Succulents', price: 23, image: 'https://worldofsucculents.com/wp-content/uploads/2017/03/Orostachys-iwarenge-Chinese-Dunce-Cap1-702x527.jpg' },
  { id: 9, name: 'Echinopsis Plant', category: 'Succulents', price: 37, image: 'https://plant-growing.com/wp-content/uploads/2020/01/Echinopsis-huascha2.jpg' },
  { id: 10, name: 'Aeonium decorum Plant', category: 'Succulents', price: 42, image: 'https://plantsam.com/wp-content/uploads/2013/02/Aeonium-decorum.jpg' },
  { id: 11, name: 'graptosedum francesco baldi  Plant', category: 'Succulents', price: 37, image: 'https://tse3.mm.bing.net/th?id=OIP.IEBS4_n_0v_Nb5tEKFlQoAHaE0&pid=Api&P=0&h=180' },
  { id: 12, name: ' pachira aquatica Plant', category: 'Indoor', price: 37, image: 'https://m.media-amazon.com/images/I/61BCdviQUfL._AC_SL1000_.jpg' },
  { id: 13, name: 'phoenix roebellini Plant', category: 'Indoor', price: 56, image: 'https://tse2.mm.bing.net/th?id=OIP.bSABaGeXRsrV5iCfRiv51wHaJo&pid=Api&P=0&h=180' },
  { id: 14, name: 'yucca elephantipes Plant', category: 'Indoor', price: 64, image: 'https://www.plantencentrumexotica.be/wp-content/uploads/50.038.3.jpg' },
  { id: 15, name: 'Philodendron Pink Princess Plant', category: 'Indoor', price: 50, image: 'https://backyardville.b-cdn.net/wp-content/uploads/2023/05/Philodendron-Pink-Princess-Plant.jpg' },
  { id: 16, name: 'ficus benjamina Plant', category: 'Indoor', price: 68, image: 'https://pcfb.gumlet.io/images/articles/variegated-ficus-benjamina.jpg?w=1200&h=800&s=8ad48f19d95557d2e8d8679e4d46a13a' },
  { id: 17, name: ' Black Rose Succulents Plant', category: 'Succulents', price: 70, image: 'https://asucculent.com/wp-content/uploads/2024/01/Photo-by-Flower-Lover-on-March-12-2019-1024x1024.jpg' },
  { id: 18, name: ' hedgehog Plant', category: 'Succulents', price: 100, image: 'https://www.housedigest.com/img/gallery/how-to-care-for-a-rainbow-hedgehog-cactus/l-intro-1659338329.jpg' },
  { id: 19, name: ' Aglaonema Plant', category: 'Outdoor', price: 120, image: 'https://garden.org/pics/2014-09-29/plantladylin/ac7cf7.jpg' },
  { id: 20, name: 'Pothos  Plant', category: 'Outdoor', price: 130, image: 'https://www.hortzone.com/wp-content/uploads/2020/06/Pothos-Plant-Care-Featured-Image.jpg' },
  { id: 21, name: ' ZZ  Plant', category: 'Outdoor', price: 140, image: 'https://www.houseplantsexpert.com/wp-content/uploads/2023/01/ZZ-Plant-jpg-webp-webp.webp' },
  { id: 22, name: 'Croton  Plant', category: 'Outdoor', price: 150, image: 'https://cdn.diys.com/wp-content/uploads/2020/10/Croton-Magnificent.jpg' },
  { id: 23, name: 'Dracaena Colorama Plant', category: 'Outdoor', price: 160, image: 'https://www.kcplantfactory.com/wp-content/uploads/2022/04/8-inch-colorama-red-spike-margi--1024x1024.jpeg' },
  { id: 24, name: ' Limelight  Plant', category: 'Outdoor', price: 180, image: 'https://www.refinery29.com/images/10554809.jpg' },

];

const categories = ['All', 'Indoor', 'Outdoor', 'Succulents'];

export default function App() {
  const [view, setView] = useState('home'); // home, category
  const [selectedCategory, setSelectedCategory] = useState('All');

  const filteredPlants =
    selectedCategory === 'All'
      ? plantsData
      : plantsData.filter((plant) => plant.category === selectedCategory);

  return (
    <>
      <header>
        <div
          className="logo"
          onClick={() => setView('home')}
          tabIndex={0}
          role="button"
          aria-label="Go to Home"
          onKeyPress={(e) => {
            if (e.key === 'Enter' || e.key === ' ') {
              setView('home');
            }
          }}
        >
         <center> Plant Shop</center> 
        </div>
        <nav>
          <button
            className={view === 'home' ? 'active' : ''}
            onClick={() => setView('home')}
            aria-label="Home"
          >
            Home
          </button>
          <button
            className={view === 'category' ? 'active' : ''}
            onClick={() => {
              setView('category');
              setSelectedCategory('All');
            }}
            aria-label="Categories"
          >
            Category
          </button>
        </nav>
      </header>
      <main>
        {view === 'home' && (
          <section className="home-hero" aria-label="Home">
            <img
              src="https://img.freepik.com/premium-photo/innovative-plant-layer-rack-indoor-outdoor-balcony_1112347-57.jpg"
              alt="PlantShop"
              className="home-image small"
              loading="lazy"
            />
            <h1>Welcome to Plant Shop</h1>
            <p>Your one-stop shop for beautiful plants to brighten your space.</p>
            <p>
              Discover a variety of indoor, outdoor, and succulent plants that fit every style
              and home.
            </p>
            <button
              className="category-btn active"
              style={{ marginTop: '1.5rem' }}
              onClick={() => {
                setView('category');
                setSelectedCategory('All');
              }}
              aria-label="Shop Now"
            >
              Shop Now
            </button>
          </section>
        )}
        {view === 'category' && (
          <section aria-label="Plant Categories">
            <div className="categories" role="tablist" aria-label="Plant Categories">
              {categories.map((cat) => (
                <button
                  key={cat}
                  onClick={() => setSelectedCategory(cat)}
                  className={`category-btn ${
                    selectedCategory === cat ? 'active' : ''
                  }`}
                  role="tab"
                  aria-selected={selectedCategory === cat}
                  tabIndex={selectedCategory === cat ? 0 : -1}
                >
                  {cat}
                </button>
              ))}
            </div>
            <div className="plant-grid">
              {filteredPlants.map((plant) => (
                <article key={plant.id} className="plant-card" aria-label={plant.name}>
                  <img
                    src={plant.image}
                    alt={plant.name}
                    className="plant-image"
                    loading="lazy"
                  />
                  <div className="plant-info">
                    <div className="plant-name">{plant.name}</div>
                    <div className="plant-category">{plant.category}</div>
                  </div>
                </article>
              ))}
              {filteredPlants.length === 0 && <p>No plants found in this category.</p>}
            </div>
          </section>
        )}
      </main>
    </>
  );
}