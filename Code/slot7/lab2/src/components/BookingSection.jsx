import React from "react";

function BookingSection() {
  return (
    <section className="container my-5 text-white">
      <h2 className="mb-4 text-center">Book Your Table</h2>
      <form>
        <div className="row mb-3">
          <div className="col-md-4">
            <input type="text" className="form-control" placeholder="Your Name *" />
          </div>
          <div className="col-md-4">
            <input type="email" className="form-control" placeholder="Your Email *" />
          </div>
          <div className="col-md-4">
            <select className="form-control">
              <option>Select a Service</option>
              <option>Dine-In</option>
              <option>Takeaway</option>
              <option>Delivery</option>
            </select>
          </div>
        </div>
        <textarea className="form-control mb-3" placeholder="Please write your comment" rows="4"></textarea>
        <button className="btn btn-warning">Send Message</button>
      </form>
    </section>
  );
}

export default BookingSection;
