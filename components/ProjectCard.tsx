type Props = {
  title: string;
  desc: string;
<<<<<<< HEAD
  image: string;
=======
  image?: string;
>>>>>>> dedfe06e678734cb5c1229197367b3e5900c05aa
  github?: string;
  demo?: string;
};

export default function ProjectCard({
  title,
  desc,
  image,
  github,
  demo,
}: Props) {
  return (
    <div className="bg-white rounded-xl shadow-lg overflow-hidden hover:scale-105 transition duration-300">

      {/* IMAGE */}
<<<<<<< HEAD
      <img
        src={image}
        alt={title}
        className="h-40 w-full object-cover"
      />
=======
      {image ? (
        <img
          src={image}
          alt={title}
          className="h-40 w-full object-cover"
        />
      ) : (
        <div className="h-40 w-full bg-gray-200 flex items-center justify-center">
          <span className="text-gray-500">No Image</span>
        </div>
      )}
>>>>>>> dedfe06e678734cb5c1229197367b3e5900c05aa

      {/* CONTENT */}
      <div className="p-5">
        <h2 className="font-bold text-xl">{title}</h2>

        <p className="mt-2 text-gray-600">{desc}</p>

        {/* BUTTONS */}
        <div className="flex gap-3 mt-4">

          {github && (
            <a
              href={github}
              target="_blank"
              className="bg-black text-white px-4 py-2 rounded"
            >
              GitHub
            </a>
          )}

          {demo && (
            <a
              href={demo}
              target="_blank"
              className="bg-blue-600 text-white px-4 py-2 rounded"
            >
              Live Demo
            </a>
          )}

        </div>
      </div>
    </div>
  );
}
