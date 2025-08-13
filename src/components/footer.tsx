export default function Footer() {
  return (
    <footer
      style={{
        backgroundColor: "#1a1a1a",
        color: "#ccc",
        padding: "1rem",
        textAlign: "center",
        fontSize: "0.875rem",
      }}
    >
      <p>
        Website developed by <strong>Gus Cornejo</strong> using Next.js.
      </p>
      <p>&copy; {new Date().getFullYear()} Gus Cornejo. All rights reserved.</p>
    </footer>
  );
}
