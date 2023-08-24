$(document).ready(function() {
    // Show loading alert
    const loadingAlert = Swal.fire({
        title: 'Cargando...',
        icon: 'info', // Agregar el icono de información
        allowOutsideClick: false,
        showConfirmButton: false,
        didOpen: () => {
            Swal.showLoading();
            $.ajax({
                type: "GET",
                url: "https://sga.unemi.edu.ec/api?a=apibasesindexadas",
                success: function(data) {
                    loadingAlert.close(); // Cerrar la alerta de carga
                    // Clear existing table data
                    $('#dataTable tbody').empty();

                    for (o in data) {
                        name = data[o]["nombre"];
                        type = data[o]["tipo"];
                        ln = "<tr><td>" + name + "</td><td>" + type + "</td></tr>";
                        $(ln).appendTo("#dataTable tbody");
                    }
                    $('#dataTable').DataTable();
                }
            });
        }
    });
});



// Call the dataTables jQuery plugin
//$(document).ready(function() {
    //$.ajax({
        //type: "GET",
        //url:"https://sga.unemi.edu.ec/api?a=apibasesindexadas",
        //success: function(data) {
            //for(o in data){
                //name = data[o]["nombre"]
                //type = data[o]["tipo"]
                //ln ="<tr><td>"+name+"</td><td>"+type+"</td><</tr>"
                //$(ln).appendTo("#dataTable tbody")
            //}
            //$('#dataTable').DataTable();
        //}
    //});
//});
