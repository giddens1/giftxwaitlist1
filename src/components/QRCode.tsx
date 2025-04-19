
import { QrCode } from "lucide-react";

export const QRCode = () => {
  return (
    <div className="hidden lg:flex flex-col items-center fixed bottom-8 right-8 bg-white p-4 rounded-lg shadow-lg animate-fade-in">
      <a href="https://waitlist.giftx.ca" target="_blank" rel="noopener noreferrer">
        <QrCode className="w-32 h-32 text-giftx-purple" />
      </a>
      <p className="mt-2 text-sm text-giftx-navy font-medium">
        Scan to join from your phone
      </p>
    </div>
  );
};
