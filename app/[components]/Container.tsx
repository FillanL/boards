'use client';
import { DragEvent, memo} from 'react';

type props = {
	children: React.ReactNode;
	color: string;
	containerName: string;
	handleDragEnter: (
		e: DragEvent<HTMLDivElement>,
		containerName: string
	) => void;
};
function Container({ children, color, containerName, handleDragEnter }: props) {
	return (
		<div
			className={`w-1/3 h-[75vh] ${color} p-2 `}
			onDragEnter={(e: DragEvent<HTMLDivElement>) =>
				handleDragEnter(e, containerName)
			}
		>
			{children}
		</div>
	);
}
export default memo(Container);
