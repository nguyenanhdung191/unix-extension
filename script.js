console.log("Extension started!!");

const buy = () => {
    $.post('ico', {
        unx_amount: "100",
        captcha_secret: $('[name="captcha_secret"]').val(),
        captcha_key2: $('[name="captcha_key2"]').val(),
    }, res => {
        if (res.success) {
            $('[name="captcha_secret"]').val(res.captcha_secret);
            $('#captcha-img').attr('src', '/img/captchas/' + res.captcha_secret + '.png');
            console.log("SUCCESS: ", res);
        }
        else {
            console.log("ERROR: ", res);
        }

    })
};

$.get("../ico/info", json => {
    let icoTime = parseInt(json.next_ico_date.from_timestamp) - 5000;
    let ticker = setInterval(() => {
        let currentTime = Date.now();
        if (currentTime >= icoTime) {
            let i = 0;
            buy();
            for (let j = 1; j <= 70; j++) {
                i += 1000;
                setTimeout(buy, i);
            }
            clearInterval(ticker);
        }
    }, 50);
});
