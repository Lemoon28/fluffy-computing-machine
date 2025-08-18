export default function Footer() {
  return (
    <footer className="border-t border-black/5 mt-16">
      <div className="mx-auto max-w-6xl px-4 sm:px-6 lg:px-8 py-10 text-sm text-gray-500 flex flex-col sm:flex-row items-center justify-between gap-4">
        <p>© {new Date().getFullYear()} Portfolio. All rights reserved.</p>
        <div className="flex items-center gap-4">
          <a className="hover:underline" href="https://github.com" target="_blank" rel="noreferrer">GitHub</a>
          <a className="hover:underline" href="https://www.linkedin.com" target="_blank" rel="noreferrer">LinkedIn</a>
        </div>
      </div>
    </footer>
  );
}


