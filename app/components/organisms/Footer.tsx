import React from "react";

import FooterText from "../atoms/FooterText";

export default function Footer() {
  return (
    <footer className="flex justify-center w-full bg-gray-100 py-8 px-6 mt-12">
      <div className="max-w-6xl mx-auto text-center">
        <h2 className="text-lg font-semibold mb-2 text-gray-700">VestFut</h2>
        <FooterText>
          Camisas oficiais dos principais clubes do mundo.
        </FooterText>
        <FooterText>© 2025 VestFut. Todos os direitos reservados.</FooterText>
      </div>
    </footer>
  );
}
