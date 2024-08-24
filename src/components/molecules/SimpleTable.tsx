import ComponentWrapper from 'components/atoms/ComponentWrapper';
import { Checkbox, Table } from 'flowbite-react';
import React from 'react';

interface XSimpleTableProps {
	className?: string;
}
const XSimpleTable: React.FC<XSimpleTableProps> = ({ className = '' }) => {
	return (
		<ComponentWrapper className={className}>
			<Table hoverable className="w-full">
				<Table.Head>
					<Table.HeadCell className="p-4">
						<Checkbox />
					</Table.HeadCell>
					<Table.HeadCell>Product name</Table.HeadCell>
					<Table.HeadCell className="hidden font-normal text-xs md:table-cell">
						Color
					</Table.HeadCell>
					<Table.HeadCell className="hidden font-normal text-xs sm:table-cell">
						Category
					</Table.HeadCell>
					<Table.HeadCell>Price</Table.HeadCell>
					<Table.HeadCell>
						<span className="sr-only">Edit</span>
					</Table.HeadCell>
				</Table.Head>
				<Table.Body className="divide-y">
					<Table.Row>
						<Table.Cell className="p-4">
							<Checkbox />
						</Table.Cell>
						<Table.Cell className="whitespace-normal font-normal text-xs text-gray-900 dark:text-white">
							{'Apple MacBook Pro 17"'}
						</Table.Cell>
						<Table.Cell className="hidden font-normal text-xs md:table-cell">
							Sliver
						</Table.Cell>
						<Table.Cell className="hidden font-normal text-xs sm:table-cell">
							Laptop
						</Table.Cell>
						<Table.Cell className="font-normal text-xs">
							$ 2999
						</Table.Cell>
						<Table.Cell>
							<a
								href="/"
								className="font-normal text-xs text-cyan-600 hover:underline dark:text-cyan-500"
							>
								Edit
							</a>
						</Table.Cell>
					</Table.Row>
					<Table.Row>
						<Table.Cell className="p-4">
							<Checkbox />
						</Table.Cell>
						<Table.Cell className="whitespace-normal font-normal text-xs text-gray-900 dark:text-white">
							Microsoft Surface Pro
						</Table.Cell>
						<Table.Cell className="hidden font-normal text-xs md:table-cell">
							White
						</Table.Cell>
						<Table.Cell className="hidden font-normal text-xs sm:table-cell">
							Laptop PC
						</Table.Cell>
						<Table.Cell className="font-normal text-xs">
							$ 1999
						</Table.Cell>
						<Table.Cell>
							<a
								href="/"
								className="font-normal text-xs text-cyan-600 hover:underline dark:text-cyan-500"
							>
								Edit
							</a>
						</Table.Cell>
					</Table.Row>
					<Table.Row>
						<Table.Cell className="p-4">
							<Checkbox />
						</Table.Cell>
						<Table.Cell className="whitespace-normal font-normal text-xs text-gray-900 dark:text-white">
							Magic Mouse 2
						</Table.Cell>
						<Table.Cell className="hidden font-normal text-xs md:table-cell">
							Black
						</Table.Cell>
						<Table.Cell className="hidden font-normal text-xs sm:table-cell">
							Accessories
						</Table.Cell>
						<Table.Cell className="font-normal text-xs">
							$ 99
						</Table.Cell>
						<Table.Cell>
							<a
								href="/"
								className="font-normal text-xs text-cyan-600 hover:underline dark:text-cyan-500"
							>
								Edit
							</a>
						</Table.Cell>
					</Table.Row>
					<Table.Row>
						<Table.Cell className="p-4">
							<Checkbox />
						</Table.Cell>
						<Table.Cell className="whitespace-normal font-normal text-xs text-gray-900 dark:text-white">
							{'Apple MacBook Pro 17"'}
						</Table.Cell>
						<Table.Cell className="hidden font-normal text-xs md:table-cell">
							Sliver
						</Table.Cell>
						<Table.Cell className="hidden font-normal text-xs sm:table-cell">
							Laptop
						</Table.Cell>
						<Table.Cell className="font-normal text-xs">
							$ 2999
						</Table.Cell>
						<Table.Cell>
							<a
								href="/"
								className="font-normal text-xs text-cyan-600 hover:underline dark:text-cyan-500"
							>
								Edit
							</a>
						</Table.Cell>
					</Table.Row>
					<Table.Row>
						<Table.Cell className="p-4">
							<Checkbox />
						</Table.Cell>
						<Table.Cell className="whitespace-normal font-normal text-xs text-gray-900 dark:text-white">
							Microsoft Surface Pro
						</Table.Cell>
						<Table.Cell className="hidden font-normal text-xs md:table-cell">
							White
						</Table.Cell>
						<Table.Cell className="hidden font-normal text-xs sm:table-cell">
							Laptop PC
						</Table.Cell>
						<Table.Cell className="font-normal text-xs">
							$ 1999
						</Table.Cell>
						<Table.Cell>
							<a
								href="/"
								className="font-normal text-xs text-cyan-600 hover:underline dark:text-cyan-500"
							>
								Edit
							</a>
						</Table.Cell>
					</Table.Row>
					<Table.Row>
						<Table.Cell className="p-4">
							<Checkbox />
						</Table.Cell>
						<Table.Cell className="whitespace-normal font-normal text-xs text-gray-900 dark:text-white">
							Magic Mouse 2
						</Table.Cell>
						<Table.Cell className="hidden font-normal text-xs md:table-cell">
							Black
						</Table.Cell>
						<Table.Cell className="hidden font-normal text-xs sm:table-cell">
							Accessories
						</Table.Cell>
						<Table.Cell className="font-normal text-xs">
							$ 99
						</Table.Cell>
						<Table.Cell>
							<a
								href="/"
								className="font-normal text-xs text-cyan-600 hover:underline dark:text-cyan-500"
							>
								Edit
							</a>
						</Table.Cell>
					</Table.Row>
				</Table.Body>
			</Table>
		</ComponentWrapper>
	);
};
export default XSimpleTable;
