import MotivationHeader from "../../components/motivate/MotivationHeader";
import MotivationPage from "../../components/motivate/MotivationPage";
import React from "react";

const motivate: React.FC = () => {
  return (
    <div className="bg-gradient-to-r from-black to-amber-700 min-h-screen  items-center justify-center">
      <MotivationHeader />
      <MotivationPage />
    </div>
  );
};

export default motivate;
