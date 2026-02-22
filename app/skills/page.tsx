export default function Skills() {
  const skills = [
    "React",
    "Next.js",
    "Node.js",
    "MongoDB",
    "TypeScript",
    "Tailwind CSS",
    "Docker",
    "Jenkins",
    "AWS EC2",
    "Cloud Computing",
    "Git & GitHub",
    "CI/CD",
  ];

  return (
    <div className="p-10 max-w-4xl mx-auto">
      <h1 className="text-3xl font-bold text-center">My Skills</h1>

      <div className="grid grid-cols-2 md:grid-cols-4 gap-6 mt-10">
        {skills.map((skill, i) => (
          <div
            key={i}
            className="bg-white shadow-md p-4 rounded-xl text-center font-medium hover:scale-105 transition"
          >
            {skill}
          </div>
        ))}
      </div>
    </div>
  );
}
