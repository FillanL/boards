'use client';
import appStore from '@/store/appStore';
import React, { useEffect } from 'react';

function AppWrapper({ children }: { children: React.ReactNode }) {
	const theme = appStore((state) => state.theme);
	useEffect(() => {}, [theme]);
	return (
		<html lang="en" className={`${theme} dark:custom-blue bg-custom-white duration-1000`}>
			{children}
		</html>
	);
}

export default AppWrapper;
