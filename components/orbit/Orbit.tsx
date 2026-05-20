"use client";

import { motion } from "framer-motion";

import {
    SiGo,
    SiRedis,
    SiMysql,
    SiOpensearch,
    SiDocker,
    SiKubernetes
} from "react-icons/si";

import {
    FaReact,
} from "react-icons/fa";

import {
    Search,
} from "lucide-react";

const nodes = [
    {
        name: "Go",
        icon: <SiGo size={30} className="text-cyan-300"/>,
        x: "52%",
        y: "8%",
        primary: true,
    },
    {
        name: "Redis",
        icon: <SiRedis size={26} className="text-red-400"  />,
        x: "71%",
        y: "28%",
        primary: false,
    },
    {
        name: "Opensearch",
        icon: <SiOpensearch size={24}  className="text-blue-300" />,
        x: "88%",
        y: "62%",
        primary: false,
    },
    //   {
    //     name: "React.js",
    //     icon: <SiReact size={24} />,
    //     x: "66%",
    //     y: "72%",
    //   },
    {
        name: "MySQL",
        icon: <SiMysql size={30}  className="text-blue-300"/>,
        x: "66%",
        y: "88%",
        primary: false,
    },
    {
        name: "Docker",
        icon: <SiDocker size={34} className="text-blue-500"/>,
        x: "26%",
        y: "68%",
        primary: false,
    },
    {
        name: "Kubernetes",
        icon: <SiKubernetes size={30} className="text-blue-500"/>,
        x: "12%",
        y: "35%",
        primary: false,
    },
];

export default function Orbit() {
    return (
        <div className="relative h-[520px] w-[520px]">

            {/* rotating layer */}
            <motion.div
                animate={{ rotate: 360 }}
                transition={{
                    duration: 70,
                    repeat: Infinity,
                    ease: "linear",
                }}
                className="absolute inset-0"
            >
                {/* rings */}
                {[200, 310, 430].map((size) => (
                    <div
                        key={size}
                        style={{
                            width: size,
                            height: size,
                        }}
                        className="absolute left-1/2 top-1/2 rounded-full border border-[rgba(124,58,237,0.14)] -translate-x-1/2 -translate-y-1/2"
                    />
                ))}

                {[
                    { x: "20%", y: "18%" },
                    { x: "72%", y: "14%" },
                    { x: "90%", y: "52%" },
                    { x: "28%", y: "82%" },
                    { x: "60%", y: "92%" },
                    { x: "10%", y: "58%" },
                ].map((dot, i) => (
                    <div
                        key={i}
                        style={{
                            left: dot.x,
                            top: dot.y,
                        }}
                        className="absolute h-1 w-1 rounded-full bg-purple-300/30"
                    />
                ))}

                {/* orbit nodes */}
                {nodes.map((node) => (
                    <motion.div
                        key={node.name}
                        whileHover={{ scale: 1.08 }}
                        animate={{ rotate: -360 }}
                        transition={{
                            duration: 70,
                            repeat: Infinity,
                            ease: "linear",
                        }}
                        style={{
                            left: node.x,
                            top: node.y,
                        }}
                        className="absolute -translate-x-1/2 -translate-y-1/2"
                    >
                        <div className={`
    flex items-center justify-center rounded-full
    border border-[rgba(124,58,237,0.28)]
    bg-[rgba(10,15,25,0.92)]
    backdrop-blur-xl
    shadow-[0_0_30px_rgba(124,58,237,0.12)]
    transition-all
    ${node.primary
                                ? "h-22 w-22 md:h-24 md:w-24"
                                : "h-18 w-18 md:h-20 md:w-20"
                            }
  `}>
                            <div className="flex flex-col items-center gap-1">
                                {node.icon}

                                <span className="text-[11px] text-zinc-400">
                                    {node.name}
                                </span>
                            </div>
                        </div>
                    </motion.div>
                ))}
            </motion.div>

            {/* static center */}
            <div className="absolute left-1/2 top-1/2 flex h-44 w-44 -translate-x-1/2 -translate-y-1/2 items-center justify-center rounded-full border border-[rgba(124,58,237,0.35)] bg-[rgba(124,58,237,0.12)] backdrop-blur-xl shadow-[0_0_60px_rgba(124,58,237,0.22)]">
                <div className="text-center">
                    <p className="heading-font text-3xl leading-tight">
                        Build.
                        <br />
                        Scale.
                        <br />
                        Evolve.
                    </p>
                </div>
            </div>
        </div>
    );
}