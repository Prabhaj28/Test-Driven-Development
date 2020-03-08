import { expect } from 'chai';
import { isAnagram } from './anagram';

describe('isAnagram - basic functionality',() => {

	it('Both words are anagrams', () => {
			const expected = true;
			const actual = isAnagram('elbow','below');
			expect(actual).to.deep.equal(expected);
		});
	
	it('Both words are not anagram', () => {
			const expected = false;
			const actual = isAnagram('elbows','below');
			expect(actual).to.deep.equal(expected);
		});

	
})