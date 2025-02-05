// import Image from "next/image";
// import styles from "./page.module.css";

import Link from "next/link";

export default function Home() {
  return (
    <div className="main">
      <h1>Hola mundo 2</h1>
      <Link href="/usuario">
        <button>Ir a usuario</button>
      </Link>
    </div>
  );
}
