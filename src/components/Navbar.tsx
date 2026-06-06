export default function Navbar() {
  return (
    <nav className="relative mx-auto max-w-7xl px-0 py-5">
  <h1 className="font-gerbil text-[22px]">
    Elementum
  </h1>

  <ul className="absolute left-1/2 top-1/2 hidden -translate-x-1/2 -translate-y-1/2 gap-12 md:flex">
    <li>Home</li>
    <li>Studio</li>
    <li>Services</li>
    <li>Contact</li>
    <li>FAQs</li>
  </ul>

  <button className="absolute right-0 top-1/2 -translate-y-1/2 px-0">
    <img src="/menuicon.png" alt="Menu" width={40} height={24} />
  </button>
</nav>
  );
}