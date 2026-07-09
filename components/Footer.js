export default function Footer() {
  return (
    <footer className="bg-black border-t-2 border-red-600 py-8">
      <div className="container mx-auto px-6">
        <div className="grid grid-cols-1 md:grid-cols-3 gap-8 mb-8">
          <div>
            <h4 className="text-sm font-bold text-white mb-4">SUCKERPUNCH</h4>
            <p className="text-sm opacity-60">
              Elite bare-knuckle athletes. Athlete-first management.
            </p>
          </div>
          
          <div>
            <h4 className="text-sm font-bold text-white mb-4">LINKS</h4>
            <ul className="space-y-2 text-sm opacity-60">
              <li><a href="/about" className="hover:text-red-600">About</a></li>
              <li><a href="/roster" className="hover:text-red-600">Roster</a></li>
              <li><a href="/contact" className="hover:text-red-600">Contact</a></li>
            </ul>
          </div>

          <div>
            <h4 className="text-sm font-bold text-white mb-4">CONTACT</h4>
            <p className="text-sm opacity-60">
              <a href="mailto:scotth@suckerpunchent.com" className="hover:text-red-600">Scott Howard</a>
              <br />
              <a href="mailto:chrisc@suckerpunchent.com" className="hover:text-red-600">Christopher Creech</a>
            </p>
          </div>
        </div>

        <div className="border-t border-gray-700 pt-4 text-center text-xs opacity-60">
          <p>&copy; 2024 SuckerPunch Entertainment. All rights reserved.</p>
        </div>
      </div>
    </footer>
  )
}
