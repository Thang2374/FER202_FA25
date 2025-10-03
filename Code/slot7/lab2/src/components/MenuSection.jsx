import React from "react";

function MenuSection() {
  return (
    <section className="container my-5">
      <h2 className="text-white mb-4">Our Menu</h2>
      <div className="row g-4">
        {/* Card 1 */}
        <div className="col-md-3">
          <div className="card">
            <img src="/images/Margherita.jpg" className="card-img-top" alt="Margherita Pizza" />
            <div className="card-body text-center">
              <h5 className="card-title">Margherita Pizza</h5>
              <p className="text-danger"><del>$40.00</del> $20.00</p>
              <button className="btn btn-dark">Buy</button>
            </div>
          </div>
        </div>
        {/* Card 2 */}
        <div className="col-md-3">
          <div className="card">
            <img src="/images/Mushroom.jpg" className="card-img-top" alt="Mushroom Pizza" />
            <div className="card-body text-center">
              <h5 className="card-title">Mushroom Pizza</h5>
              <p>$25.00</p>
              <button className="btn btn-dark">Buy</button>
            </div>
          </div>
        </div>
        {/* Card 3 */}
        <div className="col-md-3">
          <div className="card">
            <img src="/images/Hawaiian.jpg" className="card-img-top" alt="Hawaiian Pizza" />
            <div className="card-body text-center">
              <h5 className="card-title">Hawaiian Pizza</h5>
              <p>$10.00</p>
              <button className="btn btn-dark">Buy</button>
            </div>
          </div>
        </div>
        {/* Card 4 */}
        <div className="col-md-3">
          <div className="card">
            <img src="/images/Pesto.jpg" className="card-img-top" alt="Pesto Pizza" />
            <div className="card-body text-center">
              <h5 className="card-title">Pesto Pizza</h5>
              <p className="text-danger"><del>$60.00</del> $30.00</p>
              <button className="btn btn-dark">Buy</button>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}

export default MenuSection;
