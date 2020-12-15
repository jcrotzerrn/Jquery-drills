$(document).ready(function () {

    $('<div><ul class="mylist"></ul></div>').appendTo("body");

    let submitBtn = $('#btnSubmit');
    let $txt = $('#txtInput').val();


    $(submitBtn).attr('disabled', true);

    $('#txtInput').keyup(function () {
        if ($('#txtInput').val().length != 0)
            $(submitBtn).attr('disabled', false);
        else
            $('submitBtn').attr('disabled', true);
    });

    $(submitBtn).on('click', function (event) {
        //alert($('#txtInput').val());
        event.preventDefault();
        const li = $('<li>' + $('#txtInput').val() + '</li>');
        $('.mylist').append(li);



        $('.mylist').on('click', function () {
            li.click(function () {
                $(this).css('background-color', randomColor());
                //console.log($(this));
                function randomColor() {
                    let r = Math.floor((Math.random() * 255) + 0);
                    let g = Math.floor((Math.random() * 255) + 0);
                    let b = Math.floor((Math.random() * 255) + 0);
                    let color = `rgb(${r},${g},${b})`;
                    return color;
                };
                li.click(function() {
                    $(this).remove();
                });
            });
            //$('ul').mouseover(function() {
            // var styles = {
            //      backgroundColor: 'lightgray',
            //        border: '1px solid black',
            //    };
            //   $(this).css(styles);
            //});

            //$('h2').mouseover(function() {
            //$('h2').css('background-color','yellow');
            //})   
            ////$('ul').mouseout(function() {
            //$('ul').css('background-color','gray');
            //});
        });
    });
});
