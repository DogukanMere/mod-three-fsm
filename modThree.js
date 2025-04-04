function modThree(str) {
  let state = 0; // Initial state is 0;

  for (const bit of str) {
    // Add additional check for input characters
    if (bit === '0' || bit === '1') {
      // Transition logic based on current state and input bit
      if (bit === '0') state = [0, 2, 1][state]; // S0 => S0, S1 => S2, S2 => S1
      else state = [1, 0, 2][state]; // S0 => S1, S1 => S0, S2 => S2
    }
  }

  // Returning final state
  return state;
}

module.exports = modThree;
