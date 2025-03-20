import { Calculator } from "../calculator";
//beforhand testing

let calcObj: Calculator=null;

beforeEach(() => { //everytime creates a new instants otherwise test answers will be wrong
    calcObj = new Calculator();
});

test('empty int', () => {
    expect(calcObj.getPanelContents()).toBe('');
});

test('simple input', () => {
    calcObj.pressButton('7');
    calcObj.pressButton('6');
    expect(calcObj.getPanelContents()).toBe('76');
});
