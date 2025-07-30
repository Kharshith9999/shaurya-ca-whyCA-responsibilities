import React from "react";

const WhyCA = () => {
  const cards = [
    {
      heading: "Leadership\nDevelopment",
      content:
        "Boost your leadership skills by representing us on campus and organizing events.",
    },
    {
      heading: "Exclusive\nPerks",
      content:
        "Get access to certificates, rewards, merchandise, and internship opportunities.",
    },
    {
      heading: "Network\nBuilding",
      content:
        "Connect with ambitious peers, industry experts, and build lifelong connections.",
    },
  ];

  return (
    <div className="min-h-screen bg-[#0a0f1c] py-16 px-8 flex flex-col items-center justify-center">
      <h2
        className="text-5xl font-bold text-center mb-12"
        style={{
          color: "white",
          WebkitTextStroke: "1px darkorange",
          textStroke: "1px darkorange",
        }}
      >
        Why Become a Campus Ambassador?
      </h2>
      <br></br>
      <br></br>

      <div className="flex flex-wrap justify-center gap-8">
        {cards.map((card, index) => (
          <div key={index} className="w-[280px] h-[240px] perspective-[1000px]">
            <div className="relative w-full h-full transition-transform duration-700 ease-in-out [transform-style:preserve-3d] hover:[transform:rotateY(180deg)]">
              <div
                className="absolute w-full h-full p-4 rounded-[15px] flex items-center justify-center text-center text-black font-semibold shadow-md [backface-visibility:hidden] text-[1.8rem] whitespace-pre-line"
                style={{
                  background: "radial-gradient(circle at center, #fff7cc, #ffe37b, #ffcd00)",
                }}
              >
                <div className="leading-tight text-center">
                {card.heading.split("\n").map((line, idx) => (
                  <p key={idx}>{line}</p>
                ))}
                </div>
              </div>
              <div
                className="absolute w-full h-full p-4 rounded-[15px] flex items-center justify-center text-center text-black font-semibold shadow-md [backface-visibility:hidden] [transform:rotateY(180deg)] text-[1.2rem]"
                style={{
                  background: "radial-gradient(circle at center, #fff7cc, #ffe37b, #ffcd00)",
                }}
              >
                <p>{card.content}</p>
              </div>
            </div>
          </div>
        ))}
      </div>
    </div>
  );
};

export default WhyCA;
