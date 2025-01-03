import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faPhone, faEnvelope, faMapMarkerAlt } from "@fortawesome/free-solid-svg-icons";
import { faInstagram, faFacebook, faGithub, faLinkedin, faYoutube } from "@fortawesome/free-brands-svg-icons";

export default function ContactUs() {
  return (
    <div className="mt-14 bg-blue-50 min-h-screen p-10">
      <div className="container mx-auto max-w-4xl bg-white rounded-lg shadow-lg p-6 sm:p-10">
        {/* Heading */}
        <h1 className="text-3xl font-bold text-blue-900 text-center mb-6">Contact Us</h1>
        <p className="text-center text-gray-700 mb-8">
          Have a question or want to collaborate? Feel free to get in touch with us!
        </p>

        <div className="grid grid-cols-1 md:grid-cols-2 gap-10">
          {/* Contact Form */}
          <div>
            <h2 className="text-xl font-semibold text-blue-900 mb-4">Send Us a Message</h2>
            <form className="space-y-4">
              <div>
                <label className="block text-sm font-medium text-gray-700">Name</label>
                <input 
                  type="text" 
                  className="w-full mt-1 px-3 py-2 border rounded-md text-gray-800 focus:ring-blue-400 focus:border-blue-400"
                  placeholder="Your Name"
                />
              </div>
              <div>
                <label className="block text-sm font-medium text-gray-700">Email</label>
                <input 
                  type="email" 
                  className="w-full mt-1 px-3 py-2 border rounded-md text-gray-800 focus:ring-blue-400 focus:border-blue-400"
                  placeholder="Your Email"
                />
              </div>
              <div>
                <label className="block text-sm font-medium text-gray-700">Message</label>
                <textarea 
                  className="w-full mt-1 px-3 py-2 border rounded-md text-gray-800 focus:ring-blue-400 focus:border-blue-400"
                  rows={4}
                  placeholder="Your Message"
                />
              </div>
              <button type="submit" className="w-full py-2 px-4 bg-blue-900 text-white font-semibold rounded-md hover:bg-blue-800 transition">
                Send Message
              </button>
            </form>
          </div>

          {/* Contact Details */}
          <div className="text-gray-700">
            <h2 className="text-xl font-semibold text-blue-900 mb-4">Contact Details</h2>
            <p className="mb-4">
              Reach out to us through the following channels, and we&39;ll get back to you as soon as possible.
            </p>
            <div className="space-y-4">
              <div className="flex items-center space-x-3">
                <FontAwesomeIcon icon={faPhone} className="text-blue-900" />
                <span>+92 3160426977</span>
              </div>
              <div className="flex items-center space-x-3">
                <FontAwesomeIcon icon={faEnvelope} className="text-blue-900" />
                <span>zijayaseen15@gmail.com</span>
              </div>
              <div className="flex items-center space-x-3">
                <FontAwesomeIcon icon={faMapMarkerAlt} className="text-blue-900" />
                <span>123 AI Street, Tech City, Country</span>
              </div>
            </div>

            {/* Social Media */}
            <h2 className="text-xl font-semibold text-blue-900 mt-8 mb-4">Follow Us</h2>
            <div className="flex space-x-4 text-2xl">
              <a href="https://www.linkedin.com/in/zija-yaseen-0154722b2?utm_source=share&utm_campaign=share_via&utm_content=profile&utm_medium=android_app" target="_blank" className="hover:text-blue-700 transition">
                <FontAwesomeIcon icon={faLinkedin} />
              </a>
              <a href="https://github.com/ZijaYaseen" target="_blank" className="hover:text-blue-700 transition">
                <FontAwesomeIcon icon={faGithub} />
              </a>
              <a href="https://www.facebook.com/profile.php?id=100077844125867&mibextid=ZbWKwL" target="_blank" className="hover:text-blue-700 transition">
                <FontAwesomeIcon icon={faFacebook} />
              </a>
              <a href="https://www.instagram.com/zija_yaseen?igsh=YmVhMnJnc3Bvc3cy" target="_blank" className="hover:text-blue-700 transition">
                <FontAwesomeIcon icon={faInstagram} />
              </a>
              <a href="#" target="_blank" className="hover:text-blue-700 transition">
                <FontAwesomeIcon icon={faYoutube} />
              </a>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}
