

<script>
    function generateDiamond() {
      const rows = parseInt(document.getElementById('rows').value);
      let pattern = '';

      // Top half of the diamond
      for (let i = 1; i <= rows; i++) {
        pattern += ' '.repeat(rows - i);
        pattern += '*'.repeat(2 * i - 1);
        pattern += '\n';
      }

      // Bottom half of the diamond
      for (let i = rows - 1; i >= 1; i--) {
        pattern += ' '.repeat(rows - i);
        pattern += '*'.repeat(2 * i - 1);
        pattern += '\n';
      }

      document.getElementById('output').textContent = pattern;
    }
  </script>
