document.querySelectorAll('.calculator-keys button').forEach(button => {
  button.addEventListener('click', function() {
      const screen = document.querySelector('.calculator-screen');
      const buttonValue = this.value;
      const currentScreenValue = screen.value;
      let newScreenValue;

      if (buttonValue === 'all-clear') {
          newScreenValue = '';
      } else if (buttonValue === '=') {
          newScreenValue = eval(currentScreenValue);
      } else {
          newScreenValue = currentScreenValue + buttonValue;
      }

      screen.value = newScreenValue;
  });
});
