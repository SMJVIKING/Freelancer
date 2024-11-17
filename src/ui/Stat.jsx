const colors = {
  primary: "bg-primary-100 text-primary-700",
  green: "bg-green-100 text-green-700",
  orange: "bg-orange-100 text-orange-700",
};

function Stat({ icon, title, value, color }) {
  return (
    <div className=" mb-4 shadow-lg col-span-1 rounded-lg gap-x-4 grid grid-rows-2 grid-cols-[6.4rem_1fr] bg-secondary-0 p-4">
      <div
        className={`row-span-2 flex items-center justify-center p-2 aspect-square rounded-full ${colors[color]}`}
      >
        {icon}
      </div>
      <h5 className="font-bold self-center text-lg text-secondary-500">
        {title}
      </h5>
      <p className="text-3xl font-bold text-secondary-900">{value}</p>
    </div>
  );
}
export default Stat;

// className={`${}`} و className={`$bg-{}-100`}
//  => نکته مهم: تیلویند نمیتونه این مدل کلاس نوشتن رو شناسایی کنه
// و ب درستی عمل نمیکنه اگ اینجوری بنویسیم پس این روش کلا تو تیلویند کنسله

// ====> خب پس اگه خواستیم کلاس ما داینامیک باشه چیکارکنیم؟
// از ابجکت استفاده میکنیم مث بالا:
