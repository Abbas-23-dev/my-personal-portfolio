// import React, { useState } from 'react';
// import { Mail, Phone, MapPin } from 'lucide-react';

// const Contact = () => {
//   const [formData, setFormData] = useState({
//     name: '',
//     email: '',
//     message: ''
//   });

//   const handleChange = (e) => {
//     setFormData({
//       ...formData,
//       [e.target.name]: e.target.value
//     });
//   };

//   const handleSubmit = (e) => {
//     e.preventDefault();
//     console.log('Form submitted:', formData);
//     setFormData({ name: '', email: '', message: '' });
//   };

//   return (
//     <section id="contact" className="py-20 bg-gray-900">
//       <div className="container mx-auto px-4">
//         <h2 className="text-4xl font-bold text-center mb-12">
//           <span className="bg-gradient-to-r from-orange-500 to-red-500 bg-clip-text text-transparent">
//             Get In Touch
//           </span>
//         </h2>

//         <div className="max-w-6xl mx-auto grid md:grid-cols-2 gap-12">
//           {/* Contact Info */}
//           <div>
//             <h3 className="text-2xl font-bold text-white mb-6">Let's Connect</h3>
//             <p className="text-gray-300 text-lg mb-8">
//               I'm always open to discussing new opportunities, collaborating on projects, or just having a chat about technology and development.
//             </p>

//             <div className="space-y-6">
//               <div className="flex items-center space-x-4">
//                 <div className="w-12 h-12 bg-gradient-to-r from-orange-500 to-red-500 rounded-full flex items-center justify-center">
//                   <Mail className="w-6 h-6 text-white" />
//                 </div>
//                 <div>
//                   <h4 className="text-white font-semibold">Email</h4>
//                   <p className="text-gray-300">abbas.dev23@gmail.com</p>
//                 </div>
//               </div>

//               <div className="flex items-center space-x-4">
//                 <div className="w-12 h-12 bg-gradient-to-r from-orange-500 to-red-500 rounded-full flex items-center justify-center">
//                   <Phone className="w-6 h-6 text-white" />
//                 </div>
//                 <div>
//                   <h4 className="text-white font-semibold">Phone</h4>
//                   <p className="text-gray-300">+92 XXX XXXXXXX</p>
//                 </div>
//               </div>

//               <div className="flex items-center space-x-4">
//                 <div className="w-12 h-12 bg-gradient-to-r from-orange-500 to-red-500 rounded-full flex items-center justify-center">
//                   <MapPin className="w-6 h-6 text-white" />
//                 </div>
//                 <div>
//                   <h4 className="text-white font-semibold">Location</h4>
//                   <p className="text-gray-300">Pakistan</p>
//                 </div>
//               </div>
//             </div>
//           </div>

//           {/* Contact Form */}
//           <div className="bg-black/50 p-8 rounded-lg border border-gray-800">
//             <form onSubmit={handleSubmit} className="space-y-6">
//               <div>
//                 <label htmlFor="name" className="block text-white font-semibold mb-2">
//                   Name
//                 </label>
//                 <input
//                   type="text"
//                   id="name"
//                   name="name"
//                   value={formData.name}
//                   onChange={handleChange}
//                   required
//                   className="w-full px-4 py-3 bg-gray-800 border border-gray-700 rounded-lg text-white focus:outline-none focus:border-orange-500 transition-colors duration-300"
//                 />
//               </div>

//               <div>
//                 <label htmlFor="email" className="block text-white font-semibold mb-2">
//                   Email
//                 </label>
//                 <input
//                   type="email"
//                   id="email"
//                   name="email"
//                   value={formData.email}
//                   onChange={handleChange}
//                   required
//                   className="w-full px-4 py-3 bg-gray-800 border border-gray-700 rounded-lg text-white focus:outline-none focus:border-orange-500 transition-colors duration-300"
//                 />
//               </div>

//               <div>
//                 <label htmlFor="message" className="block text-white font-semibold mb-2">
//                   Message
//                 </label>
//                 <textarea
//                   id="message"
//                   name="message"
//                   rows="5"
//                   value={formData.message}
//                   onChange={handleChange}
//                   required
//                   className="w-full px-4 py-3 bg-gray-800 border border-gray-700 rounded-lg text-white focus:outline-none focus:border-orange-500 transition-colors duration-300 resize-none"
//                 ></textarea>
//               </div>

//               <CustomSubmitButton type="submit" className="w-full">
//                 <Mail className="w-5 h-5 text-orange-500" />
//                 <span className="text-white font-semibold">Send Message</span>
//               </CustomSubmitButton>
//             </form>
//           </div>
//         </div>
//       </div>
//     </section>
//   );
// };

// // ✅ Custom button replacing HeartbeatButton
// const CustomSubmitButton = ({ children, ...props }) => {
//   return (
//     <button
//       {...props}
//       className={`flex items-center justify-center gap-2 bg-orange-600 hover:bg-orange-700 text-white py-3 px-6 rounded-lg transition duration-300 ${props.className}`}
//     >
//       {children}
//     </button>
//   );
// };

// export default Contact;



import React, { useState } from 'react';
import { Mail, Phone, MapPin } from 'lucide-react';

