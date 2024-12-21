// src/pages/ContactUs.js


function ContactUs() {
  return (
    <div className="p-8">
      <h1 className="text-3xl font-bold text-primary-900">تماس با ما</h1>
      <p className="text-lg text-secondary-700 mt-4">
        اگر سوال یا پیشنهادی دارید، لطفاً از طریق فرم زیر با ما تماس بگیرید.
      </p>
      <form className="mt-6 space-y-4">
        <div>
          <label className="block text-secondary-700 text-lg">نام شما</label>
          <input
            type="text"
            className="w-full p-3 mt-2 border border-secondary-300 rounded-lg focus:outline-none focus:ring-2 focus:ring-primary-500"
            placeholder="نام خود را وارد کنید"
          />
        </div>
        <div>
          <label className="block text-secondary-700 text-lg">ایمیل شما</label>
          <input
            type="email"
            className="w-full p-3 mt-2 border border-secondary-300 rounded-lg focus:outline-none focus:ring-2 focus:ring-primary-500"
            placeholder="ایمیل خود را وارد کنید"
          />
        </div>
        <div>
          <label className="block text-secondary-700 text-lg">پیام شما</label>
          <textarea
            className="w-full p-3 mt-2 border border-secondary-300 rounded-lg focus:outline-none focus:ring-2 focus:ring-primary-500"
            placeholder="پیام خود را وارد کنید"
            rows="5"
          ></textarea>
        </div>
        <button
          type="submit"
          className="w-full py-3 mt-4 bg-primary-700 text-white font-semibold rounded-lg transition-all duration-300 hover:bg-primary-800"
        >
          ارسال پیام
        </button>
      </form>
    </div>
  );
}

export default ContactUs;
