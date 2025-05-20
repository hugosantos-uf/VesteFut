import { Share } from "lucide-react";

export function ShareButton() {
  function handleShare() {
    navigator.clipboard.writeText(window.location.href);
    alert("Link copiado para a área de transferência!");
  }

  return (
    <button
      onClick={handleShare}
      className="flex items-center gap-1 hover:text-green-600"
    >
      <Share size={20} />
      Compartilhar
    </button>
  );
}
