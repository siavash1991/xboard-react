import React from 'react';
import XBaseLayout from '@templates/BaseLayout';
import XFormBasic from '@organisms/Forms/FormBasic';
import XBasicWithIcon from '@organisms/Forms/BasicWithIcon';
import XmultiColWithSep from '@organisms/Forms/MultiColWithSep';
import XFormWithTabs from '@organisms/Forms/FormWithTabs';

const XForms: React.FC = () => {
	return (
		<XBaseLayout pageTitle="Vertical Forms">
			<div className="content-wrapper grid grid-cols-12 gap-6 mb-7">
				<XFormBasic className="col-span-6 break-inside-avoid" />
				<XBasicWithIcon className="col-span-6 break-inside-avoid" />
				<XmultiColWithSep className="col-span-12 break-inside-avoid" />
				<XFormWithTabs className="col-span-12 break-inside-avoid" />
			</div>
		</XBaseLayout>
	);
};

export default XForms;
