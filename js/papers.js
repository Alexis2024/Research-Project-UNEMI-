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
                url: "https://sga.unemi.edu.ec/api?a=apiarticulos",
                success: function(data) {
                    loadingAlert.close(); // Cerrar la alerta de carga
                    // Clear existing table data
                    $('#dataTable tbody').empty();

                    for (u in data) {
                        name = data[u]["nombre"];
                        magazine = data[u]["revista"];
                        year = data[u]["anio"];
                        doi = data[u]["doi"];
                        if (doi == "") {
                            link = "";
                        } else {
                            link = "<a target='_blank' href='" + doi + "'><i class='fa fa-link' aria-hidden='true'></i></a>";
                        }
                        ln = "<tr><td>" + name + "</td><td>" + magazine + "</td><td>" + year + "</td><td>" + link + "</td></tr>";
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
        //url:"https://sga.unemi.edu.ec/api?a=apiarticulos",
        //success: function(data) {
            //for(u in data){
                //name = data[u]["nombre"]
                //magazine = data[u]["revista"]
                //year = data[u]["anio"]
                //doi = data[u]["doi"]
                //if (doi==""){
                    //link=""
                //} else {
                    //link = "<a target ='_blank' href='"+doi+"'><i class='fa fa-link' aria-hidden='true'></i></a>"
                //}
                //ln ="<tr><td>"+name+"</td><td>"+magazine+"</td><td>"+year+"</td><td>"+doi+"</td></tr>"
                //$(ln).appendTo("#dataTable tbody")
            //}
            //$('#dataTable').DataTable();
        //}
    //});
//});
