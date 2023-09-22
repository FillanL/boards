type Route = {
	path: string;
	isAuth: boolean;
};
const routes: Record<string, Route> = {
	home: {
		path: '/',
		isAuth: false,
	},
	login: {
		path: '/',
		isAuth: false,
	},
};
export default routes;
