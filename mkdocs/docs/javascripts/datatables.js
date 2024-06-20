$(document).ready( function () {
    $('#datatables').DataTable( {
        scrollY: "60vh",
        paging: false,
        "language": {
            "search": "",
            "searchPlaceholder": "Filter"
        }
    });
} );