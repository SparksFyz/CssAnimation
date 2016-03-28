var coverGuide = function(cover, target) {
    var body = document.body, doc = document.documentElement;
    if (cover && target) {
        // target size(width/height)
        var targetWidth = target.clientWidth,
            targetHeight = target.clientHeight;

        // page size
        var pageHeight = doc.scrollHeight,
            pageWidth = doc.scrollWidth;

        // offset of target
        var offsetTop = target.getBoundingClientRect().top + (body.scrollTop || doc.scrollTop),
            offsetLeft = target.getBoundingClientRect().left + (body.scrollLeft || doc.scrollLeft);

        // set size and border-width
        cover.style.width = targetWidth + 'px';
        cover.style.height = targetHeight + 'px';
        cover.style.borderWidth =
            offsetTop + 'px ' +
            (pageWidth - targetWidth - offsetLeft) + 'px ' +
            (pageHeight - targetHeight - offsetTop) + 'px ' +
            offsetLeft + 'px';

        cover.style.display = 'block';

        // resize
        if (!cover.isResizeBind) {
            if (window.addEventListener) {
                window.addEventListener('resize', function() {
                    coverGuide(cover, target);
                });
                cover.isResizeBind = true;
            } else if (window.attachEvent) {
                window.attachEvent('onresize', function() {
                    coverGuide(cover, target);
                });
                cover.isResizeBind = true;

                // IE7, IE8 box-shadow hack
                cover.innerHTML = '<img src="guide-shadow.png">';
            }
        }
    }
};

var elCover = document.getElementById('cover');
var arrElTarget = [
    document.getElementsByTagName('li')[0],
    document.getElementById('text1'),
    document.getElementById('logo')
], index = 0;

coverGuide(elCover, arrElTarget[index]);

elCover.onclick = function() {
    index++;
    if (!arrElTarget[index]) {
        index = 0;
    }
    coverGuide(elCover, arrElTarget[index]);
};