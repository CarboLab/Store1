function subscribe() {
    var email = $('#email').val();
    $("#modal-container-876760 .close").click();
    $.ajax({
        url: "php/insert.php",
        type: "post",
        data: {email: email},
        success: function (data) {
            var dataParsed = JSON.parse(data);
            console.log(dataParsed);
        },
        error: function (XMLHttpRequest, textStatus, errorThrown) {
            console.log(textStatus);
            console.log(errorThrown);
        }
    });
}
$(function() {
    $('#toggle-event').change(function() {
        if($(this).prop('checked')) {
            $('#off-light1').attr('src','./img/chips/ff2.jpg');
            $('#off-light2').attr('src','./img/chips/kk2.jpg');
            $('#off-light3').attr('src','./img/chips/Edited2.jpg');
        } else {
            $('#off-light1').attr('src','./img/chips/ff.jpg');
            $('#off-light2').attr('src','./img/chips/kk1.jpg');
            $('#off-light3').attr('src','./img/chips/Edited1.jpg');
        }
    })
})