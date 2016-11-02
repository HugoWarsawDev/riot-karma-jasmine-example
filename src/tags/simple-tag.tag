
<simple-tag>
  <div each={ rows } >{text}</div>
  <script>
    this.rows = [];
    addRow(row) {
      this.rows.push(row);
      this.update();
    }
  </script>
</simple-tag>
