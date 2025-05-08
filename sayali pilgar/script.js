// Search functionality
document.getElementById("searchInput").addEventListener("keyup", function () {
    const filter = this.value.toLowerCase();
    const rows = document.querySelectorAll("#studentTable tbody tr");
  
    rows.forEach(row => {
      const text = row.textContent.toLowerCase();
      row.style.display = text.includes(filter) ? "" : "none";
    });
  });
  
  // Sort functionality
  let sortDirection = true;
  
  function sortTable(colIndex) {
    const table = document.getElementById("studentTable");
    const rows = Array.from(table.rows).slice(1); // exclude header
    const tbody = table.tBodies[0];
  
    rows.sort((a, b) => {
      let x = a.cells[colIndex].textContent.trim().toLowerCase();
      let y = b.cells[colIndex].textContent.trim().toLowerCase();
  
      // If numeric sort
      if (!isNaN(x) && !isNaN(y)) {
        return sortDirection ? x - y : y - x;
      }
  
      return sortDirection ? x.localeCompare(y) : y.localeCompare(x);
    });
  
    sortDirection = !sortDirection;
  
    // Append sorted rows
    rows.forEach(row => tbody.appendChild(row));
  }
  