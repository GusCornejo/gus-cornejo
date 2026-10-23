export default function Footer() {
  return (
    <footer className="bg-[#1a1a1a] text-[#ccc] p-4 text-center text-sm mt-auto">
      <p>
        Website developed by <strong>Gus Cornejo</strong> using Next.js.
      </p>
      <p>&copy; {new Date().getFullYear()} Gus Cornejo. All rights reserved.</p>
    </footer>
  );
}
