import { useEffect } from "react";
import { Link } from "react-router-dom";
import { ArrowRight } from "lucide-react";

const SUPPORT_EMAIL = "hareb.div@gmail.com";
const LAST_UPDATED_AR = "٢٣ أكتوبر ٢٠٢٦";
const LAST_UPDATED_EN = "October 23, 2026";

const sections = [
  {
    ar: {
      title: "مقدمة",
      body: "توضح هذه السياسة كيف يتعامل تطبيق الرندي مع بياناتك. التطبيق أداة بسيطة لعرض أبيات شعرية على الشاشة الرئيسية، ولا يطلب إنشاء حساب ولا يبيع بيانات.",
    },
    en: {
      title: "Introduction",
      body: "This policy describes how the Al-Randi app handles information. Al-Randi is a simple home-screen poetry widget. It does not require an account and does not sell data.",
    },
  },
  {
    ar: {
      title: "ما لا نجمعه",
      body: "لا يجمع التطبيق اسمك أو بريدك أو رقم هاتفك أو موقعك الجغرافي. لا توجد حسابات مستخدمين، ولا إعلانات، ولا أدوات تحليل أو تتبع داخل التطبيق.",
    },
    en: {
      title: "What we do not collect",
      body: "The app does not collect your name, email, phone number, or location. There are no user accounts, ads, analytics, or tracking SDKs.",
    },
  },
  {
    ar: {
      title: "ما يُحفظ على جهازك فقط",
      body: "يُخزَّن محليًا على جهازك: القصيدة المعروضة حاليًا في الويدجت، تفضيل الألوان، وعلامة إكمال التعريف بالتطبيق. هذه البيانات لا تُرفع إلى خوادمنا ولا تُشارك مع أطراف أخرى. حذف التطبيق يزيلها.",
    },
    en: {
      title: "Data stored only on your device",
      body: "The current widget poem, color preference, and an onboarding-completed flag are stored locally on your device. They are not uploaded to our servers or shared with third parties. Uninstalling the app removes them.",
    },
  },
  {
    ar: {
      title: "الاتصال بالإنترنت",
      body: "يتصل التطبيق بواجهة موقع قافية العامة (api.qafiyah.com) لجلب قصيدة عشوائية للويدجت. لا يُرسل في هذا الطلب معلومات شخصية عنك. إذا فتحت صفحة القصيدة من التطبيق، يُفتح موقع قافية في المتصفح وتسري سياسة ذلك الموقع على تلك الزيارة.",
    },
    en: {
      title: "Internet use",
      body: "The app requests a random poem from the public Qafiyah API (api.qafiyah.com). That request does not include personal information about you. If you open the poem page, qafiyah.com opens in the browser and that site’s own policy applies.",
    },
  },
  {
    ar: {
      title: "صلاحيات الجهاز",
      body: "قد يطلب التطبيق إذن الوصول إلى معرض الصور فقط إذا اخترت حفظ صورة الخلفية التي أنشأتها من القصيدة. تُحفظ الصورة على جهازك ولا تُرفع إلى أي خادم. المشاركة تتم عبر قائمة المشاركة في نظام التشغيل، ويصل المحتوى فقط إلى التطبيق الذي تختاره أنت.",
    },
    en: {
      title: "Device permissions",
      body: "Photo-library access is requested only if you choose to save a wallpaper image generated from a poem. The image stays on your device and is not uploaded. Sharing uses the system share sheet and only goes to the app you pick.",
    },
  },
  {
    ar: {
      title: "الأطفال",
      body: "التطبيق لا يجمع بيانات شخصية من أي مستخدم، بمن فيهم الأطفال.",
    },
    en: {
      title: "Children",
      body: "The app does not collect personal data from anyone, including children.",
    },
  },
  {
    ar: {
      title: "التغييرات",
      body: "إذا تغيّر سلوك التطبيق تجاه البيانات، سنحدّث هذه الصفحة ونغيّر تاريخ آخر تحديث أعلاه.",
    },
    en: {
      title: "Changes",
      body: "If how the app handles data changes, we will update this page and the date above.",
    },
  },
] as const;

