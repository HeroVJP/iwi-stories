$('head').append($('<link rel="stylesheet" type="text/css" />').attr('href', '//keetraxx.github.io/iwi-stories/iwi-stories.css'));
//$('head').append($('<link rel="stylesheet" type="text/css" />').attr('href', 'iwi-stories.css'));

var overlay = $(
    '<div id="iwi-stories-overlay">' +
    '<div class="container">' +
    '<div class="row">' +
    '<div class="col-md-3">' +
    '<div id="iwi-stories-img">' +
    '<img class="img-responsive" />' +
    '</div>' +
    '<p id="iwi-stories-img-caption">ah sali</p>' +
    '</div>' +
    '<div id="iwi-stories-bubblecontainer" class="col-md-6">' +
    '<div class="bubble"></div>' +
    '</div>' +
    '</div>' +
    '</div>' +
    '</div>').hide();
overlay.appendTo(document.body);

overlay.click(function () {
    $(this).fadeOut();
});

$('figure').click(function () {
    var $this = $(this);
    var $img = $this.find('img');
    $('#iwi-stories-img img').attr('src', $img.attr('src'));
    $('#iwi-stories-img-caption').text($this.find('figcaption').contents().get(0).nodeValue);

    $('#iwi-stories-bubblecontainer .bubble').html('');

    var texts = $this.find('span.caption-addon').text().split('|');

    texts.forEach(function (text) {
        $('#iwi-stories-bubblecontainer .bubble').append('<p>' + $.trim(text) + '</p>');
    });

    overlay.fadeIn();
});