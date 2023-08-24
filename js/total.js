// Call the dataTables jQuery plugin
$(document).ready(function() {
    $.ajax({
        type: "GET",
        url:"https://sga.unemi.edu.ec/api?a=apitotales",
        success: function(data) {
            papertotal = data["totalarticulos"]
            journaltotal = data["totalrevistas"]
            areatotal = data["totalareasconocimientos"]
            researchtotal = data["totalautores"]

            $("#papertotal").html(papertotal);
            $("#journaltotal").html(journaltotal);
            $("#areatotal").html(areatotal);
            $("#researchtotal").html(researchtotal);
        }
    });
});
