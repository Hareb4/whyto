import { useEffect } from "react";
import { Download } from "lucide-react";

const SERVER_URL =
  import.meta.env.VITE_SERVER_URL || "https://server.hareb-div.workers.dev";

function App() {
  useEffect(() => {
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
            يعش أبد الدهر بين الحفر</p>
        </header>

        <section className="flex flex-col gap-4">
          <h3 className="text-right font-camel-bold text-lg text-[#F7f6f3]/90">
            مشاريع
          </h3>

          <article className="overflow-hidden rounded-3xl border border-white/10 bg-gradient-to-b from-white/[0.08] to-white/[0.02] shadow-[0_24px_48px_-12px_rgba(0,0,0,0.45)] ring-1 ring-white/5">
            <div className="flex flex-col gap-6 p-6 sm:flex-row sm:items-center sm:justify-between sm:gap-8 sm:p-8">
              <div className="flex min-w-0 flex-1 items-start gap-4 sm:gap-5">
                <div className="relative h-[4.5rem] w-[4.5rem] shrink-0 overflow-hidden rounded-[1.25rem] bg-[#1f1f1f] shadow-inner ring-1 ring-white/15 sm:h-[5.5rem] sm:w-[5.5rem]">
                  <img
                    src={"src/assets/ios-light.png"}
                    alt="أيقونة Beaver"
                    className="h-full w-full object-cover"
                  />
                </div>
                <div className="min-w-0 flex flex-col gap-1.5 pt-0.5 text-right">
                  <h4 className="text-2xl font-semibold tracking-tight text-[#F7f6f3] font-camel-bold">
                    الرندي
                  </h4>
                  <p className="font-zain text-sm leading-relaxed text-[#F7f6f3]/55">
                    تطبيق لمحبين الشعر , عبارة عن ويدجت تظهر ابيات شعرية متنوعة
                  </p>
                </div>
              </div>

              <a
                href={"src/assets/app-release.apk"}
                download="app-release.apk"
                className="inline-flex h-12 w-full shrink-0 items-center justify-center gap-2 rounded-2xl bg-[#F7f6f3] px-4 text-sm font-semibold text-[#1a1a1a] transition duration-200 hover:text-[#f7f6f3] hover:bg-[#80493D] hover:cursor-pointer hover:inset-shadow-sm sm:h-12 sm:w-auto sm:min-w-[10rem]">
                تحميل
                <Download className="w-4 h-4" />
              </a>

            </div>

            <div className="border-t border-white/10 bg-black/20 px-6 py-5 sm:px-8">
              <p className="mb-3 text-right text-[0.65rem] font-semibold uppercase tracking-[0.12em] text-[#F7f6f3]/40">
                لقطات الشاشة
              </p>
              <div className="-mx-1 flex gap-3 overflow-x-auto px-1 pb-1 [scrollbar-width:thin] [scrollbar-color:rgba(255,255,255,0.2)_transparent]">
                <img
                  src={"src/assets/Slide 16_9 - 1.png"}
                  alt="لقطة شاشة ١"
                  className="h-80 w-40 shrink-0 rounded-xl object-cover ring-1 ring-white/10"
                />
                <img
                  src={"src/assets/Slide 16_9 - 2.png"}
                  alt="لقطة شاشة ٢"
                  className="h-80 w-40 shrink-0 rounded-xl object-cover ring-1 ring-white/10"
                />
                <img
                  src={"src/assets/Slide 16_9 - 3.png"}
                  alt="لقطة شاشة ٣"
                  className="h-80 w-40 shrink-0 rounded-xl object-cover ring-1 ring-white/10"
                />
              </div>
            </div>
          </article>
        </section>
      </div>
    </div>
  );
}

export default App;
