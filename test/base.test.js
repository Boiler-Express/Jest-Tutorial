describe('Testing Group', () => {

    beforeAll(() => {
        // run function before it()`, once.
    });
    beforeEach(() => {
        // run function before it(), every it().
    });

    afterEach(() => {
        // run function after it(), every it().
    });
    afterAll(() => {
        // run function after it()`, once.
    });

    it('Test A : primitive type', () => {
        
        const result = 1;

        expect(result).toBe(1);
        expect(typeof result).toBe('number');

    });

    describe('Sub Testing Group', () => {

        it ('Test B : references type - Array', () => {

            const result = [ 1, 2, 3 ];

            // If you want to check Properties of Array, use `Array.prototype.length`.
            expect(result.length).toBe(3);
            
            // If you want to check References value, use `toEqual()`.
            expect(result).not.toBe([1, 2, 3]);
            expect(result).toEqual([1, 2, 3]);

            // If you want to check References Type (Array, Object, Set, Map, Class), use `toBeInstanceOf()`.
            expect(typeof result).toBe('object');
            expect(result).toBeInstanceOf(Array);

        });

        it ('Test C : references type - Object', () => {

            const result = {
                username: 'Boiler-Express'
            }

            // If you want to check Properties of Object, use `Object.keys(Object.prototype).length`.
            expect(Object.keys(result).length).toBe(1);

            // If you want to check References value, use `toEqual()`.
            expect(result).not.toBe({ username: 'Boiler-Express' });
            expect(result).toEqual({ username: 'Boiler-Express' });

            // If you want to check References Type (Array, Object, Set, Map, Class), use `toBeInstanceOf()`
            expect(typeof result).toBe('object');
            expect(result).toBeInstanceOf(Object);

        });

    });
    
});