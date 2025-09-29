import { useState } from 'react';

export default function Header() {
  const [isOpen, setIsOpen] = useState(false);

  const Menu = [
    { title: "Home", link: "#homes" },
    { title: "About", link: "#about-me" },
    { title: "Skills", link: "#skills" },
    { title: "Projects", link: "#projects" },
    { title: "Contact", link: "#contact" }
  ];

  const handleMenuClick = () => {
    setIsOpen(false);
  };

  return (
    <>
      <div id="homes"></div>
      <header className="fixed top-0 left-0 w-full bg-dark z-50 py-[5px] border-b border-white/10">
        <div className="container mx-auto px-4 py-3 flex items-center justify-between">
          <a href="#homes" className="text-primary text-2xl font-semibold tracking-tight">VietTruong</a>

          <button
            className="lg:hidden flex flex-col justify-between items-center w-8 h-6 bg-transparent border-none outline-none"
            onClick={() => setIsOpen(!isOpen)}
            aria-label="Toggle menu"
            aria-expanded={isOpen}
          >
            <div className={`bg-primary w-8 h-1 rounded transition-transform duration-300 ${isOpen ? 'rotate-45 translate-y-1' : ''}`}></div>
            <div className={`bg-primary w-8 h-1 rounded transition-opacity duration-300 ${isOpen ? 'opacity-0' : ''}`}></div>
            <div className={`bg-primary w-8 h-1 rounded transition-transform duration-300 ${isOpen ? '-rotate-45 -translate-y-1' : ''}`}></div>
          </button>

          <nav className={`fixed inset-0 bg-dark/95 backdrop-blur text-white transform transition-transform duration-300 ease-in-out ${isOpen ? 'translate-x-0' : '-translate-x-full'} lg:translate-x-0 lg:static lg:bg-transparent lg:flex lg:items-center lg:space-x-8`}>
            <button
              className="absolute top-4 right-4 text-white text-3xl lg:hidden"
              onClick={() => setIsOpen(false)}
              aria-label="Close menu"
            >
              <span className="material-icons">close</span>
            </button>
            <ul className="flex flex-col lg:flex-row lg:space-x-8 space-y-4 lg:space-y-0 p-6 lg:p-0">
              {Menu.map((item, index) => (
                <li key={index}>
                  <a
                    href={item.link}
                    className="text-primary text-lg lg:text-xl hover:text-light"
                    onClick={handleMenuClick}
                  >
                    <span className="text-primary/70">0{index + 1}.</span> {item.title}
                  </a>
                </li>
              ))}
            </ul>
          </nav>
        </div>
      </header>
    </>
  );
}
