import React from 'react';
import XBaseLayout from '@templates/BaseLayout';
import XGridContainer from '@atoms/GridContainer';

import {
	XTableBasic,
	XTableDarkHead,
	XTableHeaderFooter,
	XTableCaption,
	XTableStriped,
	XTableHoverable,
	XTableResponsive,
} from '@organisms/Tables';

const XTables: React.FC = () => {
	return (
		<XBaseLayout pageTitle="Tables">
			<XGridContainer className="content-wrapper">
				<XTableBasic />
				<XTableDarkHead />
				<XTableHeaderFooter />
				<XTableCaption />
				<XTableStriped />
				<XTableHoverable />
				<XTableResponsive />
			</XGridContainer>
		</XBaseLayout>
	);
};

export default XTables;
