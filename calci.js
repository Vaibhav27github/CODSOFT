// Wait until the DOM is fully loaded
document.addEventListener('DOMContentLoaded', function() {
  const display = document.getElementById('display');
  const buttons = document.querySelectorAll('.btn');
  const equal = document.getElementById('equal');
  const clear = document.getElementById('clear');
  const historyList = document.getElementById('historyList');

  let currentInput = '';
  let history = [];

  // Handle button clicks (digits and operators)
  buttons.forEach(button => {
    button.addEventListener('click', () => {
      // Only process buttons with a data-value attribute
      const value = button.getAttribute('data-value');
      if (value) {
        // Append the value to the current input
        currentInput += value;
        display.textContent = currentInput;
      }
    });
  });

  // Clear the display and reset input
  clear.addEventListener('click', () => {
    currentInput = '';
    display.textContent = '0';
  });

  // Evaluate the expression when equal is clicked
  equal.addEventListener('click', () => {
    try {
      // Use eval to compute the result
      // (In a production calculator, consider using a safer evaluation method.)
      let result = eval(currentInput);
      
      // Create a history entry
      let historyEntry = `${currentInput} = ${result}`;
      history.push(historyEntry);
      updateHistory();

      // Update the display with the result
      display.textContent = result;
      currentInput = result.toString();
    } catch (e) {
      display.textContent = 'Error';
      currentInput = '';
    }
  });

  // Update the history list on the page
  function updateHistory() {
    // Clear the history list element
    historyList.innerHTML = '';
    // Add each history entry as a list item
    history.forEach(entry => {
      let li = document.createElement('li');
      li.textContent = entry;
      historyList.appendChild(li);
    });
  }
});
