import React from "react";
import { FaNodeJs, FaReact, FaCloud, FaGitAlt } from "react-icons/fa";
import { SiMongodb, SiExpress, SiNestjs, SiGraphql, SiMysql, SiRedis, } from "react-icons/si";

export default function Portfolio() {
  return (
    <div className="min-h-screen bg-gradient-to-tr from-indigo-100 via-sky-100 to-white py-16 px-4 md:px-20 text-gray-900">
      <div className="max-w-7xl mx-auto space-y-16">
        <header className="text-center">
          <h1 className="text-6xl font-extrabold text-transparent bg-clip-text bg-gradient-to-r from-indigo-700 to-purple-700 drop-shadow-lg">
            Deepak Kumar Maurya
          </h1>
          <p className="text-xl text-indigo-600 mt-4 font-medium tracking-wide">
            Backend Developer | Node.js | GraphQL | REST APIs | Cloud | DevOps
          </p>
        </header>

        <section className="bg-white rounded-3xl shadow-2xl p-10 border-l-[10px] border-purple-500">
          <h2 className="text-4xl font-bold text-purple-800 mb-6 border-b-4 border-purple-200 pb-2">About Me</h2>
          <p className="text-lg leading-8 text-gray-700">
            I am a passionate <strong className="text-indigo-700">Node.js Backend Developer</strong> with over 3 years of experience
            in building server-side components and scalable applications. I specialize in
            <strong className="text-indigo-700"> REST APIs</strong>, <strong className="text-indigo-700">GraphQL</strong>, and
            <strong className="text-indigo-700"> WebSockets</strong>. My hands-on expertise includes
            <strong className="text-indigo-700"> Node.js</strong>, <strong>Express.js</strong>, <strong>NestJS</strong>,
            <strong> MySQL</strong>, <strong>MongoDB</strong>, <strong>Redis</strong>, <strong>React.js</strong>,
            <strong> CI/CD</strong>, and <strong>Git</strong>. I’m enthusiastic about clean code, performance, and teamwork.
          </p>
        </section>

        <section className="text-center">
          <h2 className="text-4xl font-bold text-indigo-800 mb-10 underline decoration-indigo-400">Tech Stack</h2>
          <div className="grid grid-cols-2 sm:grid-cols-3 md:grid-cols-4 lg:grid-cols-5 gap-8">
            <Skill name="Node.js" icon={<FaNodeJs />} />
            <Skill name="Express.js" icon={<SiExpress />} />
            <Skill name="NestJS" icon={<SiNestjs />} />
            <Skill name="GraphQL" icon={<SiGraphql />} />
            <Skill name="MySQL" icon={<SiMysql />} />
            <Skill name="MongoDB" icon={<SiMongodb />} />
            <Skill name="Redis" icon={<SiRedis />} />
            <Skill name="React.js" icon={<FaReact />} />
            <Skill name="Cloud Services" icon={<FaCloud />} />
          </div>
        </section>

        <section className="bg-white rounded-3xl shadow-2xl p-10 border-l-[10px] border-sky-500">
          <h2 className="text-4xl font-bold text-sky-800 mb-6 border-b-4 border-sky-200 pb-2">Looking For</h2>
          <p className="text-lg leading-8 text-gray-700">
            I am actively seeking a challenging backend development role where I can contribute my experience,
            solve real-world problems, and grow alongside a passionate tech team. Let's build something impactful!
          </p>
        </section>
      </div>
    </div>
  );
}

function Skill({ name, icon }: { name: string; icon: React.ReactNode }) {
  return (
    <div className="flex flex-col items-center text-center p-6 bg-gradient-to-br from-white via-gray-50 to-indigo-50 rounded-xl shadow hover:shadow-2xl hover:-translate-y-1 transition-all duration-300">
      <div className="text-5xl mb-3 text-indigo-600">{icon}</div>
      <p className="text-base font-semibold text-gray-800">{name}</p>
    </div>
  );
}
