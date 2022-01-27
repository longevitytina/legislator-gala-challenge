
function seating(num_tables, guest_list, plannerPref) {
  let tableSeating = {}
  let prefGraph = {}

  // check that inputs are included
  if (!num_tables || !guest_list || !plannerPref) {
    throw new Error('No inputs were provided')
  }

  //make hashmap based on num_tables for final output
  // Guests can only be assigned once
  //ex: {table_1: Set{}}
  for (let i = 1; i <= num_tables; i++) {
    if (tableSeating[`table_${i}`] === undefined) {
      tableSeating[`table_${i}`] = new Set()
    }
  }

  //check that correct output length was created
  if (Object.keys(tableSeating).length !== num_tables) {
    throw new Error('Did not create the correct amount of tables')
  }

  // Make graph based on guest list prefGraph
  // preferences can only show up once per person
  // {name: Set{}}
  for (let i = 0; i < guest_list.length; i++) {
    if (prefGraph[guest_list[i]] === undefined) {
      prefGraph[guest_list[i]] = new Set()
    }
  }

  // loop through plannerPref input, distribute pairs to prefGraph
  // Allows easier assignment of tables
  // Deconstruct guest property - there will always be two elements per value - " [guest1, guest2] "
  plannerPref.forEach(({ preference, guests: [guest1, guest2] }) => {
    if (preference === 'pair') {
      prefGraph[guest1].add(guest2)
      prefGraph[guest2].add(guest1)
    }
  })

  /** TODO  */

  //1. createGuestGraph()
  // Search through prefGraph >> link friend groups together for tables
  //ex: name_2 {name_3 {name_4} >> table
  //ex: name_5 { name_6} >> table

  /*2. Filter avoid pairs
      if (preference === 'avoid')... check tables so that avoid pairs are not together. If found remove and place at another table. Avoiding pairs is higher prescience than preferred pairs
  */

  /** 3. Output seating arrangement in output.json file
        tests should read file, delete file at beginning of each run
        output format:
        {
          "table_1": ["name_1", "name_2", "name_3"]
          "table_2": ["name_4", "name_5", "name_6", "name_7"]
        }
  */


}

// seating(num_tables1, guest_list1, plannerPref1)

module.exports = seating
