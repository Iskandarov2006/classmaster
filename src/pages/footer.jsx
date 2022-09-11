import React from "react";
import { Link } from "react-router-dom";
import '../css/footer.css'
function Footer() {
  return (
    <div>
      <div className="footer">
        <div className="about">
          <h3>About</h3>
          <p>
            Lorem ipsum dolor, sit amet consectetur adipisicing elit.
            Voluptatibus, inventore deserunt? Nihil assumenda facere ducimus
            quia incidunt eligendi doloribus nostrum temporibus obcaecati, nobis
            asperiores, aspernatur quibusdam eos unde.
          </p>
        </div>
        <div className="navigator">
          <h3>Nav</h3>
          <div className="FooterNav">
            <div className="FooterUl">
              <Link className="Link" to="/">Home</Link>
              <Link className="Link" to="/">About</Link>
              <Link className="Link" to="/">BLog</Link>
            </div>
          </div>
        </div>
        <div className="boglanish">
          <h3>Bog'lanish</h3>
          <div className="telefon">
            <a href="tel: +998999543001"><i className="fas fa-phone"></i> +998 99 954 30 01</a>
          </div>
          <div className="telegram">
            <a href=""><i className="fab fa-telegram"></i> Telegram</a>
          </div>
          <div className="joylashuv">
            <a href="https://t.me/aurumhunter"><i class="fa-solid fa-location-dot"></i> Joylashuv</a>
          </div>
        </div>
        <div className="form">
          <h3>Adminga murojat</h3>
          <form action="" method="GET">
            <input type="email" placeholder="Emailingizni kiriting" required />
            <input
              type="text"
              minLength="15"
              maxLength="100"
              placeholder="Murojatingizni yozing"
            />
            <button>Yuborish</button>
          </form>
        </div>
      </div>
    </div>
  );
}

export default Footer;
