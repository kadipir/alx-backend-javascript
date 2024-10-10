export default function cleanSet(set, startString){
	if (!set && !startString && (!set instanceof Set) && typeof startString !== 'string' ){
		return '';
	}
	const parts = [];
	for (const value of set.values()){
		if (typeof value  == 'string' && value.startsWith(startString) ){
			const valSubst = value.substring((startString.length));
			if (valSubst && valSubst !== value){
				parts.push(valSubst);
			}
		}
	}
	return parts.join('-');
}

