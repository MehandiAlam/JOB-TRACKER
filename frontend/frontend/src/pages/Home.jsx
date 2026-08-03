import { useState } from "react";
import { Link } from "react-router-dom";
import {
    Briefcase,
    ChartColumn,
    CalendarClock,
    Target,
    Menu,
    X
} from "lucide-react";

import "../css/Home.css";

function Home() {

    const [menuOpen, setMenuOpen] = useState(false);

    return (

        <div className="home-page">

            <div className="overlay"></div>

            <nav className="navbar">

                <div className="logo">

                    <img
                        src="/logo.png"
                        alt="TrackerMan"
                    />

                    <div className="logo-text">

                        <h2>
                            TRACK<span>MAN</span>
                        </h2>

                        <p>
                            Track. Manage. Achieve.
                        </p>

                    </div>

                </div>

                <div className="nav-links">

                    <a href="#">Home</a>

                    <a href="#features">Features</a>

                    <a href="#">About</a>

                    <a href="#">Contact</a>

                </div>

                <div className="nav-buttons">

                    <Link
                        to="/Login"
                        className="nav-login"
                    >
                        Login
                    </Link>

                    <Link
                        to="/Signup"
                        className="nav-signup"
                    >
                        Create Account
                    </Link>

                </div>

                <button
                    className="nav-toggle"
                    aria-label="Toggle menu"
                    aria-expanded={menuOpen}
                    onClick={() => setMenuOpen((open) => !open)}
                >
                    {menuOpen ? <X size={26} /> : <Menu size={26} />}
                </button>

            </nav>

            <div className={`mobile-menu ${menuOpen ? "open" : ""}`}>

                <a href="#" onClick={() => setMenuOpen(false)}>Home</a>

                <a href="#features" onClick={() => setMenuOpen(false)}>Features</a>

                <a href="#" onClick={() => setMenuOpen(false)}>About</a>

                <a href="#" onClick={() => setMenuOpen(false)}>Contact</a>

                <Link
                    to="/Login"
                    className="nav-login"
                    onClick={() => setMenuOpen(false)}
                >
                    Login
                </Link>

                <Link
                    to="/Signup"
                    className="nav-signup"
                    onClick={() => setMenuOpen(false)}
                >
                    Create Account
                </Link>

            </div>

            <section className="hero">

                <div className="hero-content">

                    <span className="tagline">

                        TRACK YOUR CAREER

                    </span>

                    <h1>

                        Organize Every Application.

                        <br />

                        Own Every Opportunity.

                    </h1>

                    <h3>

                        Recruitment Management System

                    </h3>

                    <p>

                        Track your applications, monitor interview progress,
                        manage opportunities and stay one step ahead throughout
                        your job search.

                    </p>

                </div>

            </section>

            <section
                className="features"
                id="features"
            >

                <div className="feature-card">

                    <Briefcase className="feature-icon" />

                    <h3>
                        Track Jobs
                    </h3>

                    <p>
                        Save every application in one place.
                    </p>

                </div>

                <div className="feature-card">

                    <ChartColumn className="feature-icon" />

                    <h3>
                        Progress
                    </h3>

                    <p>
                        Follow every stage of recruitment.
                    </p>

                </div>

                <div className="feature-card">

                    <CalendarClock className="feature-icon" />

                    <h3>
                        Timeline
                    </h3>

                    <p>
                        Never miss interview schedules.
                    </p>

                </div>

                <div className="feature-card">

                    <Target className="feature-icon" />

                    <h3>
                        Dream Job
                    </h3>

                    <p>
                        Stay focused until you get hired.
                    </p>

                </div>

            </section>

        </div>

    );

}

export default Home;