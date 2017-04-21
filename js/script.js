function set_timer() {
	var d = new Date();
	add_timer(23 - d.getHours(), 'hour');
	add_timer(59 - d.getMinutes(), 'minute');
	add_timer(59 - d.getSeconds(), 'second');
}

function add_timer(value, selector) {
	if (value < 10)
		value = "0" + value;

	value = value.toString();

	$(".timer .result-"+selector+" span").text(value[0]);
    $(".timer .result-"+selector+" span:last-child").text(value[1]);
}

$(document).ready(function() {
    set_timer();
    setInterval(function() {
        set_timer();
    }, 1000);
});
