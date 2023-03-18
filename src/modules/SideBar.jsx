export default function SideBar() {
  return (
    <aside className="menu" id="sidebar">
      <p className="menu-label">General</p>
      <ul className="menu-list">
        <li>
          <a>Home</a>
        </li>
        <li>
          <a>Create List</a>
        </li>
      </ul>
      <p className="menu-label">Grocery Lists</p>
      <ul className="menu-list">
        <li>
          <a>Delhaize</a>
        </li>
        <li>
          <a>Apotheker</a>
        </li>
      </ul>
    </aside>
  );
}
