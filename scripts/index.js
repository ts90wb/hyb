(function($) {
    $(function() {
        showSearch();
    });
    //搜索按钮展开
    function showSearch() {
        var flag = true;
        $('.n-search .n-s-icon').on('click', function() {
            // $(this).siblings('.n-s-guide').toggle('slow');
            if (flag) {
                $(this).children().animate({
                    'background-position-y': '-43px'
                }, 500);
                $(this).next().stop().animate({
                    'height': 'show',
                }, 500, 'swing');
                flag = false;
            } else {
                $(this).children().animate({
                    'background-position-y': '0'
                }, 500);
                $(this).next().stop().animate({
                    'height': 'hide',
                }, 500, 'swing');
                flag = true;
            }

        });

    }

})(jQuery);