import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faInstagram, faFacebook, faGithub, faLinkedin, faYoutube } from "@fortawesome/free-brands-svg-icons";
import Link from "next/link";

export default function Footer() {
  return (
    <footer className="bg-blue-900 text-white py-10">
      <div className="container mx-auto px-6">
        <div className="flex flex-col md:flex-row justify-between items-center md:items-start space-y-8 md:space-y-0">
          {/*Name and Description */}
          <div className="text-center md:text-left">
            <h1 className="text-2xl font-bold">AI Blogs</h1>
            <p className="mt-2 text-sm text-gray-300">
              Empowering developers with AI-driven insights and tutorials to enhance your coding journey.
            </p>
          </div>

          {/* Quick Links */}
          <div className="text-center md:text-left">
            <h2 className="text-lg font-semibold">Quick Links</h2>
            <ul className="mt-2 space-y-2 text-sm text-gray-300">
              <li>
              <Link href="/" className="hover:text-blue-400">Home</Link>
              </li>
              <li>
                <Link href="/" className="hover:text-blue-400">Blog</Link>
              </li>
              <li>
                <Link href="/about" className="hover:text-blue-400">About Us</Link>
              </li>
              <li>
                <Link href="/contact" className="hover:text-blue-400">Contact</Link>
              </li>
            </ul>
          </div>

          {/* Social Icons */}
          <div className="text-center lg:text-left">
            <h2 className="text-lg font-semibold">Follow Us</h2>
            <div className="flex justify-center lg:justify-start space-x-4 mt-2 text-xl">
              <a href="https://www.linkedin.com/in/zija-yaseen-0154722b2?utm_source=share&utm_campaign=share_via&utm_content=profile&utm_medium=android_app" target="_blank" className="hover:text-blue-400">
                <FontAwesomeIcon icon={faLinkedin} />
              </a>
              <a href="https://github.com/ZijaYaseen" target="_blank" className="hover:text-blue-400">
                <FontAwesomeIcon icon={faGithub} />
              </a>
              <a href="https://www.facebook.com/profile.php?id=100077844125867&mibextid=ZbWKwL" target="_blank" className="hover:text-blue-400">
                <FontAwesomeIcon icon={faFacebook} />
              </a>
              <a href="https://www.instagram.com/zija_yaseen?igsh=YmVhMnJnc3Bvc3cy" target="_blank" className="hover:text-blue-400">
                <FontAwesomeIcon icon={faInstagram} />
              </a>
              <a href="#" target="_blank" className="hover:text-blue-400">
                <FontAwesomeIcon icon={faYoutube} />
              </a>
            </div>
          </div>
        </div>

        {/* Bottom Section */}
        <div className="mt-8 text-center text-sm text-gray-300 border-t border-gray-300 pt-4">
          <p>Developer Zija Yaseen</p>
          <p>&copy; 2025 AI Blog. All rights reserved.</p>
        </div>
      </div>
    </footer>
  );
}
