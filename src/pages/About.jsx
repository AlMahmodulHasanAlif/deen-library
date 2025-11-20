import React from "react";

const About = () => {
  return (
    <section className="bg-gray-50 py-12 mt-10">
      <div className="container mx-auto px-6 md:px-12 lg:px-20 ">
        <h2 className="text-3xl font-bold text-center mb-6">
          About DeenLibrary
        </h2>

        <p className="text-gray-700 text-lg leading-relaxed text-center max-w-3xl mx-auto">
          DeenLibrary is a platform designed to make authentic Islamic knowledge
          easily accessible for everyone. Our collection features books from
          classical and contemporary scholars—covering Hadith, Fiqh, Aqidah,
          Tafseer, spiritual purification, and many other essential subjects. We
          aim to inspire readers to deepen their understanding of Islam through
          verified and high-quality literature.
        </p>
      </div>
    </section>
  );
};

export default About;