const Contact = () => {
  const [formData, setFormData] = useState({
    name: '',
    email: '',
    message: ''
  });

  const [status, setStatus] = useState(null);

  const handleChange = (e) => {
    setFormData({
      ...formData,
      [e.target.name]: e.target.value
    });
  };

  const handleSubmit = async (e) => {
    e.preventDefault();

    const form = new FormData();
    form.append("access_key", "6b45260e-8e8a-4a09-9c31-58e706276ac7");
    form.append("name", formData.name);
    form.append("email", formData.email);
    form.append("message", formData.message);

    const res = await fetch("https://api.web3forms.com/submit", {
      method: "POST",
      body: form
    });

    const result = await res.json();

    if (result.success) {
      setStatus("Message sent successfully!");
      setFormData({ name: '', email: '', message: '' });
    } else {
      setStatus("Something went wrong. Please try again.");
    }
  };

  return (
    <section id="contact" className="py-20 bg-gray-900">
      <div className="container mx-auto px-4">
        <h2 className="text-4xl font-bold text-center mb-12">
          <span className="bg-gradient-to-r from-orange-500 to-red-500 bg-clip-text text-transparent">
            Get In Touch
          </span>
        </h2>

        <div className="max-w-6xl mx-auto grid md:grid-cols-2 gap-12">
          {/* Contact Info */}
          <div>
            <h3 className="text-2xl font-bold text-white mb-6">Let's Connect</h3>
            <p className="text-gray-300 text-lg mb-8">
              I'm always open to discussing new opportunities, collaborating on projects, or just having a chat about technology and development.
            </p>

            <div className="space-y-6">
              <div className="flex items-center space-x-4">
                <div className="w-12 h-12 bg-gradient-to-r from-orange-500 to-red-500 rounded-full flex items-center justify-center">
                  <Mail className="w-6 h-6 text-white" />
                </div>
                <div>
                  <h4 className="text-white font-semibold">Email</h4>
                  <p className="text-gray-300">abbas.dev23@gmail.com</p>
                </div>
              </div>

              <div className="flex items-center space-x-4">
                <div className="w-12 h-12 bg-gradient-to-r from-orange-500 to-red-500 rounded-full flex items-center justify-center">
                  <Phone className="w-6 h-6 text-white" />
                </div>
                <div>
                  <h4 className="text-white font-semibold">Phone</h4>
                  <p className="text-gray-300">+92 348 9487019</p>
                </div>
              </div>

              <div className="flex items-center space-x-4">
                <div className="w-12 h-12 bg-gradient-to-r from-orange-500 to-red-500 rounded-full flex items-center justify-center">
                  <MapPin className="w-6 h-6 text-white" />
                </div>
                <div>
                  <h4 className="text-white font-semibold">Location</h4>
                  <p className="text-gray-300">Pakistan, KPK Qambar Swat</p>
                </div>
              </div>
            </div>
          </div>

          {/* Contact Form */}
          <div className="bg-black/50 p-8 rounded-lg border border-gray-800">
            <form onSubmit={handleSubmit} className="space-y-6">
              <div>
                <label htmlFor="name" className="block text-white font-semibold mb-2">
                  Name
                </label>
                <input
                  type="text"
                  id="name"
                  name="name"
                  value={formData.name}
                  onChange={handleChange}
                  required
                  className="w-full px-4 py-3 bg-gray-800 border border-gray-700 rounded-lg text-white focus:outline-none focus:border-orange-500 transition-colors duration-300"
                />
              </div>

              <div>
                <label htmlFor="email" className="block text-white font-semibold mb-2">
                  Email
                </label>
                <input
                  type="email"
                  id="email"
                  name="email"
                  value={formData.email}
                  onChange={handleChange}
                  required
                  className="w-full px-4 py-3 bg-gray-800 border border-gray-700 rounded-lg text-white focus:outline-none focus:border-orange-500 transition-colors duration-300"
                />
              </div>

              <div>
                <label htmlFor="message" className="block text-white font-semibold mb-2">
                  Message
                </label>
                <textarea
                  id="message"
                  name="message"
                  rows="5"
                  value={formData.message}
                  onChange={handleChange}
                  required
                  className="w-full px-4 py-3 bg-gray-800 border border-gray-700 rounded-lg text-white focus:outline-none focus:border-orange-500 transition-colors duration-300 resize-none"
                ></textarea>
              </div>

              <CustomSubmitButton type="submit" className="w-full">
                <Mail className="w-5 h-5 text-orange-500" />
                <span className="text-white font-semibold">Send Message</span>
              </CustomSubmitButton>

              {status && (
                <p className="text-sm text-center text-green-500 pt-4">{status}</p>
              )}
            </form>
          </div>
        </div>
      </div>
    </section>
  );
};

// ✅ Custom button
const CustomSubmitButton = ({ children, ...props }) => {
  return (
    <button
      {...props}
      className={`flex items-center justify-center gap-2 bg-orange-600 hover:bg-orange-700 text-white py-3 px-6 rounded-lg transition duration-300 ${props.className}`}
    >
      {children}
    </button>
  );
};

export default Contact;
