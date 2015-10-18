var scene = document.getElementById('container');
var parallax = new Parallax(scene, {
    limitY: 39,
});
setTimeout(
    function()
    {
        var stars = 800;
        var $stars = $(".stars");
        var r = 800;
        for (var i = 0; i < stars; i++) {
            var $star = $("<div/>").addClass("star");
            $stars.append($star);
        }
        $(".star").each(function() {
            var cur = $(this);
            var s = 0.2 + (Math.random() * 1);
            var curR = r + (Math.random() * 300);
            var transfromCss = " translate3d(0,0,-" + curR + "px) rotateY(" + (Math.random() * 360) + "deg) rotateX(" + (Math.random() * -50) + "deg) scale(" + s + "," + s + ")";
            cur.css({
                WebkitTransformOrigin: "0 0 " + curR + "px",
                WebkitTransform: transfromCss
            })
        })

    }, 3000);

jQuery(document).ready(function(){
    jQuery('.skillbar').each(function(){
        jQuery(this).find('.skillbar-bar').animate({
            width:jQuery(this).attr('data-percent')
        },3000);
    });
});