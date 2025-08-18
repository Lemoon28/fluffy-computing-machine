import ContactForm from "@/components/ContactForm";

export default function Contact() {
  return (
    <section className="mx-auto max-w-6xl px-4 sm:px-6 lg:px-8 py-14 grid grid-cols-1 md:grid-cols-2 gap-10 items-start">
      <div>
        <h1 className="text-3xl font-bold tracking-tight mb-2">Get In Touch</h1>
        <p className="text-gray-600">Ready to start your next project? Let&apos;s discuss how I can help.</p>
        <div className="mt-8">
          <ContactForm />
        </div>
      </div>
      <div className="text-sm text-gray-600">
        <h2 className="text-lg font-semibold mb-3">Let&apos;s Connect</h2>
        <ul className="space-y-2">
          <li>Email: hello@portfolio.com</li>
          <li>Phone: +1 (555) 123-4567</li>
          <li>Location: San Francisco, CA</li>
        </ul>
      </div>
    </section>
  );
}


