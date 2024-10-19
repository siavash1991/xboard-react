import LaravelImg from '@assets/images/cards/active-project/laravel-logo.png';
import FigmaImg from '@assets/images/cards/active-project/figma-logo.png';
import vueImg from '@assets/images/cards/active-project/vue-logo.png';
import reactImg from '@assets/images/cards/active-project/react-logo.png';
import BootstrapImg from '@assets/images/cards/active-project/bootstrap-logo.png';
import SketchImg from '@assets/images/cards/active-project/sketch-logo.png';

export const projects = [
	{
		id: 1,
		title: 'Laravel',
		subtitle: 'eCommerce',
		logo: LaravelImg,
		progress: 65,
		progressColor: 'bg-red-500',
	},
	{
		id: 2,
		title: 'Figma',
		subtitle: 'App UI Kit',
		logo: FigmaImg,
		progress: 86,
		progressColor: 'bg-blue-500',
	},
	{
		id: 3,
		title: 'VueJs',
		subtitle: 'Calendar App',
		logo: vueImg,
		progress: 90,
		progressColor: 'bg-green-500',
	},
	{
		id: 4,
		title: 'React',
		subtitle: 'Dashboard',
		logo: reactImg,
		progress: 37,
		progressColor: 'bg-teal-500',
	},
	{
		id: 5,
		title: 'Bootstrap',
		subtitle: 'Website',
		logo: BootstrapImg,
		progress: 22,
		progressColor: 'bg-blue-500',
	},
	{
		id: 6,
		title: 'Sketch',
		subtitle: 'Website Design',
		logo: SketchImg,
		progress: 29,
		progressColor: 'bg-yellow-500',
	},
];
