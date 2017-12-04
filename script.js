const buy = () => {
    $.post('ico', {
        unx_amount: "100",
        captcha_secret: "ld8bqvrh",
        captcha_key2: "1064"
    }, res => {
        console.log(res);
    })
};

$.get("../ico/info", json => {
    let icoTime = parseInt(json.next_ico_date.from_timestamp);

    let ticker = setInterval(() => {
        let currentTime = Date.now();
        if (currentTime >= icoTime) {
            clearInterval(ticker);
            buy();
            setTimeout(buy, 5500);
            setTimeout(buy, 10500);
            setTimeout(buy, 15500);
            setTimeout(buy, 20500);
            setTimeout(buy, 25500);
            setTimeout(buy, 30500);
            setTimeout(buy, 35500);
            setTimeout(buy, 40500);
            setTimeout(buy, 45500);
            setTimeout(buy, 50500);
            setTimeout(buy, 55500);
            setTimeout(buy, 60500);
            setTimeout(buy, 65500);            
        }
    }, 50);
});
