
import { WaitlistForm } from "@/components/WaitlistForm";

const Index = () => {
  return (
    <div className="min-h-screen bg-giftx-gray font-inter">
      <div className="container max-w-6xl mx-auto px-4 py-12 md:py-20">
        <div className="flex flex-col items-center text-center animate-fade-in">
          <img
            src="/lovable-uploads/50eb66d7-d6b3-4d04-972c-b4093314f991.png"
            alt="Gift-X Logo"
            className="w-48 mb-12"
          />

          <h1 className="text-4xl md:text-5xl font-bold text-giftx-navy mb-6 leading-tight">
            Make space in your wallet for what{" "}
            <span className="text-giftx-purple">YOU</span> really{" "}
            <span className="text-giftx-purple">WANT</span>.
          </h1>

          <p className="text-xl md:text-2xl text-giftx-navy/80 mb-6">
            Dig out your unused gift cards… you're going to love what's coming soon.
          </p>

          <p className="text-lg text-giftx-navy/70 mb-12 max-w-2xl">
            Gift-X is the marketplace to buy, sell, and store gift cards securely. Join 
            the waitlist and be the first to know.
          </p>

          <WaitlistForm />
        </div>
      </div>

      <footer className="text-center py-8 text-giftx-navy/60 text-sm">
        © 2025 Gift-X Inc. All rights reserved.
      </footer>
    </div>
  );
};

export default Index;
