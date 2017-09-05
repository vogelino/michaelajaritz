import { flattenObject } from '.';

const objectDeep = {
	a: {
		b: {
			c: 'yeah!',
		},
	},
};

test('flattenObject should convert a deep object into flat structure', () => {
	const objectFlat = flattenObject(objectDeep);
	expect(Object.keys(objectFlat)[0]).toEqual('a.b.c');
	expect(objectFlat['a.b.c']).toEqual(objectDeep.a.b.c);
});
