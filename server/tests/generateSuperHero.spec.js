const assert = require('assert');
const { expect } = require('chai');
const should = require('chai').should();

const SuperHero = require('../functions/generateSuperHero');

describe('GenerateSuperHero', function () {

    describe('GetSuperHero', function () {

        it('should not accept several letters per parameter.', function () {

            const result = SuperHero.GetHeroName('Hello', 'World');
            result.should.equal('Something went wrong.');
        });

        it('should not accept blank parameters', function () {

            const result = SuperHero.GetHeroName('', '');
            result.should.equal('Something went wrong.');
        });

        it('should not accept numbers.', function () {

            const result = SuperHero.GetHeroName('3', '5');
            result.should.equal('Please use single capital letters.');
        });
    });
});

