"use client";
import { gsap } from "gsap";
import React from "react";
import { useGSAP } from "@gsap/react";
import useScrollSmooth from "@/hooks/use-scroll-smooth";
import { ScrollSmoother, ScrollTrigger, SplitText } from "@/plugins";
gsap.registerPlugin(ScrollTrigger, ScrollSmoother, SplitText);

import Wrapper from "@/layouts/wrapper";
import HeaderEleven from "@/layouts/headers/header-eleven";
import ContactOne from "@/components/contact/contact-one";
import FooterTwo from "@/layouts/footers/footer-two";
import { charAnimation, fadeAnimation, titleAnimation } from "@/utils/title-animation";

const ContactMain = () => {
  useScrollSmooth();

  useGSAP(() => {
    const timer = setTimeout(() => {
      charAnimation();
      titleAnimation();
      fadeAnimation();
    }, 100);

    return () => clearTimeout(timer);
  });

  return (
    <Wrapper>
      <HeaderEleven />

      <div id="smooth-wrapper">
        <div id="smooth-content">
          <main>
            <div className="pt-200">
              <ContactOne />
            </div>
          </main>

          <FooterTwo topCls="" />
        </div>
      </div>
    </Wrapper>
  );
};

export default ContactMain;
