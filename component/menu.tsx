import Link from 'next/link';

export default function Menu() {
  return (
    <nav>
      <Link href='/'>
        <a>home</a>
      </Link>
      <Link href='/about'>
        <a>about</a>
      </Link>
    </nav>
  );
}
