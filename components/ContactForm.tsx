import { useState } from "react";

export default function ContactForm() {
  const [status, setStatus] = useState<string | null>(null);

  return (
    <form
      className="grid grid-cols-1 gap-4 max-w-xl"
      action="https://formspree.io/f/mwkgrzqa"
      method="POST"
      onSubmit={() => setStatus("Sending...")}
    >
      <input className="border border-gray-300 rounded px-3 py-2" type="text" name="name" placeholder="Your Name" required />
      <input className="border border-gray-300 rounded px-3 py-2" type="email" name="email" placeholder="Email" required />
      <input className="border border-gray-300 rounded px-3 py-2" type="text" name="subject" placeholder="Subject" />
      <textarea className="border border-gray-300 rounded px-3 py-2 min-h-[140px]" name="message" placeholder="Tell me about your project..." required />
      <button className="bg-blue-600 text-white rounded px-4 py-2 hover:bg-blue-700 transition" type="submit">Send Message</button>
      {status && <p className="text-sm text-gray-600">{status}</p>}
    </form>
  );
}


