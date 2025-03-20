import { Word } from "../class2";



test('letter a test', () => {
    expect(new Word('flotation device').countA()).toBe(1);
})
test('glasnie letter test', () => {
    expect(new Word('flotation device').countVowels()).toBe(7);
})