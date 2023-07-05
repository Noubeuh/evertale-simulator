import React from "react";
import Navigation from "../../Components/Navigation/Navigation";
import Logo from '../../Components/Logo';

type ClientsProps = {};

const Clients = ({ }: ClientsProps) => {
  return (
    <main id="content">
      <Logo />
      <Navigation />
      <section className="main-container">
          <h1>Clients</h1>
      </section>
    </main>
  );
};

export default Clients;