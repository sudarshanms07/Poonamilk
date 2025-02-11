import React from 'react'

const Footer = () => {
  return (
    <div>
      {/* Footer */}
      <footer className="bg-gray-900 text-gray-300 text-sm mt-8 py-6 static bottom-0 w-full">
        <div className="max-w-5xl mx-auto px-4 flex flex-col md:flex-row justify-between">
          <div className="mb-4 md:mb-0">
            <h3 className="text-lg font-semibold text-white">About poonamilk.com</h3>
            <p>We supply 100% pure and hygienic milk products without preservatives. Serving customers since 2018.</p>
          </div>

          <div className="mb-4 md:mb-0">
            <h3 className="text-lg font-semibold text-white">Get in touch</h3>
            <p><a href="mailto:poonamilk2018@gmail.com" className="text-blue-400 hover:underline">poonamilk2018@gmail.com</a></p>
          </div>

          <div>
            <h3 className="text-lg font-semibold text-white">Related Links</h3>
            <p><a href="#" className="text-blue-400 hover:underline">Privacy Policy</a></p>
            <p><a href="#" className="text-blue-400 hover:underline">Disclaimer</a></p>
          </div>
        </div>

        <div className="text-center mt-4 border-t border-gray-700 pt-4">
          <p>© 2019-2020, All rights reserved.</p>
          <p>Made with ❤️ in INDIA by Revolt+Innovations</p>
        </div>
      </footer>
    </div>
  )
}

export default Footer
