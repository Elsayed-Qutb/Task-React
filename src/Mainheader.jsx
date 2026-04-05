export default function Mainheader() {
  return (
    <header className="bg-dark text-light ">
      <div className="container d-flex  justify-content-between align-items-center p-1">
        <h1>cybr</h1>
        <img className="col-3" src="/Task-React/Search Field (1).png" alt="Search Field" />
        <nav className=" d-flex gap-3">
          <a>Home</a>
          <a>About</a>
          <a>contact</a>
          <a>Blog</a>
        </nav>
      </div>
    </header>
  );
}
