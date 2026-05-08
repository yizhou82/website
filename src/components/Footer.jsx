import './Footer.css'

export default function Footer() {
  const year = new Date().getFullYear()
  return (
    <footer className="footer">
      <div className="container footer__inner">
        <p className="footer__tagline">
          Designed &amp; built by Yizhou · Powered by curiosity (and pasta)
        </p>
        <span className="footer__copy">© {year}</span>
      </div>
    </footer>
  )
}
