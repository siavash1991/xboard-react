import { Footer } from 'flowbite-react';
import Logo from '../../assets/images/favicon.svg';

const XFooter = () => {
	return (
		<Footer container className="mb-7 .sticky .bottom-0">
			<div className="w-full text-center">
				<div className="w-full flex flex-wrap items-center justify-center sm:justify-between">
					<Footer.Brand
						href="/xboard-react/"
						src={Logo}
						alt="Xboard Logo"
						name="XBoard"
					/>
					<Footer.LinkGroup>
						<Footer.Link href="#">About</Footer.Link>
						<Footer.Link href="#">LinkedIn</Footer.Link>
						<Footer.Link href="#">Github</Footer.Link>
					</Footer.LinkGroup>
				</div>
			</div>
		</Footer>
	);
};

export default XFooter;
