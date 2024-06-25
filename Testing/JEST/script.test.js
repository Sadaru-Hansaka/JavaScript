const concate = require('./script.js');

test('returns the concated string', () => {
    expect(concate('Hello', 'World')).toBe('HelloWorld');
});