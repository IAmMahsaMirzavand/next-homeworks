import Link from 'next/link';

export default function Home() {
  return (


<div>


<h1>Home Page</h1>

<ul>

<li><Link href="/store">Store</Link></li>
<li><Link href="/support">Support</Link></li>
<li><Link href="/about">About</Link></li>
</ul>

  
</div>

  );
}
