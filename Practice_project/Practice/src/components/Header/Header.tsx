export default function Header() {
  const linkCollection = [
    {
      text: "our mission",
      href: "/",
      class: "capitalize",
    },
    {
      text: "Browse Sessions",
      href: "/sessions",
      class: "capitalize hover:underline",
    },
    {
      text: "upcoming sessions",
      href: "/sessions",
      class: "hover:underline rounded-md button bg-pink-500",
    },
  ];

  return (
    <header className="flex justify-between items-center w-full p-5">
      <a href="/">ReactMentoring</a>
      <ul className="flex gap-2">
        {linkCollection.map((item, index) => (
          <li>
            <a href={item.href} className={item.class}>
              {item.text}
            </a>
          </li>
        ))}
      </ul>
    </header>
  );
}
