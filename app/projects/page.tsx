import ProjectCard from "@/components/ProjectCard";

export default function Projects() {
  return (
    <div className="p-10 grid md:grid-cols-3 gap-8">

      {/* Campus Connect */}
      <ProjectCard
        title="CampusConnect"
        desc="Dynamic platform that keeps students informed about placement interviews with real-time updates, schedules, and insights."
        image="/projects/campus.png"
        github="https://github.com/ANUSHREE52/Campus-Connect"
      />

      {/* Agri Market */}
      <ProjectCard
        title="AgriMarket"
        desc="Connects farmers directly to markets, enabling better pricing and increased profitability without middlemen."
        image="/projects/agrimarket.png"
        github="https://github.com/ANUSHREE52/Agri-Market"
      />

      {/* EduPing */}
      <ProjectCard
        title="EduPing"
        desc="Automatically extracts key information from long emails and reminds students about deadlines, venues, and events."
        image="/projects/eduping.png"
        github="https://github.com/ANUSHREE52/Full-Stack"
      />

    </div>
  );
}
