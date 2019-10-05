var expect = require('expect.js');

var range = require('../src/index.js').range;

describe('unit test', function() {
    this.timeout(1000);

    describe('number range', function() {
        it('error', function() {
            expect(range()).to.eql([]);
        });
        it('-2-2', function() {
            expect(range(-2, 2)).to.eql([-2, -1, 0, 1]);
            expect(range(2, -2)).to.eql([2, 1, 0, -1]);
        });
        it('1-10', function() {
            expect(range(1, 5)).to.eql([1, 2, 3, 4]);
            expect(range(5, 1)).to.eql([5, 4, 3, 2]);
        });
        it('1', function() {
            expect(range(2)).to.eql([0, 1]);
            expect(range(-2)).to.eql([0, -1]);
        });
        it('step', function() {
            expect(range(1, 3, 0)).to.eql([1, 2]);
            expect(range(3, 1, -1)).to.eql([3, 2]);
            expect(range(1, 10, 2)).to.eql([1, 3, 5, 7, 9]);
            expect(range(0, 0.5, 0.1)).to.eql([0, 0.1, 0.2, 0.3, 0.4]);
            expect(range(0, 0.05, 0.01)).to.eql([0, 0.01, 0.02, 0.03, 0.04]);
        });
    });

    describe('character range', function() {
        it('error', function() {
            expect(range()).to.eql([]);
            expect(range({})).to.eql([]);
            expect(range('aa', 'b')).to.eql([]);
            expect(range('a', 'bb')).to.eql([]);
            // expect(range('a', {})).to.eql([]);
        });
        it('a-z', function() {
            expect(range('a', 'd')).to.eql(['a', 'b', 'c']);
            expect(range('d', 'a')).to.eql(['d', 'c', 'b']);
            expect(range('e', 'g')).to.eql(['e', 'f']);
        });
        it('A-Z', function() {
            expect(range('A', 'D')).to.eql(['A', 'B', 'C']);
            expect(range('E', 'G')).to.eql(['E', 'F']);
        });
        it('A-a', function() {
            expect(range('Y', 'b')).to.eql(['Y', 'Z', 'a']);
        });
        it('a', function() {
            expect(range('a')).to.eql([]);
            expect(range('d')).to.eql(['a', 'b', 'c']);
        });
        it('A', function() {
            expect(range('A')).to.eql([]);
            expect(range('D')).to.eql(['A', 'B', 'C']);
        });
        it('step', function() {
            expect(range('A', 'D', 'A')).to.eql(['A', 'B', 'C']);
            expect(range('A', 'D', 0)).to.eql(['A', 'B', 'C']);
            expect(range('A', 'D', 10)).to.eql(['A']);
            expect(range('A', 'J', 2)).to.eql(['A', 'C', 'E', 'G', 'I']);
            expect(range('C', 'A', -1)).to.eql(['C', 'B']);
        });
    });

    describe('ruby style range', function() {
        it('error', function() {
            expect(range()).to.eql([]);
            expect(range('aa..bb')).to.eql([]);
            expect(range('1..0')).to.eql([]);
        });
        it('..', function() {
            expect(range('1..5')).to.eql([1, 2, 3, 4, 5]);
            expect(range('a..d')).to.eql(['a', 'b', 'c', 'd']);
        });
        it('...', function() {
            expect(range('1...5')).to.eql([1, 2, 3, 4]);
            expect(range('a...d')).to.eql(['a', 'b', 'c']);
        });
        it('step', function() {
            expect(range('1..10', 2)).to.eql([1, 3, 5, 7, 9]);
            expect(range('1..10', 2)).to.eql([1, 3, 5, 7, 9]);
            expect(range('A..J', 2)).to.eql(['A', 'C','E', 'G', 'I']);
            expect(range('A..D', 10)).to.eql(['A']);
        });
    });

});
