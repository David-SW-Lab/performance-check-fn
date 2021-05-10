const longString = 'a'.repeat(10000000);

const LINE_LIMIT = 2000;

performance.mark('forloop-start');
let forLines;
// eslint-disable-next-line no-restricted-syntax
for (let i = 0; i < longString.length; i += LINE_LIMIT) {
    forLines = longString.substring(i, i + LINE_LIMIT);
}
performance.mark('forloop-end');

performance.mark('regex-start');
let forLines2;
// eslint-disable-next-line no-restricted-syntax
for (let i = longString.length ; i > 0 ; i -= LINE_LIMIT ) {
    forLines2 = longString.substring(longString.length - i, longString.length - i + LINE_LIMIT);
}
performance.mark('regex-end');


performance.measure('forloop', 'forloop-start', 'forloop-end');
performance.measure('regex', 'regex-start', 'regex-end');

console.log(performance.getEntriesByType('measure'));






