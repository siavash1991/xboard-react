import React from 'react';
import XBaseLayout from '@templates/BaseLayout';
import XGridContainer from '@atoms/GridContainer';

import {
	XFormBasic,
	XBasicWithIcon,
	XmultiColWithSep,
	XFormWithTabs,
} from '@organisms/Forms';

const XForms: React.FC = () => {
	return (
		<XBaseLayout pageTitle="Vertical Forms">
			<XGridContainer className="content-wrapper">
				<XFormBasic />
				<XBasicWithIcon />
				<XmultiColWithSep />
				<XFormWithTabs />
			</XGridContainer>
		</XBaseLayout>
	);
};

export default XForms;
