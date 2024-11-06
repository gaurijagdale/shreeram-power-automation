import React, { useRef } from "react";
import { LeafIcon, MonitorIcon, PlugIcon, SlidersIcon } from "lucide-react";
import { BentoCard, BentoGrid } from "@/components/magicui/bento-grid";
import { motion, useInView } from "framer-motion";
import DotPattern from "@/components/magicui/dot-pattern";
import { cn } from "@/lib/utils";
import Ripple from "@/components/magicui/ripple";

const solutions = [
    {
        Icon: SlidersIcon,
        name: "Automated Process Control",
        description:
            "Our advanced process control solutions monitor critical metrics like pressure, flow, and temperature, automatically adjusting system conditions in real time. This ensures optimal performance, reduces manual interventions, and enhances operational efficiency.",
        background: (
            <DotPattern
                className={cn(
                    "[mask-image:radial-gradient(300px_circle_at_top,white,transparent)]"
                )}
            />
        ),
        className: "lg:col-start-1 lg:col-end-2 lg:row-start-1 lg:row-end-3",
    },
    {
        Icon: PlugIcon,
        name: "Seamless Integration",
        description:
            "Our solutions are designed for effortless integration into existing systems, enabling quick deployment without the need for complex configurations. This plug-and-play approach ensures smooth transitions and reduced setup time.",
        background: (
            <Ripple
                mainCircleOpacity={0.15}
                className="h-[400px] origin-top rounded-md border transition-all duration-300 ease-out [mask-image:linear-gradient(to_top,transparent_40%,#000_100%)] group-hover:scale-105"
            />
        ),
        className: "lg:col-start-1 lg:col-end-3 lg:row-start-3 lg:row-end-4",
    },
    {
        Icon: LeafIcon,
        name: "Enhanced System Performance",
        description:
            "By maintaining ideal operational conditions, our automation solutions ensure improved productivity, energy efficiency, and consistent quality, leading to sustainable and reliable system performance.",
        background: (
            <DotPattern
                className={cn(
                    "[mask-image:radial-gradient(200px_circle_at_top,white,transparent)]"
                )}
            />
        ),
        className: "lg:col-start-2 lg:col-end-3 lg:row-start-1 lg:row-end-3",
    },
    {
        Icon: MonitorIcon,
        name: "Intuitive Monitoring Dashboard",
        description:
            "Our smart dashboard provides real-time monitoring and control, allowing users to track essential metrics, adjust settings, and access reports remotely. This feature enhances visibility, enabling proactive decision-making and streamlined operations.",
        background: (
            <DotPattern
                className={cn(
                    "[mask-image:radial-gradient(300px_circle_at_right,white,transparent)]"
                )}
            />
        ),
        className: "lg:col-start-3 lg:col-end-3 lg:row-start-1 lg:row-end-4",
    },
];




function Home3() {
    const ref = useRef(null);
    const isInView = useInView(ref, { once: true }); // Animates once when it comes into view

    return (
        <div className="w-full py-16 bg-Lblue">
            <div className="w-full flex flex-col items-center justify-center space-y-5">
                {/* <p className="">SOLUTIONS</p> */}
                <h2 className="text-3xl font-semibold ">
                    Our Wide Array of Services Tailored to Your Specific Requirements
                </h2>
                <p className="text-base font-medium text-center leading-6 tracking-wide text-slate-600 max-w-2xl">
                    Generic AI tools suffice. Our platform is purpose-built to provide
                    exceptional AI-driven solutions for your unique business needs.
                </p>
            </div>

            <div className="w-4/5 mx-auto flex flex-col items-center my-20">
                {/* <motion.h3
                    className="text-accent-foreground font-semibold text-3xl underline underline-offset-4 mb-12"
                    initial={{ opacity: 0, y: -10 }}
                    animate={isInView ? { opacity: 1, y: 0 } : {}} // Only animate if in view
                    transition={{ delay: 0.2, duration: 1.5, type: "spring" }}
                >
                    OUR SOLUTIONS
                </motion.h3> */}

                <motion.div
                    ref={ref}
                    initial={{ opacity: 0, y: -10 }}
                    animate={isInView ? { opacity: 1, y: 0 } : {}} // Only animate if in view
                    transition={{ delay: 0.4, duration: 2.5, type: "spring" }}
                >
                    <BentoGrid className="lg:grid-rows-3 ">
                        {solutions.map((feature) => (
                            <BentoCard key={feature.name} {...feature} />
                        ))}
                    </BentoGrid>
                </motion.div>
            </div>
        </div>
    )
}

export default Home3
