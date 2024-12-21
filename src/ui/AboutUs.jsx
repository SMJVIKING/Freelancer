function AboutUs() {
  return (
    <div className="w-full min-h-screen bg-secondary-0 py-16">
      <div className="max-w-6xl mx-auto px-4">
        <h1 className="text-4xl font-bold text-center text-primary-900 mb-8">
          درباره ما
        </h1>

        <section className="mb-16">
          <h2 className="text-2xl font-semibold text-secondary-800 mb-4">
            ما کی هستیم؟
          </h2>
          <p className="text-lg text-secondary-600 leading-relaxed">
            در <strong>JobNest</strong>، ما یک تیم حرفه‌ای هستیم که در زمینه
            تکنولوژی و استخدام به کارفرمایان و جویندگان کار کمک می‌کنیم تا
            پروژه‌هایشان را پیدا کرده یا ایجاد کنند. هدف ما ارتقاء فرآیندهای
            استخدام و ساختن یک فضای آنلاین مناسب برای ارتباط کارفرمایان و
            کارجویان است.
          </p>
        </section>

        <section className="mb-16">
          <h2 className="text-2xl font-semibold text-secondary-800 mb-4">
            ماموریت ما
          </h2>
          <p className="text-lg text-secondary-600 leading-relaxed">
            ماموریت ما این است که به کارفرمایان و کارجویان ابزارهایی را فراهم
            کنیم که بتوانند به راحتی پروژه‌های خود را ایجاد، مدیریت و به اشتراک
            بگذارند. ما معتقدیم که ارتباط موثر بین کارفرمایان و کارجویان باعث
            ایجاد فرصت‌های شغلی بیشتر و بهبود روند کسب و کار می‌شود.
          </p>
        </section>

        <section>
          <h2 className="text-2xl font-semibold text-secondary-800 mb-4">
            تیم ما
          </h2>
          <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
            <div className="flex flex-col items-center text-center">
              <img
                className="w-32 h-32 rounded-full object-cover mb-4"
                src="/public/images/alexander-hipp-iEEBWgY_6lA-unsplash.jpg"
                alt="Team Member"
              />
              <h3 className="text-lg font-semibold text-secondary-800">
                علی احمدی
              </h3>
              <p className="text-secondary-600">مدیر عامل</p>
            </div>
            <div className="flex flex-col items-center text-center">
              <img
                className="w-32 h-32 rounded-full object-cover mb-4"
                src="/public/images/michael-dam-mEZ3PoFGs_k-unsplash.jpg"
                alt="Team Member"
              />
              <h3 className="text-lg font-semibold text-secondary-800">
                زهرا مرادی
              </h3>
              <p className="text-secondary-600">مدیر توسعه کسب و کار</p>
            </div>
            <div className="flex flex-col items-center text-center">
              <img
                className="w-32 h-32 rounded-full object-cover mb-4"
                src="/public/images/luis-villasmil-Z4rqvRpRj38-unsplash.jpg"
                alt="Team Member"
              />
              <h3 className="text-lg font-semibold text-secondary-800">
                 ارتین محمدی کیا
              </h3>
              <p className="text-secondary-600">توسعه دهنده ارشد</p>
            </div>
          </div>
        </section>
      </div>
    </div>
  );
}

export default AboutUs;
