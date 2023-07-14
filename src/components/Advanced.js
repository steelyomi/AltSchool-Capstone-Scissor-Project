import brand from "../images/icon-brand-recognition.svg";
import records from "../images/icon-detailed-records.svg";
import fully from "../images/icon-fully-customizable.svg";

export default function Advanced() {
  return (
    <>
      <section className="bg-gray-100 pt-32 pb-10 lg:pb-40">
        <div className="max-width">
          <h2 className="text-4xl font-bold text-slate-800 mb-3 text-center">
            Advanced Statistics
          </h2>
          <p className="text-slate-400 text-center mb-10 lg:mb-20">
            Track how your links are performing across the web <br /> with our
            advanced statistics dashboard.
          </p>
          <div className="relative card grid grid-cols-1 gap-5 md:grid-cols-2 lg:grid-cols-3">
            <div className="line"></div>
            <article className="bg-white p-5 rounded relative">
              <img
                src={brand}
                alt=""
                className="p-3 -mt-12 bg-slate-800 rounded-full"
              />
              <h3 className="text-slate-800 text-lg mt-5 mb-2 font-bold">
                QR Codes
              </h3>
              <p className="text-slate-400 text-sm">
                Generate QR codes to your business, events. Bring your audience
                and customers to your doorstep with this scan and go solution.
              </p>
            </article>

            <article className="bg-white p-5 rounded relative">
              <img
                src={records}
                alt=""
                className="p-3 -mt-12 bg-slate-800 rounded-full"
              />
              <h3 className="text-slate-800 text-lg mt-5 mb-2 font-bold">
                Detailed Records
              </h3>
              <p className="text-slate-400 text-sm">
                Gain insights into who is cicking your links. Knowing when and
                where people engage with your content helps inform better
                decisions.
              </p>
            </article>

            <article className="bg-white p-5 rounded relative">
              <img
                src={fully}
                alt=""
                className="p-3 -mt-12 bg-slate-800 rounded-full"
              />
              <h3 className="text-slate-800 text-lg mt-5 mb-2 font-bold">
                Fully Customizable
              </h3>
              <p className="text-slate-400 text-sm">
                Improve brand awarenes and content discoverability through
                customizable links, supercharging audience engagement.
              </p>
            </article>
          </div>
        </div>
      </section>
    </>
  );
}
