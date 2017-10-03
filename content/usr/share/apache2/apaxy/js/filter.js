document.addEventListener('DOMContentLoaded', function() {
    var table = document.querySelector('#indexlist');

    var input = document.createElement('input');
    input.setAttribute('type', 'search');
    input.setAttribute('name', 'q');
    input.setAttribute('placeholder', 'Filter by name, last modified or size …');
    table.parentNode.insertBefore(input, table);
    
    input.addEventListener('input', function(event) {
        var query = event.target.value;
        table.classList.toggle('filtered', query.length > 0);
        var rows = table.querySelectorAll('tr:not(.indexhead)');
        rows.forEach(function(row) {
            if(row.textContent.indexOf(query) === -1) {
                row.classList.remove('filter-match');
                row.classList.add('filter-miss');
            }
            else {
                row.classList.remove('filter-miss');
                row.classList.add('filter-match');
            }
        })
    });
});

