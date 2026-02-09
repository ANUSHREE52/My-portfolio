export default function Skills() {
  return (
    <div className="p-10 max-w-6xl mx-auto">
      <h1 className="text-4xl font-bold text-center mb-10">Skills</h1>

      <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-6">

        {/* Frontend */}
        <div className="p-6 bg-white rounded-xl shadow-lg hover:shadow-2xl transition">
          <h2 className="text-xl font-semibold mb-3">Frontend</h2>
          <ul className="text-gray-600 space-y-1">
            <li>React.js</li>
            <li>Next.js</li>
            <li>Tailwind CSS</li>
            <li>JavaScript / TypeScript</li>
            <li>HTML & CSS</li>
          </ul>
        </div>

        {/* Backend */}
        <div className="p-6 bg-white rounded-xl shadow-lg hover:shadow-2xl transition">
          <h2 className="text-xl font-semibold mb-3">Backend</h2>
          <ul className="text-gray-600 space-y-1">
            <li>Node.js</li>
            <li>Express.js</li>
            <li>REST APIs</li>
            <li>Authentication (JWT)</li>
          </ul>
        </div>

        {/* Database */}
        <div className="p-6 bg-white rounded-xl shadow-lg hover:shadow-2xl transition">
          <h2 className="text-xl font-semibold mb-3">Database</h2>
          <ul className="text-gray-600 space-y-1">
            <li>MongoDB</li>
            <li>MySQL</li>
            <li>Supabase</li>
          </ul>
        </div>

        {/* DevOps */}
        <div className="p-6 bg-white rounded-xl shadow-lg hover:shadow-2xl transition">
          <h2 className="text-xl font-semibold mb-3">DevOps & Cloud</h2>
          <ul className="text-gray-600 space-y-1">
            <li>Docker</li>
            <li>Jenkins</li>
            <li>CI/CD Pipelines</li>
          </ul>
        </div>

        {/* Tools */}
        <div className="p-6 bg-white rounded-xl shadow-lg hover:shadow-2xl transition">
          <h2 className="text-xl font-semibold mb-3">Tools</h2>
          <ul className="text-gray-600 space-y-1">
            <li>Git & GitHub</li>
            <li>VS Code</li>
          </ul>
        </div>

      </div>
    </div>
  );
}
