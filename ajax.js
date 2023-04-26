$(document).ready(function() {
    $(document).ready(function() {
        $('#cargar').click(function() {
            $.ajax({
                url: 'https://catfact.ninja/fact',
                dataType: 'json',
                success: function(data) {
                    $('#resultado').html('<p>Fact: ' + data.fact + ' (' + data.length + ' caracteres)');
                }
            });
        });
    });
});