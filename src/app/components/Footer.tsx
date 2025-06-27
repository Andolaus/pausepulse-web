export default function Footer() {
  return (
    <footer className="bg-gray-100 text-gray-700 py-10 px-6 text-center">
      <div className="max-w-4xl mx-auto">
        <h3 className="text-xl font-semibold mb-2">PausePulse</h3>
        <p className="text-sm mb-4">Breathe. Grow. Level Up.</p>
        
        <div className="flex justify-center gap-6 text-sm mb-4">
          <a href="mailto:hello@pausepulse.app" className="hover:text-indigo-600 transition">Contact</a>
          <a href="#" className="hover:text-indigo-600 transition">Privacy</a>
          <a href="#" className="hover:text-indigo-600 transition">Terms</a>
          <a href="#" className="hover:text-indigo-600 transition">Instagram</a>
        </div>

        <p className="text-xs text-gray-500">© {new Date().getFullYear()} PausePulse. All rights reserved.</p>
      </div>
    </footer>
  );
}
