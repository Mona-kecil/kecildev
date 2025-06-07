import Link from "next/link";

const apps = [
  {
    name: "Donor Link",
    href: "/donor-link",
  },
  {
    name: "Bud",
    href: "/bud",
  },
];

export default function HomePage() {
  return (
    <div className="flex flex-col items-center justify-center h-screen gap-2">
      <h1>Available Apps</h1>
      <div className="flex flex-col items-center justify-center gap-2">
        {apps.map((app) => (
          <Link href={app.href} key={app.name} className="text-xl w-full text-center font-bold border-2 border-gray-300 rounded-md px-4 py-2 hover:bg-gray-100">
            {app.name}
          </Link>
        ))}
      </div>
    </div>
  );
}