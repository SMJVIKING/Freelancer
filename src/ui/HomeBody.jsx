import { FaEnvelope, FaLinkedin } from "react-icons/fa";
import { useNavigate } from "react-router-dom";

function HomeBody() {
  const navigate = useNavigate();

  const handleButtonClick = () => {
    navigate("/auth");
  };

  return (
    <div className="w-full min-h-screen bg-secondary-0 text-secondary-100">
      <div className="w-full max-w-[1100px] mx-auto px-4">
        <div className="grid grid-cols-1 md:grid-cols-2 gap-8 items-center">
          <div>
            
            <h1 className="mb-24 font-bold text-2xl text-secondary-800 mt-10 ">
              سلام به <strong>JobNest</strong> خوش اومدی 😉
            </h1>
            <p className="text-xl text-secondary-700 ">
              چه کارفرما باشی چه کارجو، اینجا جاییه که می‌تونی پروژه‌های خودت رو
              پیدا کنی یا بسازی. شروع کن و مسیر جدیدی رو رقم بزن!
            </p>
            <button
              className="bg-primary-700 rounded-xl w-20 p-2 mt-10 text-secondary-800"
              onClick={handleButtonClick}
            >
              بریم ؟
            </button>
            <div className="border-b border-secondary-200 mt-12 md:mt-36"></div>

            <div className="mt-4 space-y-4">
              <h3 className="text-secondary-800 font-sans text-sm">
                ارتباط با ما :
              </h3>

              <div className="flex gap-x-2">
                <div className="flex items-center gap-x-3">
                  <a
                    href="mailto:smjviking@gmail.com"
                    className="text-lg text-secondary-700 hover:text-primary-900"
                  >
                    <FaEnvelope className=" text-secondary-400 w-8 h-8 cursor-pointer hover:text-primary-700 transition-all duration-500" />
                  </a>
                </div>

                <div className="flex items-center gap-x-3">
                  <a
                    href="https://www.linkedin.com/in/sevda-mehdizadeh-89a2572bb/"
                    target="_blank"
                    rel="noopener noreferrer"
                    className="text-lg text-secondary-700 hover:text-primary-900 "
                  >
                    <FaLinkedin className="text-secondary-400 w-8 h-8 cursor-pointer hover:text-primary-700 transition-all duration-500" />
                  </a>
                </div>

              </div>
            </div>
          </div>

          <section className="hidden relative  md:flex flex-col items-end gap-4 m-6">
            <img
              className="shadow-xl w-64 h-44 rounded-3xl transform hover:scale-105 transition-transform duration-300"
              src="/images/carl-heyerdahl-KE0nC8-58MQ-unsplash.jpg"
              alt="Programming"
            />
            <img
              className="shadow-xl ml-24 w-72 h-48 rounded-3xl transform hover:scale-105 transition-transform duration-300"
              src="/images/christopher-gower-m_HRfLhgABo-unsplash.jpg"
              alt="Programming"
            />
            <img
              className="shadow-xl w-72 h-48 rounded-3xl transform hover:scale-105 transition-transform duration-300"
              src="/images/domenico-loia-hGV2TfOh0ns-unsplash.jpg"
              alt="Programming"
            />
          </section>
        </div>
      </div>
    </div>
  );
}

export default HomeBody;
