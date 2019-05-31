var expect = require('expect.js');

var range = require('../dist/index.js').range;

describe('unit test', function() {
    this.timeout(1000);

    describe('number range', function() {
        it('1-5', function() {
            expect(range(1, 5)).to.eql([1,2,3,4,5]);
        });
        it('-2-2', function() {
            expect(range(-2, 2)).to.eql([-2,-1,0,1,2]);
        });
        it('2- -2', function() {
            expect(range(2, -2)).to.eql([2,1,0,-1,-2]);
        });
        it('2- -2 0.5 step', function() {
            expect(range(2, -2, 0.5)).to.eql([2,1.5,1,0.5,0,-0.5,-1,-1.5,-2]);
        });
        it('0-1 0.1 step', function() {
            expect(range(0, 1, 0.1)).to.eql([0,0.1,0.2,0.3,0.4,0.5,0.6,0.7,0.8,0.9,1]);
        });
        it('0-0.1 0.01 step', function() {
            expect(range(0, 0.1, 0.01)).to.eql([0,0.01,0.02,0.03,0.04,0.05,0.06,0.07,0.08,0.09,0.1]);
        });
        // 步长不能为0，否则会死循环，为了避免这个，传入0的时候会纠正为1
        it('1-5 step 0', function () {
            expect(range(1, 5, 0)).to.eql([1, 2, 3, 4, 5])
        })
        // 步长过长的例子
        it('1-5 step 10', function () {
            expect(range(1, 5, 10)).to.eql([1])
        })
        it('5', function () {
            expect(range(5)).to.eql([0, 1, 2, 3, 4, 5])
        })
        it('-5', function () {
            expect(range(-5)).to.eql([0, -1, -2, -3, -4, -5])
        })
        it('0', function () {
            expect(range(0)).to.eql([0])
        })
        it('11', function () {
            expect(range(11)).to.eql([0, 1, 2, 3, 4, 5, 6, 7, 8, 9, 10, 11])
        })
    });

    describe('character range', function() {
        it('a-z', function() {
            expect(range('a', 'd')).to.eql(['a', 'b', 'c', 'd']);
        });
        it('e-g', function() {
            expect(range('e', 'g')).to.eql(['e', 'f', 'g']);
        });
        it('A-D', function() {
            expect(range('A', 'D')).to.eql(['A', 'B', 'C', 'D']);
        });
        it('E-G', function() {
            expect(range('E', 'G')).to.eql(['E', 'F', 'G']);
        });
        it('Y-b', function() {
            expect(range('Y', 'b')).to.eql(['Y', 'Z', 'a', 'b']);
        });
        it('d', function() {
            expect(range('d')).to.eql(['a', 'b', 'c', 'd']);
        });
        it('a', function() {
            expect(range('a')).to.eql(['a']);
        });
        it('A', function() {
            expect(range('A')).to.eql(['A']);
        });
        it('D', function() {
            expect(range('D')).to.eql(['A', 'B', 'C', 'D']);
        });
        it('D 10', function() {
            expect(range('D', 10)).to.eql(['A']);
        });
        it('J 2', function() {
            expect(range('J', 2)).to.eql(['A', 'C', 'E', 'G', 'I']);
        });
    });

    describe('ruby style range', function() {
        it('1..5', function() {
            expect(range('1..5')).to.eql([1, 2, 3, 4, 5]);
        });
        it('1...5', function() {
            expect(range('1...5')).to.eql([1, 2, 3, 4]);
        });
        it('1..10', function() {
            expect(range('1..10', 2)).to.eql([1, 3, 5, 7, 9]);
        });
        it('20..22', function() {
            expect(range('20..22')).to.eql([20, 21, 22]);
        });
        it('-2..2', function() {
            expect(range('-2..2')).to.eql([-2, -1, 0, 1, 2]);
        });
        it('2..-2', function() {
            expect(range('2..-2')).to.eql([2, 1, 0, -1, -2]);
        });
        it('Y..b', function() {
            expect(range('Y..b')).to.eql(['Y', 'Z', 'a', 'b']);
        });
        it('a..d', function() {
            expect(range('a..d')).to.eql(['a', 'b', 'c', 'd']);
        });
        it('e..g', function() {
            expect(range('e..g')).to.eql(['e', 'f', 'g']);
        });
        it('A..D', function() {
            expect(range('A..D')).to.eql(['A', 'B', 'C', 'D']);
        });
        it('A..J step 2', function() {
            expect(range('A..J', 2)).to.eql(['A', 'C','E', 'G', 'I']);
        });
        it('A..D step 10', function() {
            expect(range('A..D', 10)).to.eql(['A']);
        });
    });

});
