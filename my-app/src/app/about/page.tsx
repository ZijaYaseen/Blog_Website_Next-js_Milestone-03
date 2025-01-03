import Image from "next/image";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faInstagram, faFacebook, faGithub, faLinkedin, faYoutube} from "@fortawesome/free-brands-svg-icons";

export default function About() {
  return (
      <div className="mt-14 bg-blue-50 text-gray-900 min-h-screen md:p-10 font-sans">

{/* Main container with flex for alignment (page) uper wala div body || or ye div conatainer...*/}
<div className="flex flex-col md:flex-row justify-between items-center">
  
  {/* Text container */}
  <div className="w-fit h-auto m-[40px] text-[20px] text-center lg:text-left">
    HELLO,
    <h1 className="text-2xl sm:text-3xl md:text-5xl font-black">
    I&#39;m <span className="text-blue-900">Zija Yaseen</span>
    <br />I am a Next.js Developer
    </h1>
    
    <p className="mt-4 text-base sm:text-lg md:text-xl text-black">
      I specialize in building modern web applications using Next.js and React, focusing on creating efficient and user-friendly experiences. My passion lies in writing clean, maintainable code while optimizing performance to ensure seamless interactions. I aim to deliver high-quality solutions that meet user needs and adhere to industry standards.
    </p>

    <div className="flex justify-center md:justify-start space-x-6 text-xl mt-4">

            <a href="https://www.linkedin.com/in/zija-yaseen-0154722b2?utm_source=share&utm_campaign=share_via&utm_content=profile&utm_medium=android_app" target="_blank" className="hover:text-blue-900">
              <FontAwesomeIcon icon={faLinkedin} size="2x" />
              </a>

            <a href="https://github.com/ZijaYaseen" target="_blank" className="hover:text-blue-900">
              <FontAwesomeIcon icon={faGithub} size="2x" />
              </a>

              <a href="https://www.facebook.com/profile.php?id=100077844125867&mibextid=ZbWKwL" target="_blank" className="hover:text-blue-900">
              <FontAwesomeIcon icon={faFacebook} size="2x" />
              </a>

              <a href="https://www.instagram.com/zija_yaseen?igsh=YmVhMnJnc3Bvc3cy" target="_blank" className="hover:text-blue-900">
              <FontAwesomeIcon icon={faInstagram} size="2x" />
              </a>

              <a href="#" target="_blank" className="hover:text-blue-900">
              <FontAwesomeIcon icon={faYoutube} size="2x" />
              </a>
            </div>
  </div>

  {/* Image container */}
  <div className="m-[40px]">
    <Image 
      src={"/model.jpeg"} 
      alt="Model Image" 
      width={700}  
      height={700} 
      className="rounded-full border-4 border-blue-900"
    
    />
  </div> 
</div>
    </div>
    
    
  );
}
