import { IDcode } from "../class1";

/*let id = new IDcode('60410200862');

test ("gender check", () => {
    expect(id.gender()).toBe('F');
    //expect(id.gender()).toBe('M');
});
-------------------------------------
*/

/*test ("gender check", () => {
    expect(new IDcode('60410200862').gender()).toBe('F');
});*/

test ("gender check", () => {
    expect(new IDcode('50312150862').gender()).toBe('M');
});

test('year test', () => {
    expect(new IDcode('604010200862').birthyear()).toBe(2004);
})