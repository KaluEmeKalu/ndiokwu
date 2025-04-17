import Link from 'next/link';

const Footer = () => {
  return (
    <footer className="bg-gray-900 text-white py-8 px-6">
      <div className="container mx-auto">
        <div className="grid grid-cols-1 md:grid-cols-3 gap-10">
          <div>
            <h3 className="text-xl font-semibold mb-4">Ndịokwu</h3>
            <p className="text-gray-300">
              The most efficient writing system ever developed for the Igbo language.
              Master it in under 30 minutes!
            </p>
          </div>
          
          <div>
            <h3 className="text-xl font-semibold mb-4">Quick Links</h3>
            <ul className="space-y-2">
              <li>
                <Link href="/learn" className="text-gray-300 hover:text-white transition-colors">
                  Learn
                </Link>
              </li>
              <li>
                <Link href="/alphabet" className="text-gray-300 hover:text-white transition-colors">
                  Alphabet
                </Link>
              </li>
              <li>
                <Link href="/practice" className="text-gray-300 hover:text-white transition-colors">
                  Practice
                </Link>
              </li>
              <li>
                <Link href="/converter" className="text-gray-300 hover:text-white transition-colors">
                  Converter
                </Link>
              </li>
            </ul>
          </div>
          
          <div>
            <h3 className="font-bold mb-4">Contact</h3>
            <a
              href="https://instagram.com/ndiokwu.script"
              target="_blank"
              rel="noopener noreferrer"
              className="hover:text-gray-300"
            >
              @ndiokwu.script
            </a>
          </div>
        </div>
        
        <div className="border-t border-gray-800 mt-8 pt-8 text-center text-gray-400">
          <p>© {new Date().getFullYear()} Ndịokwu.com. All rights reserved.</p>
        </div>
      </div>
    </footer>
  );
};

export default Footer; 