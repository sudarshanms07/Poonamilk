import React from 'react'

const Contact = () => {
  return (
    <div>
      <div className="p-8">
      {/* Contact Section */}
      <div className=" mx-auto bg-white shadow-md rounded-lg p-8 mt-6">
        <h2 className="text-3xl font-bold mb-6 h-10">Contact Us</h2>
        <hr />
        <hr />
        <hr />
        {/* Office Address */}
        <div className="mb-6 h-100 mt-6">
          <br />
          <br />
        
          <h3 className="text-xl font-semibold">Office Address:</h3>
          <p>Kishor Dairy, S.No. 66/13, Dhore Farm</p>
          <p>Tower line road, New Sangavi, Pune - 411027</p>
          <p>Email: <a href="mailto:contact@poonamilk.com" className="font-bold text-blue-600">contact@poonamilk.com</a></p>
          <p>Mobile: <span className="font-semibold">+91 8983182210 / 9922862610</span></p>
        </div>

        {/* Work Address */}
        <div className='h-50'>
          <h3 className="text-xl font-semibold">Work Address:</h3>
          <p>Charoli, Nr. Saibaba Mandir, Aalandi-Vishrantwadi Road, Pune</p>
        </div>
      </div>
    </div>

    </div>
  )
}

export default Contact
