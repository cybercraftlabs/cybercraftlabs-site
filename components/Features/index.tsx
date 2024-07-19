"use client";
import React from "react";
import SectionHeader from "../Common/SectionHeader";
import { NewServices } from "../ui/NewServices";
import { motion } from "framer-motion";

const Feature = () => {
  return (
    <>
      {/* <!-- ===== Features Start ===== --> */}
      <section id="features" className="py-20 lg:py-25 xl:py-30">
        <div className="mx-auto max-w-c-1315 px-4 md:px-8 xl:px-0">
          {/* <!-- Section Title Start --> */}
          <SectionHeader
            headerInfo={{
              title: "OUR SERVICES",
              subtitle: "Services we deliver",
              description: `We run all kinds of IT services that vow your success. CyberCraft Labs,
               a leading software development company, specializes in helping clients achieve business
                goals with advanced technology. We prioritize client objectives, crafting effective
                 software solutions through reverse engineering.`,
            }}
          />
          <motion.div
            variants={{
              hidden: {
                opacity: 0,
                y: -10,
              },

              visible: {
                opacity: 1,
                y: 0,
              },
            }}
            initial="hidden"
            whileInView="visible"
            transition={{ duration: 0.5 }}
            viewport={{ once: true }}
            className="animate_top z-40 transition-all"
          >
            <NewServices />
          </motion.div>
        </div>
      </section>

      {/* <!-- ===== Features End ===== --> */}
    </>
  );
};

export default Feature;
