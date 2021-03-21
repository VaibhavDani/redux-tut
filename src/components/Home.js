import React from 'react';
function Home() {
  return (
    <div>
      <div className="add-to-cart">
        <img src="https://www.flaticon.com/premium-icon/icons/svg/649/649931.svg" />
      </div>
      <h1>Home component</h1>
      <div className="cart-wrapper">
        <div className="img-wrapper item">
          <img
            src="https://www.fonewalls.com/wp-content/uploads/1242x2688-Background-HD-Wallpaper-034.jpg"
            alt="I phone image"
          />
        </div>
        <div className="text-wrapper item">
          <span> I- Phone</span>
          <span>Price: $1000.00 </span>
        </div>
        <div className="btn-wrapper item">
          <button>Add to Cart</button>
        </div>
      </div>
    </div>
  );
}

export default Home;
