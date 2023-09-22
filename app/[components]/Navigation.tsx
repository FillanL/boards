import Link from 'next/link';
import React from 'react';

export default function Navigation() {
	return (
		<nav className='space-x-3'>
			<Link href={'/'}>home</Link>
			<Link href={'/board'}>board</Link>
		</nav>
	);
}
