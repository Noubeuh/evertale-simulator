import React from "react";
import Navigation from "../../Components/Navigation/Navigation";
import Logo from '../../Components/Logo';

type SettingsProps = {};

const Settings = ({ }: SettingsProps) => {
  return (
    <main id="content">
      <Logo />
      <Navigation />
      <section className="main-container">
          <h1>Paramètres</h1>
      </section>
    </main>
  );
};

export default Settings;