import React from "react";
import CountdownTimer from "./components/CountdownTimer";
import LetterFromSecretariat from "./components/LetterFromSecretariat";
import SecretariatSection from "./components/SecretariatSection";

const App = () => {
  return (
    <div className="min-h-screen bg-gradient-to-r from-gray-900 via-gray-800 to-gray-900 text-white">
      <CountdownTimer />
      <LetterFromSecretariat />
      <SecretariatSection />
    </div>
  );
};

export default App;
