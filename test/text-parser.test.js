const textParser = require('../src/text-parser');

void main() {


/**
 * textParser.run() will convert the html to text plain
 * Function should only extract what in the body
 */
test('Testing text-parser', async () => { 
    const result = await textParser.run('<!DOCTYPE html><p>Hello World</p>');
expect(result).toBe('Hello World');
});

 
test('Testing text-parser with new line', async () => {
    const result = await textParser.run('<!DOCTYPE html><html><head><title>OSD600</title></head><body style = "text-align:center;"><h1>Seneca</h1>\n<div>OpenSource Telescope</div></body></html>');
    //assert.strictEqual(frag.querySelector("body").textContent, 'Seneca\nOpenSource Telescope');
    expect(result).toBe('Seneca\nOpenSource Telescope');
  });
// Issue: Don't work with new line

}