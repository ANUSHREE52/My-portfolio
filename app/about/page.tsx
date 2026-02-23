import Skills from "@/components/Skills";
import ProjectCard from "@/components/ProjectCard";

export default function Home() {
  return (
    <main className="p-10">

      {/* HERO */}
      <section className="text-center py-20">
        <h1 className="text-5xl font-bold">
          Hi, I'm Anushree
        </h1>

        <p className="mt-6 text-xl">
          MERN Full-Stack Intern
        </p>

        <p className="mt-6 text-xl">
          Computer Science Engineering student from
          Vidyavardhaka College of Engineering, Mysore
        </p>

        <a
          href="/resume.pdf"
          className="inline-block mt-8 bg-blue-600 text-white px-6 py-3 rounded-lg"
        >
          Download Resume
        </a>
      </section>


      {/* SKILLS */}
      <Skills />


      {/* PROJECTS */}
      <section className="mt-20">
        <h2 className="text-3xl font-bold text-center mb-10">Projects</h2>

        <div className="grid md:grid-cols-3 gap-6">

          <ProjectCard
            title="CampusConnect"
            desc="Platform that keeps students informed about placement interviews with real-time updates."
            image="/projects/campus.png"
            github="https://github.com/ANUSHREE52/Campus-Connect"
          />

          <ProjectCard
            title="AgriMarket"
            desc="Connects farmers directly to markets for better pricing and profits."
            image="/projects/agrimarket.png"
            github="https://github.com/ANUSHREE52/Agri-Market"
          />

          <ProjectCard
            title="EduPing"
            desc="Extracts key info from emails and reminds users about deadlines and events."
            image="/projects/eduping.png"
            github="https://github.com/ANUSHREE52/Full-Stack"
          />

        </div>
      </section>

    </main>
  );
}