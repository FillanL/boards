'use client'
import Link from 'next/link';
import React from 'react';
import { Moon, Sun } from './icons';

export default function Navigation() {
	return (
		<nav className=" flex space-x-3 p-3 capitalize mb-6">
			<span className="before:block before:absolute before:-inset-1 before:skew-y-3 before:bg-yellow-500 relative inline-block">
				<span className="before:block before:absolute before:-inset-1 before:-skew-y-3 before:bg-green-500 relative inline-block">
					<Link href={'/'} className="px-3 relative z-10">
						Boards
					</Link>
				</span>
			</span>
			<Link href={'/'}>home</Link>
			<Link href={'/board'}>board</Link>
			<span className="flex-grow" />
			<Sun />
			<Moon />
		</nav>
	);
}
