type props = {
	children: React.ReactNode;
	color: string;
};
export default function Container({ children, color }: props) {
	return <div className={`w-1/3 h-[75vh] ${color} p-2`}>{children}</div>;
}
