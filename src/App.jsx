import { useState } from 'react'
import atelierImage from './assets/luxe-atelier.png'
import './App.css'

const collection = [
  {
    title: 'Noir Evening Tailoring',
    type: 'Private Preview',
    detail: 'Hand-finished wool barathea with satin peak lapels.',
  },
  {
    title: 'Atelier Silk Capsule',
    type: 'Members Reserve',
    detail: 'Ivory silk separates cut for intimate salon appointments.',
  },
  {
    title: 'Gold Hardware Edit',
    type: 'Limited Access',
    detail: 'Sculptural accessories produced in numbered quantities.',
  },
]

const reservations = ['Atelier fitting', 'Private collection viewing', 'Concierge styling']

function App() {
  const [reservationType, setReservationType] = useState(reservations[0])

  return (
    <main className="luxe-app">
      <section className="login-screen" aria-labelledby="login-title">
        <div className="hero-media" aria-hidden="true">
          <img src={atelierImage} alt="" />
        </div>

        <nav className="topbar" aria-label="Members navigation">
          <a className="brand-mark" href="#login-title">LUXE MEMBERS</a>
          <a className="nav-link" href="#reservation">Reserve</a>
        </nav>

        <div className="login-content fade-in">
          <p className="eyebrow">Private Fashion House</p>
          <h1 id="login-title">LUXE MEMBERS</h1>
          <p className="login-copy">
            Enter a private world of couture previews, personal appointments, and
            invitation-only collection access.
          </p>

          <form className="login-card" aria-label="Member login">
            <label>
              Member Number
              <input type="text" placeholder="LM-0007" autoComplete="username" />
            </label>
            <label>
              Access Code
              <input type="password" placeholder="Private code" autoComplete="current-password" />
            </label>
            <button className="gold-button" type="button">Enter Members Salon</button>
          </form>
        </div>
      </section>

      <section className="dashboard section-shell" aria-labelledby="dashboard-title">
        <div className="section-heading fade-in">
          <p className="eyebrow">Members Dashboard</p>
          <h2 id="dashboard-title">Your private season, curated.</h2>
        </div>

        <div className="metrics-grid">
          <article className="premium-card">
            <span>Next Appointment</span>
            <strong>May 28</strong>
            <p>Maison salon, Ginza. Personal stylist confirmed.</p>
          </article>
          <article className="premium-card">
            <span>Collection Access</span>
            <strong>24 Looks</strong>
            <p>Reserved previews available before public presentation.</p>
          </article>
          <article className="premium-card">
            <span>Concierge Status</span>
            <strong>Black Tier</strong>
            <p>Priority fittings, alterations, and evening delivery.</p>
          </article>
        </div>
      </section>

      <section className="gallery section-shell" aria-labelledby="gallery-title">
        <div className="gallery-intro fade-in">
          <p className="eyebrow">Private Collection Gallery</p>
          <h2 id="gallery-title">Salon pieces held for the inner circle.</h2>
        </div>

        <div className="collection-grid">
          {collection.map((piece, index) => (
            <article className="collection-card" key={piece.title}>
              <div className={`collection-image image-${index + 1}`} aria-hidden="true">
                <img src={atelierImage} alt="" />
              </div>
              <div className="collection-copy">
                <span>{piece.type}</span>
                <h3>{piece.title}</h3>
                <p>{piece.detail}</p>
              </div>
            </article>
          ))}
        </div>
      </section>

      <section className="reservation section-shell" id="reservation" aria-labelledby="reservation-title">
        <div className="reservation-panel">
          <div className="reservation-copy fade-in">
            <p className="eyebrow">Reservation Form</p>
            <h2 id="reservation-title">Request a private appointment.</h2>
            <p>
              Select your preferred salon service and the concierge team will prepare
              the collection room before arrival.
            </p>
          </div>

          <form className="reservation-form">
            <label>
              Full Name
              <input type="text" placeholder="Alexandra Laurent" />
            </label>
            <label>
              Email
              <input type="email" placeholder="member@luxemembers.com" />
            </label>
            <div className="service-selector" aria-label="Reservation type">
              {reservations.map((item) => (
                <button
                  className={reservationType === item ? 'active' : ''}
                  key={item}
                  onClick={() => setReservationType(item)}
                  type="button"
                >
                  {item}
                </button>
              ))}
            </div>
            <label>
              Preferred Date
              <input type="date" />
            </label>
            <label>
              Notes
              <textarea placeholder="Sizing, collection interests, arrival preferences" />
            </label>
            <button className="gold-button" type="button">Submit Reservation</button>
          </form>
        </div>
      </section>
    </main>
  )
}

export default App
