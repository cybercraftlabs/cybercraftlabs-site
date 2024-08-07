import React from "react";
import { Service } from "@/types/services";
import { motion } from "framer-motion";

const SingleService = ({ service }: { service: Service }) => {
    const { title, description } = service;

    return (
        <>
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
                className="animate_top z-40 rounded-lg border border-white bg-white p-7.5 shadow-solid-3 transition-all hover:shadow-solid-4 dark:border-strokedark dark:bg-blacksection dark:hover:bg-hoverdark xl:p-12.5"
            >
                <h3 className="mb-3 text-xl font-semibold text-black dark:text-white xl:text-itemtitle">
                    {title}
                </h3>
                <p>{description}</p>
            </motion.div>
        </>
    );
};

export default SingleService;