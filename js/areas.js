$(document).ready(function() {
    // Show loading alert
    const loadingAlert = Swal.fire({
        title: 'Cargando...',
        icon: 'info', // Agregar el icono de información
        allowOutsideClick: false,
        showConfirmButton: false,
        willOpen: () => {
            Swal.showLoading();
        }
    });

    $.ajax({
        type: "GET",
        url: "https://sga.unemi.edu.ec/api?a=apiareasconocimiento",
        success: function(data) {
            loadingAlert.close(); // Close the loading alert
            for (e in data) {
                id = data[e]["codigo"];
                name = data[e]["nombre"];
                ln = "<tr><td>" + id + "</td><td>" + name + "</td></tr>";
                $(ln).appendTo("#dataTable tbody");
            }
            $('#dataTable').DataTable();
        }
    });
});



// Call the dataTables jQuery plugin
//$(document).ready(function() {
    //$.ajax({
        //type: "GET",
        //url:"https://sga.unemi.edu.ec/api?a=apiareasconocimiento",
        //success: function(data) {
            //for(e in data){
                //id = data[e]["codigo"]
                //name = data[e]["nombre"]
                //ln ="<tr><td>"+id+"</td><td>"+name+"</td></tr>"
                //$(ln).appendTo("#dataTable tbody")
            //}
            //$('#dataTable').DataTable();
        //}
    //});
//});