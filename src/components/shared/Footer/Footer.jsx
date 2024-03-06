import Logo from '../../../assets/Logo.png';
import './Footer.scss';
import CodeCell from '../../../assets/CodeCell.png';
import CSI from '../../../assets/CSI.png';

export default function Footer() {
  return (
    <section>
      <footer className="footer">
        <div className="footer-content">

          <div className="codecell">
            <img src={CodeCell} alt="" />
            <div className="socials">
              <a href="https://www.instagram.com/codecell_vit/" target="_blank" rel="noreferrer">
                <i className="fab fa-instagram"></i>
              </a>
              <a href="https://www.linkedin.com/company/codecell-vit/" target="_blank" rel="noreferrer">
                <i className="fab fa-linkedin"></i>
              </a>
              <a href="https://www.facebook.com/codecell.vit" target="_blank" rel="noreferrer">
                <i className="fab fa-facebook"></i>
              </a>
              <a href="https://twitter.com/codecell_vit" target="_blank" rel="noreferrer">
                <i className="fab fa-twitter"></i>
              </a>
            </div>

          </div>
          <div className="devopia"><img src={Logo} alt="" /></div>
          <div className="csi">
            <img src={CSI} alt="" />
            <div className="socials">
              <a href="https://www.instagram.com/codecell_vit/" target="_blank" rel="noreferrer">
                <i className="fab fa-instagram"></i>
              </a>
              <a href="https://www.linkedin.com/company/codecell-vit/" target="_blank" rel="noreferrer">
                <i className="fab fa-linkedin"></i>
              </a>
              <a href="https://www.facebook.com/codecell.vit" target="_blank" rel="noreferrer">
                <i className="fab fa-facebook"></i>
              </a>
              <a href="https://twitter.com/codecell_vit" target="_blank" rel="noreferrer">
                <i className="fab fa-twitter"></i>
              </a>
            </div>

          </div>
        </div>
      </footer>
    </section>
  )
} 