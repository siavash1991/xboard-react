import { Checkbox, Table } from 'flowbite-react';

const XSimpleTable = () => {
	return (
		<div className="component-wrapper  bg-component-light dark:bg-gray-600 col-span-12 mb-7">
			<Table hoverable className="w-full">
				<Table.Head>
					<Table.HeadCell className="p-4">
						<Checkbox />
					</Table.HeadCell>
					<Table.HeadCell>Product name</Table.HeadCell>
					<Table.HeadCell className="hidden md:table-cell">
						Color
					</Table.HeadCell>
					<Table.HeadCell className="hidden sm:table-cell">
						Category
					</Table.HeadCell>
					<Table.HeadCell>Price</Table.HeadCell>
					<Table.HeadCell>
						<span className="sr-only">Edit</span>
					</Table.HeadCell>
				</Table.Head>
				<Table.Body className="divide-y">
					<Table.Row className="bg-white dark:border-gray-700 dark:bg-gray-800">
						<Table.Cell className="p-4">
							<Checkbox />
						</Table.Cell>
						<Table.Cell className="whitespace-normal font-medium text-gray-900 dark:text-white">
							{'Apple MacBook Pro 17"'}
						</Table.Cell>
						<Table.Cell className="hidden md:table-cell">
							Sliver
						</Table.Cell>
						<Table.Cell className="hidden sm:table-cell">
							Laptop
						</Table.Cell>
						<Table.Cell>$2999</Table.Cell>
						<Table.Cell>
							<a
								href="#"
								className="font-medium text-cyan-600 hover:underline dark:text-cyan-500"
							>
								Edit
							</a>
						</Table.Cell>
					</Table.Row>
					<Table.Row className="bg-white dark:border-gray-700 dark:bg-gray-800">
						<Table.Cell className="p-4">
							<Checkbox />
						</Table.Cell>
						<Table.Cell className="whitespace-normal font-medium text-gray-900 dark:text-white">
							Microsoft Surface Pro
						</Table.Cell>
						<Table.Cell className="hidden md:table-cell">
							White
						</Table.Cell>
						<Table.Cell className="hidden sm:table-cell">
							Laptop PC
						</Table.Cell>
						<Table.Cell>$1999</Table.Cell>
						<Table.Cell>
							<a
								href="#"
								className="font-medium text-cyan-600 hover:underline dark:text-cyan-500"
							>
								Edit
							</a>
						</Table.Cell>
					</Table.Row>
					<Table.Row className="bg-white dark:border-gray-700 dark:bg-gray-800">
						<Table.Cell className="p-4">
							<Checkbox />
						</Table.Cell>
						<Table.Cell className="whitespace-normal font-medium text-gray-900 dark:text-white">
							Magic Mouse 2
						</Table.Cell>
						<Table.Cell className="hidden md:table-cell">
							Black
						</Table.Cell>
						<Table.Cell className="hidden sm:table-cell">
							Accessories
						</Table.Cell>
						<Table.Cell>$99</Table.Cell>
						<Table.Cell>
							<a
								href="#"
								className="font-medium text-cyan-600 hover:underline dark:text-cyan-500"
							>
								Edit
							</a>
						</Table.Cell>
					</Table.Row>
					<Table.Row className="bg-white dark:border-gray-700 dark:bg-gray-800">
						<Table.Cell className="p-4">
							<Checkbox />
						</Table.Cell>
						<Table.Cell className="whitespace-normal font-medium text-gray-900 dark:text-white">
							{'Apple MacBook Pro 17"'}
						</Table.Cell>
						<Table.Cell className="hidden md:table-cell">
							Sliver
						</Table.Cell>
						<Table.Cell className="hidden sm:table-cell">
							Laptop
						</Table.Cell>
						<Table.Cell>$2999</Table.Cell>
						<Table.Cell>
							<a
								href="#"
								className="font-medium text-cyan-600 hover:underline dark:text-cyan-500"
							>
								Edit
							</a>
						</Table.Cell>
					</Table.Row>
					<Table.Row className="bg-white dark:border-gray-700 dark:bg-gray-800">
						<Table.Cell className="p-4">
							<Checkbox />
						</Table.Cell>
						<Table.Cell className="whitespace-normal font-medium text-gray-900 dark:text-white">
							Microsoft Surface Pro
						</Table.Cell>
						<Table.Cell className="hidden md:table-cell">
							White
						</Table.Cell>
						<Table.Cell className="hidden sm:table-cell">
							Laptop PC
						</Table.Cell>
						<Table.Cell>$1999</Table.Cell>
						<Table.Cell>
							<a
								href="#"
								className="font-medium text-cyan-600 hover:underline dark:text-cyan-500"
							>
								Edit
							</a>
						</Table.Cell>
					</Table.Row>
					<Table.Row className="bg-white dark:border-gray-700 dark:bg-gray-800">
						<Table.Cell className="p-4">
							<Checkbox />
						</Table.Cell>
						<Table.Cell className="whitespace-normal font-medium text-gray-900 dark:text-white">
							Magic Mouse 2
						</Table.Cell>
						<Table.Cell className="hidden md:table-cell">
							Black
						</Table.Cell>
						<Table.Cell className="hidden sm:table-cell">
							Accessories
						</Table.Cell>
						<Table.Cell>$99</Table.Cell>
						<Table.Cell>
							<a
								href="#"
								className="font-medium text-cyan-600 hover:underline dark:text-cyan-500"
							>
								Edit
							</a>
						</Table.Cell>
					</Table.Row>
				</Table.Body>
			</Table>
		</div>
	);
};
export default XSimpleTable;
