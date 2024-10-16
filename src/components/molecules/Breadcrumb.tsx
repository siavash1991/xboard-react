import { Breadcrumb } from 'flowbite-react';

type BreadcrumbItem = {
	id: number;
	href?: string;
	label: string;
};
interface XBreadcrumbProps {
	className?: string;
	items: BreadcrumbItem[];
}

const XBreadcrumb: React.FC<XBreadcrumbProps> = ({ className = '', items }) => {
	return (
		<Breadcrumb
			aria-label="Default breadcrumb"
			className={`mb-2 ${className}`}
		>
			{items.map((item, index) => (
				<Breadcrumb.Item key={item.id} href={item.href}>
					{item.label}
				</Breadcrumb.Item>
			))}
		</Breadcrumb>
	);
};
export default XBreadcrumb;