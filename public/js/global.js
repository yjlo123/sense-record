// Userlist data array for filling in info box
var userListData = [];
var baseUrl = '';

// DOM Ready =============================================================
$(document).ready(function() {
    populateTable();
});

// Delete User link click
$('#recordList table tbody').on('click', 'td a.linkdelete', deleteRecord);

// Functions =============================================================

// Fill table with data
function populateTable() {

    // Empty content string
    var tableContent = '';

    // jQuery AJAX call for JSON
    $.getJSON( baseUrl+'/all', function( data ) {

        // For each item in our JSON, add a table row and cells to the content string
        $.each(data, function(){
            tableContent += '<tr>';
            tableContent += '<td>'+this.time +'</td>';
            tableContent += '<td>' + this.temperature + '</td>';
            tableContent += '<td>' + this.humidity + '</td>';
            tableContent += '<td>' + this.pressure + '</td>';
            tableContent += '<td><a href="#" class="linkdelete" rel="' + this.time + '">delete</a></td>';
            tableContent += '</tr>';
        });

        // Inject the whole content string into our existing HTML table
        $('#recordList table tbody').html(tableContent);
    });
};

// Delete User
function deleteRecord(event) {
    event.preventDefault();
    // Confirmation dialog
    var confirmation = confirm('Are you sure you want to delete this record?');
    if (confirmation === true) {
        $.ajax({
            type: 'DELETE',
            url: baseUrl+'/delete/' + $(this).attr('rel')
        }).done(function( response ) {
            // Check for a successful (blank) response
            if (response.msg === '') {
            } else {
                alert('Error: ' + response.msg);
            }
            // Update the table
            populateTable();
        });
    } else {
        // If they said no to the confirm, do nothing
        return false;
    }

};