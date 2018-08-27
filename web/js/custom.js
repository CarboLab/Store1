function subscribe() {
    var email = $('#email').val();
    $.ajax({
        url: "php/insert.php",
        type: "post",
        data: {email: email},
        success: function (data) {
            var dataParsed = JSON.parse(data);
            console.log(dataParsed);
        },
        error: function (XMLHttpRequest, textStatus, errorThrown) {
            alert("Status: " + textStatus);
            alert("Error: " + errorThrown);
        }
    });
}