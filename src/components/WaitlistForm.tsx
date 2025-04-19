
import { useState } from "react";
import { useToast } from "@/components/ui/use-toast";

export const WaitlistForm = () => {
  const [email, setEmail] = useState("");
  const [inviteCode, setInviteCode] = useState("");
  const [showInviteCode, setShowInviteCode] = useState(false);
  const [isSubmitting, setIsSubmitting] = useState(false);
  const { toast } = useToast();

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    setIsSubmitting(true);

    try {
      const response = await fetch("https://formsubmit.co/giddens1@gmail.com", {
        method: "POST",
        headers: {
          "Content-Type": "application/json",
          Accept: "application/json",
        },
        body: JSON.stringify({
          email,
          inviteCode: inviteCode || "No invite code",
          _subject: "New Gift-X Waitlist Signup!",
        }),
      });

      if (response.ok) {
        toast({
          title: "You're in!",
          description: "We'll keep you posted.",
        });
        setEmail("");
        setInviteCode("");
      } else {
        throw new Error("Submission failed");
      }
    } catch (error) {
      toast({
        title: "Oops!",
        description: "Something went wrong. Please try again.",
        variant: "destructive",
      });
    } finally {
      setIsSubmitting(false);
    }
  };

  return (
    <form onSubmit={handleSubmit} className="w-full max-w-md space-y-4">
      <div className="space-y-2">
        <input
          type="email"
          value={email}
          onChange={(e) => setEmail(e.target.value)}
          placeholder="Enter your email address"
          required
          className="w-full px-4 py-3 rounded-lg border border-gray-200 focus:outline-none focus:ring-2 focus:ring-giftx-purple"
        />
      </div>

      <div className="space-y-2">
        <button
          type="button"
          onClick={() => setShowInviteCode(!showInviteCode)}
          className="text-sm text-giftx-purple hover:text-giftx-teal transition-colors"
        >
          Have an invite code?
        </button>

        {showInviteCode && (
          <input
            type="text"
            value={inviteCode}
            onChange={(e) => setInviteCode(e.target.value)}
            placeholder="Enter your invite code"
            className="w-full px-4 py-3 rounded-lg border border-gray-200 focus:outline-none focus:ring-2 focus:ring-giftx-purple"
          />
        )}
      </div>

      <button
        type="submit"
        disabled={isSubmitting}
        className="w-full py-3 px-6 rounded-lg bg-giftx-purple text-white font-semibold hover:bg-giftx-purple/90 transition-colors disabled:opacity-50"
      >
        {isSubmitting ? "Joining..." : "Join Waitlist"}
      </button>

      <p className="text-sm text-gray-500 text-center">
        No spam. No noise. Just your invite when the time is right.
      </p>
    </form>
  );
};
