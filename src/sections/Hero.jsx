import React from "react";
import { motion } from "framer-motion";
import appImage from "../assets/images/app.png";

const Hero = () => {
  return (
    <section className="relative w-full overflow-hidden bg-white">
      <div className="mx-auto flex min-h-[calc(100vh-108px)] max-w-[1440px] items-center px-8 sm:px-10 lg:px-16 xl:px-20">

        {/* ================= LEFT CONTENT ================= */}
        <motion.div
          initial={{ opacity: 0, y: 24 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{
            duration: 0.7,
            ease: [0.22, 1, 0.36, 1],
          }}
          className="relative z-10 w-full lg:w-[54%]"
        >
          {/* Eyebrow */}
          <p className="mb-6 text-[13px] font-medium uppercase tracking-[0.14em] text-[#58708F]">
            Financial Peace Of Mind
          </p>

          {/* Heading */}
          <h1 className="max-w-[680px] text-[52px] font-extrabold leading-[1.08] tracking-[-0.045em] text-[#111827] sm:text-[58px] lg:text-[64px] xl:text-[68px]">
            Pay Smarter. Get
            <br />
            Rewarded.{" "}
            <span className="text-[#2463EB]">
              Bank
              <br />
              Simpler.
            </span>
          </h1>

          {/* Description */}
          <p className="mt-7 max-w-[500px] text-[16px] leading-[1.7] text-[#58708F] sm:text-[17px]">
            A smarter, safer, more rewarding way to pay. Join MyCredAxis and
            experience a new way of managing your finances.
          </p>

          {/* CTA */}
          <div className="mt-8">
            <button
              type="button"
              className="inline-flex h-[54px] items-center justify-center rounded-full bg-[#0A0A0B] px-8 text-[15px] font-semibold text-white shadow-[0_10px_28px_rgba(0,0,0,0.12)] transition-all duration-300 hover:-translate-y-0.5 hover:bg-[#171719]"
            >
              Download App
            </button>
          </div>
        </motion.div>

        {/* ================= RIGHT MOCKUP ================= */}
        <motion.div
          initial={{ opacity: 0, x: 35, y: 15 }}
          animate={{ opacity: 1, x: 0, y: 0 }}
          transition={{
            duration: 0.8,
            delay: 0.15,
            ease: [0.22, 1, 0.36, 1],
          }}
          className="absolute right-[7%] top-1/2 hidden -translate-y-1/2 lg:block"
        >
          <div className="relative flex h-[580px] w-[380px] items-center justify-center">

            {/* Glowing Gradient Background Behind the Phone */}
            <div className="absolute left-[-20%] top-1/2 h-[450px] w-[450px] -translate-y-1/2 rounded-full bg-gradient-to-br from-blue-400/40 via-purple-300/30 to-transparent blur-[100px]" />

            {/* Phone */}
            <div
              className="
                relative
                h-[535px]
                w-[280px]
                rotate-[10deg]
                overflow-hidden
                rounded-[43px]
                border-[6px]
                border-[#050505]
                bg-[#F2F3F6]
                shadow-[0_28px_55px_rgba(0,0,0,0.14)]
              "
            >
              {/* App Screenshot */}
              <img
                src={appImage}
                alt="MyCredAxis mobile application"
                className="absolute inset-[6px] h-[calc(100%-12px)] w-[calc(100%-12px)] rounded-[37px] object-cover"
              />
            </div>

          </div>
        </motion.div>

        {/* ================= MOBILE MOCKUP ================= */}
        <motion.div
          initial={{ opacity: 0, y: 25 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.7, delay: 0.15 }}
          className="mt-14 flex w-full justify-center relative lg:hidden"
        >
          {/* Glowing Gradient Background for Mobile View */}
          <div className="absolute top-1/2 left-1/2 h-[350px] w-[350px] -translate-x-1/2 -translate-y-1/2 rounded-full bg-gradient-to-br from-blue-400/40 via-purple-300/30 to-transparent blur-[80px]" />

          <div className="relative h-[530px] w-[275px] rotate-[8deg] overflow-hidden rounded-[40px] border-[6px] border-[#050505] bg-[#F2F3F6] shadow-[0_25px_50px_rgba(0,0,0,0.14)]">

            {/* App Screenshot */}
            <img
              src={appImage}
              alt="MyCredAxis mobile application"
              className="absolute inset-[6px] h-[calc(100%-12px)] w-[calc(100%-12px)] rounded-[34px] object-cover"
            />

          </div>
        </motion.div>

      </div>
    </section>
  );
};

export default Hero;