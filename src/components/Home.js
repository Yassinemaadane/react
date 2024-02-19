import React from "react";
import { Link } from "react-router-dom";
import "./styles.css";
import planif from "../images/planif.png"
import concept from "../images/concept.png"
import vol from "../images/vol.png"



const Home = () => {
    return (
        <div>
            <header className="header">
                <h1>Bienvenue sur TravelEase</h1>
                <p>réservation innovant pour une expérience de voyage simplifiée.</p>
            </header>

            <main className="main-content">
                <section className="section">
                    <h2>Services de Voyage Simplifiés</h2>
                    <p>Accédez à une gamme étendue de services de voyage depuis le confort de votre domicile..</p>
                    <div className="services-list">
                        <div className="service">
                        <img src={planif} alt="Planification de Voyage" />
                            <h3>Planification de Voyage</h3>
                            <p>Organisez vos itinéraires et réservations en toute simplicité..</p>
                        </div>
                        <div className="service">
                        <img src={concept} alt="Planification de Voyage" />
                            <h3>Réservations d'Hébergement</h3>
                            <p>Réservez votre hébergement idéal en quelques clics.</p>
                        </div>
                        <div className="service">
                        <img src={vol} alt="Planification de Voyage" />
                            <h3>Réservations de Vol</h3>
                            <p>Trouvez les vols les plus pratiques et réservez instantanément..</p>
                        </div>
                        {/* Ajoutez d'autres services si nécessaire */}
                    </div>
                </section>

                <section className="section">
                    
                    <div className="testimonials">
                        <h2>Avis de nos clients</h2>
                        <blockquote>
                    <p>Abdelah Achiban</p>        
                            "TravelEase a simplifié mes vacances. Des réservations aux activités, tout est fluide."
                        </blockquote>
                        <blockquote>
                            <p>Aymen Idrissi</p>
                            "Le service clientèle est remarquable, toujours là pour répondre à mes questions."
                        </blockquote>
                        {/* Ajoutez d'autres témoignages si nécessaire */}
                    </div>
                </section>

                <section className="section call-to-action">
                    <h2>Rejoignez TravelEase Aujourd'hui</h2>
                    <p>Embarquez dans votre prochaine aventure avec TravelEase et découvrez un monde de possibilités sans limites.</p>
                    <button className="btn btn-primary">
                    <Link to={"/register"} className="nav-link">
                    Inscrivez-vous Maintenant
                            </Link>
                        </button>
                    <button className="btn btn-secondary">
                    <Link to={"/login"} className="nav-link">
                    Connexion
                            </Link>
                        </button>
                </section>
            </main>

            <footer className="footer">
                <p>&copy; {new Date().getFullYear()} TravelEase. Tous droits réservés.</p>
            </footer>
        </div>
    );
};

export default Home;
