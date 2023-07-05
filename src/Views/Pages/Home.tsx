import React from "react";
import Navigation from "../../Components/Navigation/Navigation";
import Logo from '../../Components/Logo';

type HomeProps = {};

const Home = ({ }: HomeProps) => {
  return (
    <main id="content">
      <Logo />
      <Navigation />
      <section className="main-container">
          <h1>Accueil</h1>
      </section>
    </main>
  );
};

export default Home;