function submit () {
    count = 0;
console.log('hi');
    if ($('#https').is(":checked"))
    {
        count++;
    }
    if ($('#virus').is(":checked"))
    {
        count++;
    }
    if ($('#speed').is(":checked"))
    {
        count++;
    }
    if ($('#size').is(":checked"))
    {
        count++;
    }
    if ($('#js').is(":checked"))
    {
        count++;
    }
    if ($('#request').is(":checked"))
    {
        count++;
    }
    if ($('#local').is(":checked"))
    {
        count++;
    }
    if ($('#outer').is(":checked"))
    {
        count++;
    }
    if ($('#inner').is(":checked"))
    {
        count++;
    }
    if ($('#mobile').is(":checked"))
    {
        count++;
    }
    if ($('#connect').is(":checked"))
    {
        count++;
    }
    if ($('#func').is(":checked"))
    {
        count++;
    }
    mark = Math.round(count * 50 / 12 ) / 10;
    alert('Ваш сайт набрал ' + mark + ' баллов из 5!');
}