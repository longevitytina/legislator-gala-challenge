const { expect } = require('chai')
const seating = require('../seating.js')

describe('Seating arrangement', () => {
  context('when parameters are not provided', () => {
    it('should return false', () => {
      // 1. Setup (create input to function)
      const inputs = undefined

      // 2. Execution (run the function)
      // const result = seating(inputs, inputs, inputs)

      // 3. Test the result (with a series of assertions)
      expect(() => seating(inputs, inputs, inputs)).to.throw("No inputs were provided")
    });
  })

  context('When output length is not equal to num_tables', ()=>{
    it('should return false', ()=>{

      expect(() => seating(numTables1, guestList1, plannerPref1)).not.to.throw("Did not create the correct amount of tables")

    })
  })
// TODO - Add tests for the following

  context('All names in guestList are not distributed to prefGraph', ()=>{
    it('should return false', ()=>{

      expect(() => seating(numTables1, guestList1, plannerPref1)).not.to.throw("Not all pairs in prefGraph")


    })
  })

  context('Avoid pairs are not at the same table', ()=>{
    it('', ()=>{


    })
  })

  context('Pref pairs are at the same table', ()=>{
    it('', ()=>{

    })
  })

});


// test data

const numTables = 3
const guestList = ['name1', 'name2', 'name3']
const plannerPref = [
  {
    "preference": "avoid",
    "guests": ["name_1", "name_2"]
  },
  {
    "preference": "pair",
    "guests": ["name_2", "name_3"]
  }
]


const numTables1 = 4
const guestList1 = ['name_1', 'name_2', 'name_3', 'name_4', 'name_5', 'name_6']
const plannerPref1 = [
  {
    preference: 'avoid',
    guests: ['name_1', 'name_2'],
  },
  {
    preference: 'avoid',
    guests: ['name_3', 'name_5'],
  },
  {
    preference: 'pair',
    guests: ['name_2', 'name_3'],
  },
  {
    preference: 'pair',
    guests: ['name_3', 'name_4'],
  },
  {
    preference: 'pair',
    guests: ['name_5', 'name_6'],
  },
]