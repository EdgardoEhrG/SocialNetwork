import React from "react";

import Link from "next/link";

const Navigation = (): JSX.Element => {
  return (
    <nav className="nav bg-dark d-flex justify-content-end">
      <Link className="nav-link text-light" href="/">
        Home
      </Link>
      <Link className="nav-link text-light" href="/login">
        Sign-in
      </Link>
      <Link className="nav-link text-light" href="/register">
        Sign-up
      </Link>
    </nav>
  );
};

export default Navigation;
