
var current_step = 1;





  let choose_list = [
    {
        "step" : 1,
        "choose1" : "1-1",
        "choose2" : "1-2",
        "choose3" : "1-3",
        "choose4" : "1-4",
    }, 
        {
        "step" : 2,
        "choose1" : "2-1",
        "choose2" : "2-2",
        "choose3" : "2-3",
        "choose4" : "2-4",
    },
        {
        "step" : 3,
        "choose1" : "3-1",
        "choose2" : "3-2",
        "choose3" : "3-3",
        "choose4" : "3-4",
    },
        {
        "step" : 4,
        "choose1" : "4-1",
        "choose2" : "4-2",
        "choose3" : "4-3",
        "choose4" : "4-4",
    },
        {
        "step" : 5,
        "choose1" : "5-1",
        "choose2" : "5-2",
        "choose3" : "5-3",
        "choose4" : "5-4",
    }
];
function getList(step) {
    for (let i = 0; i < 4; i++) {
        if (choose_list[i].step == step) {
            return choose_list[i];
        }
    }
    return null;
}
(function($){
    $(document).ready(function() {
        $('button').click(function() {
            console.log($(this).attr("step"));
            let choose_list = getList($(this).attr("step"));
            $('.CS1').text(choose_list.choose1);
            $('.CS2').text(choose_list.choose2);
            $('.CS3').text(choose_list.choose3);
            $('.CS4').text(choose_list.choose4);
        })
    });
})(jQuery);

//alert(current_step); //x is gobal variable and the value is 7
