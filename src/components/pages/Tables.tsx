import React from 'react';
import XBaseLayout from '@templates/BaseLayout';
import XTableBasic from '@organisms/Table/TableBasic';
import XTableDarkHead from '@organisms/Table/TableDarkHead';
import XTableHeaderFooter from '@organisms/Table/TableHeaderFooter';
import XTableCaption from '@organisms/Table/TableCaption';
import XTableStriped from '@organisms/Table/TableStriped';
import XTableHoverable from '@organisms/Table/TableHoverable';
import XTableResponsive from '@organisms/Table/TableResponsive';

const XTables: React.FC = () => {
	return (
		<XBaseLayout pageTitle="Tables">
			<div className="content-wrapper grid grid-cols-12 gap-6 mb-7">
				<XTableBasic className="col-span-12 break-inside-avoid" />
				<XTableDarkHead className="col-span-12 break-inside-avoid" />
				<XTableHeaderFooter className="col-span-12 break-inside-avoid" />
				<XTableCaption className="col-span-12 break-inside-avoid" />
				<XTableStriped className="col-span-12 break-inside-avoid" />
				<XTableHoverable className="col-span-12 break-inside-avoid" />
				<XTableResponsive className="col-span-12 break-inside-avoid" />
			</div>
		</XBaseLayout>
	);
};

export default XTables;
