require.config({
    paths: {
        rdust: '../../rdust',
        dust: 'dust-full-0.4.0'
    }
});

define(['dust', 'rdust!template/test'], function(dust, template) {
    var data = {
        "root": "Subject",
        "person": {
            "name": "Larry",
            "age": 45
        }
    };
    dust.render('template/test', data, function(err, out) {
        console.log(out);
    })
});
