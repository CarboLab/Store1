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
            $('#off-light1').fadeOut(300, function(){
                $(this).attr('src','./img/chips/ff2.jpg').fadeIn(300);
            });
            $('#off-light2').fadeOut(300, function(){
                $(this).attr('src','./img/chips/kk2.jpg').fadeIn(300);
            });
            $('#off-light3').fadeOut(300, function(){
                $(this).attr('src','./img/chips/Edited2.jpg').fadeIn(300);
            });
        } else {
            $('#off-light1').fadeOut(300, function(){
                $(this).attr('src','./img/chips/ff.jpg').fadeIn(300);
            });
            $('#off-light2').fadeOut(300, function(){
                $(this).attr('src','./img/chips/kk1.jpg').fadeIn(300);
            });
            $('#off-light3').fadeOut(300, function(){
                $(this).attr('src','./img/chips/Edited1.jpg').fadeIn(300);
            });
        }
    })
})