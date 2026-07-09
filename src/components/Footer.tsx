export default function Footer() {
  return (
    <footer className="bg-sp-black border-t-2 border-sp-red py-8 tribal-bg">
      <div className="container mx-auto px-6">
        <div className="grid grid-cols-1 md:grid-cols-3 gap-8 mb-8">
          <div>
            <h4 className="font-trade text-sm font-bold text-sp-white mb-4">SUCKERPUNCH</h4>
            <p className="text-sm opacity-subtle">
              Elite bare-knuckle athletes. Athlete-first management. Professional representation.
            </p>
          </div>
          
          <div>
            <h4 className="font-trade text-sm font-bold text-sp-white mb-4">QUICK LINKS</h4>
            <ul className="space-y-2 text-sm opacity-subtle">
              <li><a href="/about" className="hover:text-sp-red transition">About</a></li>
              <li><a href="/roster" className="hover:text-sp-red transition">Roster</a></li>
              <li><a href="/contact" className="hover:text-sp-red transition">Contact</a></li>
            </ul>
          </div>

          <div>
            <h4 className="font-trade text-sm font-bold text-sp-white mb-4">CONTACT</h4>
            <p className="text-sm opacity-subtle">
              <a href="mailto:scotth@suckerpunchent.com" className="hover:text-sp-red transition">Scott Howard</a>
              <br />
              <a href="mailto:chrisc@suckerpunchent.com" className="hover:text-sp-red transition">Christopher Creech</a>
            </p>
          </div>
        </div>

        <div className="tribal-divider"></div>

        <div className="text-center text-xs opacity-subtle">
          <p>&copy; 2024 SuckerPunch Entertainment. All rights reserved.</p>
        </div>
      </div>
    </footer>
  )
}
