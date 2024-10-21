import { render, screen, within } from '@testing-library/react';
import XCaptionTable from '@organisms/Tables/TableCaption';
import avatar5 from '@assets/images/avatars/5.png';
import avatar6 from '@assets/images/avatars/6.png';
import avatar7 from '@assets/images/avatars/7.png';
import LaravelImg from '@assets/images/cards/active-project/laravel-logo.png';
import vueImg from '@assets/images/cards/active-project/vue-logo.png';
import FigmaImg from '@assets/images/cards/active-project/figma-logo.png';
import reactImg from '@assets/images/cards/active-project/react-logo.png';

describe('XCaptionTable', () => {
	const mockTableData = [
		{
			id: '1',
			project: 'Laravel Project',
			logo: LaravelImg,
			client: 'Olivia Parker',
			users: [
				{ id: '1', fullName: 'John Doe', avatarUrl: avatar5 },
				{ id: '2', fullName: 'Jane Smith', avatarUrl: avatar6 },
				{ id: '3', fullName: 'Alice Johnson', avatarUrl: avatar7 },
			],
			status: 'Pending',
			statusColor: 'bg-blue-100',
			statusTextColor: 'text-blue-500',
		},
		{
			id: '2',
			project: 'VueJs Project',
			logo: vueImg,
			client: 'Liam Carter',
			users: [
				{ id: '1', fullName: 'John Doe', avatarUrl: avatar5 },
				{ id: '2', fullName: 'Jane Smith', avatarUrl: avatar6 },
				{ id: '3', fullName: 'Alice Johnson', avatarUrl: avatar7 },
			],
			status: 'Scheduled',
			statusColor: 'bg-yellow-100',
			statusTextColor: 'text-yellow-500',
		},
		{
			id: '3',
			project: 'Figma Design',
			logo: FigmaImg,
			client: 'Sophia Walker',
			users: [
				{ id: '1', fullName: 'John Doe', avatarUrl: avatar5 },
				{ id: '2', fullName: 'Jane Smith', avatarUrl: avatar6 },
				{ id: '3', fullName: 'Alice Johnson', avatarUrl: avatar7 },
			],
			status: 'Active',
			statusColor: 'bg-green-100',
			statusTextColor: 'text-green-500',
		},
		{
			id: '4',
			project: 'React Project',
			logo: reactImg,
			client: 'Noah Brooks',
			users: [
				{ id: '1', fullName: 'John Doe', avatarUrl: avatar5 },
				{ id: '2', fullName: 'Jane Smith', avatarUrl: avatar6 },
				{ id: '3', fullName: 'Alice Johnson', avatarUrl: avatar7 },
			],
			status: 'Pending',
			statusColor: 'bg-blue-100',
			statusTextColor: 'text-blue-500',
		},
	];

	it('should render the table with the correct headers', () => {
		render(<XCaptionTable tableData={mockTableData} />);

		expect(screen.getByText('Project')).toBeInTheDocument();
		expect(screen.getByText('Client')).toBeInTheDocument();
		expect(screen.getByText('Users')).toBeInTheDocument();
		expect(screen.getByText('Status')).toBeInTheDocument();
		expect(screen.getByText('Actions')).toBeInTheDocument();
	});

	it('should render the correct number of rows', () => {
		render(<XCaptionTable tableData={mockTableData} />);

		const rows = screen.getAllByRole('row');
		expect(rows).toHaveLength(mockTableData.length);
	});

	it('should render the correct project names and clients', () => {
		render(<XCaptionTable tableData={mockTableData} />);

		mockTableData.forEach((item) => {
			expect(screen.getByText(item.project)).toBeInTheDocument();
			expect(screen.getByText(item.client)).toBeInTheDocument();
		});
	});

	it('should render the correct status with colors', () => {
		render(<XCaptionTable tableData={mockTableData} />);

		mockTableData.forEach((item) => {
			const statusElements = screen.getAllByText(item.status);

			statusElements.forEach((statusElement) => {
				expect(statusElement).toBeInTheDocument();
				expect(statusElement).toHaveClass(item.statusColor);
				expect(statusElement).toHaveClass(item.statusTextColor);
			});
		});
	});

	it('should render the correct number of users for each project', () => {
		render(<XCaptionTable tableData={mockTableData} />);

		// Get all the rows in the table body
		const rows = screen.getAllByTestId('table-row');

		// Iterate over the mock table data to match each row
		mockTableData.forEach((item, index) => {
			// Get the current row based on the index
			const row = rows[index];

			// Find all avatar images within this row
			const avatarImages = within(row).getAllByAltText((alt) =>
				alt.includes('Avatar of')
			);

			// Ensure that the number of avatars matches the number of users for this project
			expect(avatarImages).toHaveLength(item.users.length);
		});
	});

	it('should display the correct table caption', () => {
		render(<XCaptionTable tableData={mockTableData} />);

		expect(screen.getByText('List of Projects')).toBeInTheDocument();
	});
});
