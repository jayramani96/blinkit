import React from 'react';

const Footer = () => {
  const useLinks = [
    "About",
    "Careers",
    "Blog",
    "Press",
    "Lead",
    "Value",
    "Privacy",
    "Terms",
    "FAQs",
    "Security",
    "Mobile",
    "Contact",
    "Partner",
    "Franchise",
    "Seller",
    "Warehouse",
    "Deliver",
    "Resources",
  ];
  const column1Links = useLinks.slice(0, 6);
  const column2Links = useLinks.slice(6, 12);
  const column3Links = useLinks.slice(12);

  const categories = [
    "Vegetables & Fruits",
    "Cold Drinks & Juices",
    "Bakery & Biscuits",
    "Dry Fruits, Masala & Oil",
    "Paan Corner",
    "Cleaning Essentials",
    "Personal Care",
    "Electronics & Electricals",
    "Navratri Specials",
    "Dairy & Breakfast",
    "Instant & Frozen Food",
    "Sweet Tooth",
    "Sauces & Spreads",
    "Baby Care",
    "Home & Office",
    "Pet Care",
    "Toys & Games",
    "Munchies",
    "Tea, Coffee & Health Drinks",
    "Atta, Rice & Dal",
    "Organic & Premium",
    "Pharma & Wellness",
    "Ice Creams & Frozen Desserts",
    "Beauty & Cosmetics",
    "Print Store",
  ];
  const column1categories = categories.slice(0, 8);
  const column2categories = categories.slice(8, 16);
  const column3categories = categories.slice(16, 24);

  return (
    <footer className="bg-light text-muted py-4">
      <div className="container">
        <div className="row">
          {/* Useful Links Section */}
          <div className="col-md-6 col-lg-4">
            <h5 className="fw-bold mb-3">Useful Links</h5>
            <div className="row">
              <div className="col-4">
                <ul className="list-unstyled">
                  {column1Links.map((link) => (
                    <li key={link}>
                      <a href="#" className="text-muted text-decoration-none">{link}</a>
                    </li>
                  ))}
                </ul>
              </div>
              <div className="col-4">
                <ul className="list-unstyled">
                  {column2Links.map((link) => (
                    <li key={link}>
                      <a href="#" className="text-muted text-decoration-none">{link}</a>
                    </li>
                  ))}
                </ul>
              </div>
              <div className="col-4">
                <ul className="list-unstyled">
                  {column3Links.map((link) => (
                    <li key={link}>
                      <a href="#" className="text-muted text-decoration-none">{link}</a>
                    </li>
                  ))}
                </ul>
              </div>
            </div>
          </div>

          {/* Categories Section */}
          <div className="col-md-6 col-lg-4">
            <div className="d-flex justify-content-between align-items-center mb-3">
              <h5 className="fw-bold mb-0">Categories</h5>
              <a href="#" className="text-success text-decoration-none">See all</a>
            </div>
            <div className="row">
              <div className="col-4">
                <ul className="list-unstyled">
                  {column1categories.map((link) => (
                    <li key={link}>
                      <a href="#" className="text-muted text-decoration-none">{link}</a>
                    </li>
                  ))}
                </ul>
              </div>
              <div className="col-4">
                <ul className="list-unstyled">
                  {column2categories.map((link) => (
                    <li key={link}>
                      <a href="#" className="text-muted text-decoration-none">{link}</a>
                    </li>
                  ))}
                </ul>
              </div>
              <div className="col-4">
                <ul className="list-unstyled">
                  {column3categories.map((link) => (
                    <li key={link}>
                      <a href="#" className="text-muted text-decoration-none">{link}</a>
                    </li>
                  ))}
                </ul>
              </div>
            </div>
          </div>

          {/* Download App and Social Media */}
          <div className="col-lg-4">
            <div className="mb-3">
              <h5 className="fw-bold mb-3">Download App</h5>
              <a href="#">
                <img src="/src/assets/googleplay.webp" alt="Google Play" className="me-2" style={{ height: '40px' }} />
              </a>
              <a href="#">
                <img src="/src/assets/appstore.webp" alt="App Store" style={{ height: '40px' }} />
              </a>
            </div>
            <div>
              <h5 className="fw-bold mb-3">Follow Us</h5>
              {["facebook", "twitter", "instagram", "linkedin", "threads"].map((platform) => (
                <a
                  href="#"
                  key={platform}
                  className="text-muted me-3"
                >
                  <i className={`fab fa-${platform} fa-lg`}></i>
                </a>
              ))}
            </div>
          </div>
        </div>

        {/* Footer Disclaimer */}
        <div className="mt-4 text-center small text-muted">
          <p>
            &copy; Blink Commerce Private Limited, 2016-2024
          </p>
          <p>
            “Blinkit” is owned & managed by "Blink Commerce Private Limited" and is not related, linked or interconnected in
            whatsoever manner or nature, to “GROFFR.COM” which is a real estate services business operated by “Redstone
            Consultancy Services Private Limited”.
          </p>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