function PrivacyPolicy() {
  useEffect(() => {
    document.title = "سياسة الخصوصية — الرندي";
    return () => {
      document.title = "Hareb";
    };
  }, []);

  return (
    <div className="min-h-screen bg-[#2c2c2c] text-[#F7f6f3] selection:bg-white/20">
      <div className="mx-auto flex min-h-screen max-w-6xl flex-col gap-10 px-5 py-10 sm:px-8 sm:py-14">
        <div dir="rtl">
          <Link
            to="/alrandi"
            className="inline-flex items-center gap-2 text-sm text-[#F7f6f3]/60 transition hover:text-[#F7f6f3]">
            <ArrowRight className="h-4 w-4" />
            العودة
          </Link>
        </div>

        <header dir="rtl" className="grid gap-6 sm:grid-cols-2 sm:items-end">
          <div dir="rtl" className="space-y-2 text-right">
            <p className="font-zain text-sm text-[#F7f6f3]/50">تطبيق الرندي</p>
            <h1 className="font-camel-bold text-4xl font-black tracking-tight text-[#F7f6f3] sm:text-5xl">
              سياسة الخصوصية
            </h1>
            <p className="font-zain text-[#F7f6f3]/70">
              آخر تحديث: {LAST_UPDATED_AR}
            </p>
          </div>
          <div dir="ltr" className="space-y-2 text-left">
            <p className="font-sans text-sm text-[#F7f6f3]/50">Al-Randi</p>
            <h1 className="font-sans text-4xl font-semibold tracking-tight text-[#F7f6f3] sm:text-5xl">
              Privacy Policy
            </h1>
            <p className="font-sans text-[#F7f6f3]/70">
              Last updated: {LAST_UPDATED_EN}
            </p>
          </div>
        </header>

        <div className="space-y-4">
          {sections.map((section) => (
            <section
              key={section.en.title}
              className="grid gap-6 rounded-3xl border border-white/10 bg-gradient-to-b from-white/[0.08] to-white/[0.02] p-6 ring-1 ring-white/5 sm:grid-cols-2 sm:gap-10" dir="rtl">
              <div dir="rtl" className="text-right">
                <h2 className="mb-3 font-camel-bold text-xl text-[#F7f6f3]">
                  {section.ar.title}
                </h2>
                <p className="font-zain text-base leading-8 text-[#F7f6f3]/75">
                  {section.ar.body}
                </p>
              </div>
              <div dir="ltr" className="text-left">
                <h2 className="mb-3 font-sans text-xl font-semibold text-[#F7f6f3]">
                  {section.en.title}
                </h2>
                <p className="font-sans text-base leading-7 text-[#F7f6f3]/75">
                  {section.en.body}
                </p>
              </div>
            </section>
          ))}

          <section dir="rtl" className="grid gap-6 rounded-3xl border border-white/10 bg-gradient-to-b from-white/[0.08] to-white/[0.02] p-6 ring-1 ring-white/5 sm:grid-cols-2 sm:gap-10">
            <div dir="rtl" className="text-right">
              <h2 className="mb-3 font-camel-bold text-xl text-[#F7f6f3]">
                التواصل
              </h2>
              <p className="font-zain text-base leading-8 text-[#F7f6f3]/75">
                لأي سؤال عن الخصوصية راسل{" "}
                <a
                  href={`mailto:${SUPPORT_EMAIL}`}
                  className="underline decoration-white/30 underline-offset-4 hover:text-[#F7f6f3]"
                  dir="ltr">
                  {SUPPORT_EMAIL}
                </a>
              </p>
            </div>
            <div dir="ltr" className="text-left">
              <h2 className="mb-3 font-sans text-xl font-semibold text-[#F7f6f3]">
                Contact
              </h2>
              <p className="font-sans text-base leading-7 text-[#F7f6f3]/75">
                Questions about this policy:{" "}
                <a
                  href={`mailto:${SUPPORT_EMAIL}`}
                  className="underline decoration-white/30 underline-offset-4 hover:text-[#F7f6f3]">
                  {SUPPORT_EMAIL}
                </a>
              </p>
            </div>
          </section>
        </div>
      </div>
    </div>
  );
}

export default PrivacyPolicy;
