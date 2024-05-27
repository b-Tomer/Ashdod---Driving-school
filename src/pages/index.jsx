import About from "@/Components/About";
import ContactForm from "@/Components/ContactForm";
import Footer from "@/Components/Footer";
import ServicePreview from "@/Components/ServicePreview";
import TestimonialCard from "@/Components/TestimonialCard";
import Head from "next/head";
import Image from "next/image";

export default function Home() {

  const services = [
    {
      title: ' רישיון למשא עד 12 טון אוטומט C1 חדש בארץ!',
      description: 'נצלו את ההזדמנות לנהוג במשאית אוטומטית מתקדמת, שמביאה עימה את החידושים האחרונים של משרד התחבורה. עם מערך ההנעה האוטומטי, לימוד נהיגה מתקדם מעולם לא היה קל יותר - מושלם למי שמתקשה בהעברת הילוכים או מחפש חווית למידה חלקה ונוחה. זו הזדמנות נדירה להשיג את רישיון דרגה C1 עד 12 טון, מה שיכול לשרת אתכם למגוון מטרות - הן אישיות והן מקצועיות. התקדמו בקריירה שלכם עם יתרון משמעותי והתמודדו עם אתגרי הדרך בקלות ובביטחון.',
      imageUrl: "https://res.cloudinary.com/dxpmdqqdc/image/upload/v1711904889/ashdod%20-%20driving%20school/szricpqdlekt3dgvbld5.jpg",
      serviceUrl: '/'
    },
    {
      title: 'רישיון לרכב פרטי דרגה B',
      description: 'תתחילו את מסע הנהיגה שלכם עם צוות המורים המקצוענים שלנו, המלווים אתכם להצלחה על גבי ה-BYD המתקדם. הגישה שלנו מאפשרת למידה בקצב האישי של כל תלמיד, תוך התמקדות בנהיגה בטוחה ויעילה. ה-BYD מצויד בטכנולוגיות חדשניות שמקדמות בטיחות מרבית בכל שיעור נהיגה, מקצרת את הדרך להשגת רישיון תוך דגש על עלות נמוכה ובטיחות מקסימלית. הלמידה המותאמת אישית מבטיחה שתרגישו בטוחים ומוכנים לכל אתגר בדרך.',
      imageUrl: "https://res.cloudinary.com/dxpmdqqdc/image/upload/v1711894266/ashdod%20-%20driving%20school/fgzfikjjnyhnbuhlwdec.jpg",
      serviceUrl: '/'
    },
    {
      title: 'רישיון למשא עד 12 טון דרגה C1',
      description: 'בואו להנות מלמידה יעילה עם משאית טויוטה איכותית, אשר תוכננה להתמודד במיומנות בצמתים צרים ורחובות סואנים. הנהיגה הפשוטה והנוחה עם המשאית מקצרת את מסלול הלימוד ומאיצה את קצב ההתקדמות אל הרישיון המבוקש, הן לצרכים אישיים והן מקצועיים. בעלי רישיון מסוג B יכולים להרחיב את טווח ההכשרה שלהם באמצעות המשאית המתקדמת הזו, מהלך שיאיץ את הזמן לשדרוג הרישיון ויפתח דלתות בשוק העבודה.',
      imageUrl: "https://res.cloudinary.com/dxpmdqqdc/image/upload/v1711904889/ashdod%20-%20driving%20school/ozparu7lbtqzbuql46oe.jpg",
      serviceUrl: '/'
    },
    {
      title: 'סימולטור לנהיגה',
      description: 'בחוויית למידה מתקדמת, הסימולטור המתקדם שלנו מ-FAROS צרפת מציע הכשרה ריאליסטית בנהיגה. תרגול נהיגת לילה, נהיגה בתנאי חורף כמו גשם וערפל, ומצבי סכנה בעיר ובכבישים בין עירוניים. ההכשרה בסימולטור מבטיחה חיסכון בזמן ובעלות השיעורים - בחירה חכמה ומומלצת ביותר!',
      imageUrl: "https://res.cloudinary.com/dxpmdqqdc/image/upload/v1711985694/ashdod%20-%20driving%20school/zc99uddjep8tswbt8gfc.jpg",
      serviceUrl: '/'
    }
  ];

  const testimonials = [
    {
      imageUrl: "https://res.cloudinary.com/dxpmdqqdc/image/upload/v1711906508/ashdod%20-%20driving%20school/bt6lpnis7z6igwp7jlvl.jpg",
      name: "ליהי",
      text: "עברתי את הטסט בלי בעיות בזכות המורים המעולים של בית ספר לנהיגה 'אשדוד'. הם ממש סבלניים ומלמדים בצורה קלילה וברורה. כל שיעור היה כיף ולמדתי המון. ממליצה בחום!"
    },
    {
      imageUrl: "https://res.cloudinary.com/dxpmdqqdc/image/upload/v1711906580/ashdod%20-%20driving%20school/xbvpqordtxiys17euuy2.jpg",
      name: `ג'ונה`,
      text: "בית ספר לנהיגה 'אשדוד' זה המקום הכי טוב ויעיל ללימוד נהיגה. המורים מקצועיים והוצאתי רישיון בהרבה פחות זמן ממה שחשבתי שאפשר. תודה רבה על הכל!"
    },
    {
      imageUrl: "https://res.cloudinary.com/dxpmdqqdc/image/upload/v1711906580/ashdod%20-%20driving%20school/jpqw47nm6vpv4b3ztfkt.jpg",
      name: "תומר",
      text: "חווית לימוד מושלמת מהתחלה ועד הסוף. שמעון פשוט מורה אדיר מנוסה וסבלני ובזכותו הוצאתי רישיון על משאית תוך פחות מחודש ."
    },

  ];

  return (
    <main dir="rtl" className=" mx-auto bg-main-yellow scroll-smooth">
      <Head>
        <title>בית ספר לנהיגה - אשדוד</title>
        {/* <link rel="icon" href="/favicon.ico" /> */}
      </Head>

      {/* Hero section */}
      <section className="relative ">
        <div className="relative overflow-hidden w-full h-[450px] sm:h-[600px]">
          <Image
            src="https://res.cloudinary.com/dxpmdqqdc/image/upload/v1711894266/ashdod%20-%20driving%20school/fgzfikjjnyhnbuhlwdec.jpg"
            alt="בית ספר לנהיגה"
            className="object-cover object-center select-none pointer-events-none"
            fill
          />
          <div className="absolute bottom-0 left-0 right-0 bg-gradient-to-b from-transparent to-fade-blue h-[200px] w-full">
            <div className="relative z-10 text-center text-white py-2">
              <h1 className="text-3xl sm:text-5xl font-bold font-ibm">בית ספר לנהיגה &#34;אשדוד&#34;</h1>
              <p className="text-xl mt-4">בית הספר שלך לנהיגה באשדוד והסביבה</p>
              <a href="#contact" className="mt-8 inline-block bg-main-yellow text-main-blue font-bold text-center py-2.5 px-6 rounded">צור קשר</a>
            </div>
          </div>
        </div>
      </section>


      {/*  Services section */}
      <div id="services" className="bg-gray-800 py-8 border-y-2 border-y-gray-500">
        <div className="mx-auto py-8 border-4 border-dashed border-white border-x-0">
          <div className=" border-y-2 border-y-gray-500 sm:px-5 pt-4">
            <h2 className="text-center text-white text-3xl font-bold font-ibm mb-6 ">
              מה תוכלו ללמוד אצלנו?
            </h2>
            {/* This div represents the container for your services */}
            <div class="flex flex-col justify-center items-start gap-0 sm:gap-4 py-4 sm:grid sm:grid-cols-2">
              {services.map((service, index) => (
                <ServicePreview
                  key={index}
                  title={service.title}
                  description={service.description}
                  imageUrl={service.imageUrl}
                  serviceUrl={service.serviceUrl}
                />
              ))}
            </div>
          </div>
        </div>
      </div>


      {/*  Testimonials section */}
      <section id="testimonials" className="bg-main-yellow py-12">
        <div className="container mx-auto px-6">
          <h2 className="text-3xl font-bold text-center text-main-blue font-ibm">תלמידים מפרגנים</h2>
          <div className="flex flex-wrap justify-center mt-8">
            {testimonials.map((testimonial, index) => (
              <TestimonialCard
                key={index}
                imageUrl={testimonial.imageUrl}
                name={testimonial.name}
                text={testimonial.text}
              />
            ))}
          </div>
        </div>
      </section>



      <section id="about" className="bg-white py-12">
        <div className="container mx-auto px-6">
          <h2 className="text-3xl font-bold text-center text-main-blue font-ibm">קצת עלינו</h2>
          <About />
        </div>
      </section>

      {/*  Contact section */}
      <section id="contact" className="flex flex-col justify-center items-center bg-gray-100 py-12">

        <h2 className="text-3xl font-bold text-center text-main-blue font-ibm">השאירו פרטים</h2>
        <ContactForm />

      </section>

      <Footer />

    </main>
  );
}

