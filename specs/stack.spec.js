var Stack = require('../src/stack');
var assert = require('assert');

describe('stack', function() {
    describe('top', function() {
        it('should return last element of stack', function() {
            var size = 1;
            var element = 10;
            var stack = new Stack(size);
            stack.push(element);
            var result = stack.top();

            assert(result === element, `Should return ${element}, but actual ${result}.`);
        });

        it('should return null if stack is empty', function() {
            var stack = new Stack();
            var result = stack.pop();

            assert(result === null, `Should return null, but actual ${result}.`);
        });
    });

    describe('push', function() {
        it('should add elements to the stack', function() {
            var data = 1;
            var size = 1;
            var stack = new Stack(size);
            stack.push(data);
            var actualSize = stack.size;

            assert(actualSize === size, `Should return ${size}, but actual ${actualSize}.`);
        });

        it('should recive infinite number of elements', function() {
            var size = 1000;
            var data = new Array(1000).fill(0);
            var stack = new Stack(size);
            stack.push(...data);
            var actualSize = stack.size;

            assert(actualSize === size, `Should return ${size}, but actual ${actualSize}.`); 
        });
    });

    describe('pop', function() {
        it('should return null if stack is empty', function() {
            var data = 1;
            var size = 1;
            var stack = new Stack(size);
            stack.push(data);
            var result = stack.pop(size);

            assert(result === data, `Should return ${data}, but actual ${result}.`);
        });

        it('should return n last element of stack', function() {
            var size = 4;
            var data = [1, 2, 3, 4];
            var stack = new Stack(size);
            stack.push(...data);
            var result = stack.pop(size);

            assert(result === data, `Should return ${data}, but actual ${result}.`);
        });

        it('should return null if stack is empty', function() {
            var stack = new Stack();
            var result = stack.pop();

            assert(result === null, `Should return null, but actual ${result}.`);
        });
    });

    describe('merge', function() {
        it('should merge added stack first if flag is true', function() {
            var size = 2;
            var data1 = [1, 2];
            var data2 = [2, 3];
            var expected = [2, 3, 1, 2];
            var stack1 = new Stack(size);
            stack1.push(...data1);
            var stack2 = new Stack(size);
            stack2.push(...data2);

            var result = stack1.merge(stack2, true).pop(size * 2);

            assert.deepEqual(result, expected, `Should return ${expected}, but actual ${result}.`)
        });

        it('should merge added stack last if flag is false', function() {
            var size = 2;
            var data1 = [1, 2];
            var data2 = [2, 3];
            var expected = [1, 2, 3, 4];
            var stack1 = new Stack(size);
            stack1.push(...data1);
            var stack2 = new Stack(size);
            stack2.push(...data2);
            
            var result = stack1.merge(stack2, true).pop(size * 2);

            assert.deepEqual(result, expected, `Should return ${expected}, but actual ${result}.`)
        });
    });
});
