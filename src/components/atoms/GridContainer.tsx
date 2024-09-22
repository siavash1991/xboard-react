const XGridContainer: React.FC<{
	children: React.ReactNode;
	className?: string;
}> = ({ children, className }) => (
	<div className={`grid grid-cols-12 gap-4 mb-7 ${className}`}>
		{children}
	</div>
);
export default XGridContainer;
