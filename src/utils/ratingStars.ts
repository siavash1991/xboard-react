interface Stars {
	totalStars: number;
	filledStars: number;
}

const createRatingStars = ({ totalStars, filledStars }: Stars) => {
	return Array.from({ length: totalStars }, (_, index) => ({
		id: index + 1,
		filled: index < filledStars,
	}));
};

export default createRatingStars;
