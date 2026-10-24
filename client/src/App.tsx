import { useEffect } from "react";
import { Link } from "react-router-dom";
import { ArrowLeft } from "lucide-react";

import iosLight from "./assets/ios-light.png";

const SERVER_URL =
  import.meta.env.VITE_SERVER_URL || "https://server.hareb-div.workers.dev";

function App() {
  useEffect(() => {
    document.title = "Hareb";
    void fetch(`${SERVER_URL}/yes`).catch(() => { });
  }, []);

  return (
    <div
      dir="rtl"
      className="min-h-screen bg-[#2c2c2c] text-[#F7f6f3] selection:bg-white/20">
      <div className="mx-auto flex min-h-screen max-w-lg flex-col gap-10 px-5 py-10 sm:max-w-xl sm:py-14 md:max-w-2xl">
        <header className="space-y-2 text-right">
          <h1 className="font-camel-bold text-4xl font-black tracking-tight text-[#F7f6f3] sm:text-5xl">
            حارب عمر
          </h1>
          <h2 className="font-mono text-xl text-[#F7f6f3]/90 sm:text-2xl">
            Hareb Omar
          </h2>
          <p className="font-zain text-lg text-[#F7f6f3]/75">
            من يهب صعود الجبال
          </p>
          <p className="font-zain text-lg text-[#F7f6f3]/75">
            يعش أبد الدهر بين الحفر
          </p>
        </header>

        <section className="flex flex-col gap-4">
          <h3 className="text-right font-camel-bold text-lg text-[#F7f6f3]/90">
            مشاريع
          </h3>

          <Link
            to="/alrandi"
            className="flex items-center gap-4 rounded-3xl border border-white/10 bg-gradient-to-b from-white/[0.08] to-white/[0.02] p-5 shadow-[0_24px_48px_-12px_rgba(0,0,0,0.45)] ring-1 ring-white/5 transition hover:border-white/20 hover:from-white/[0.12] sm:p-6">
            <div className="relative h-16 w-16 shrink-0 overflow-hidden rounded-[1.15rem] bg-[#1f1f1f] shadow-inner ring-1 ring-white/15">
              <img
                src={iosLight}
                alt="أيقونة الرندي"
                className="h-full w-full object-cover"
              />
            </div>
            <div className="min-w-0 flex-1 text-right">
              <h4 className="font-camel-bold text-xl text-[#F7f6f3]">الرندي</h4>
              <p className="mt-1 font-zain text-sm leading-relaxed text-[#F7f6f3]/55">
                ويدجت شعر عربي للشاشة الرئيسية
              </p>
            </div>
            <span className="inline-flex shrink-0 items-center gap-1 text-sm font-semibold text-[#F7f6f3]/70">
              عرض
              <ArrowLeft className="h-4 w-4" />
            </span>
          </Link>
        </section>
      </div>
    </div>
  );
}

export default App;
