import { Link, Outlet } from "react-router";
import "./app.css";

export default function Root() {
  return (
    <html>
      <head>
        <title>Recipe Router App</title>
      </head>

      <body>
        <nav>
          <Link to="/">Home</Link> |{" "}
          <Link to="/gallery">Gallery</Link>
        </nav>

        <main>
          <Outlet />
        </main>
      </body>
    </html>
  );
}
