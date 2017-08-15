const LEVEL_ONE = {
	upTo:18200,
	base:0,
	percentage:0,
	overAmount:0
};
const LEVEL_TWO = {
	upTo:37000,
	base:0,
	percentage:0.19,
	overAmount:18200
};
const LEVEL_THREE = {
	upTo:80000,
	base:3572,
	percentage:0.325,
	overAmount:37000
};
const LEVEL_FOUR = {
	upTo:180000,
	base:17547,
	percentage:0.37,
	overAmount:80000
};
const LEVEL_FIVE = {
	upTo:null,
	base:54547,
	percentage:0.45,
	overAmount:180000
};

export function determineTaxBracket (annual) {
	
	if(annual <= LEVEL_ONE.upTo)
		return LEVEL_ONE;
	else if (annual <= LEVEL_TWO.upTo)
		return LEVEL_TWO;
	else if (annual <= LEVEL_THREE.upTo)
		return LEVEL_THREE;
	else if (annual <= LEVEL_FOUR.upTo)
		return LEVEL_FOUR;
	else
		return LEVEL_FIVE;
}