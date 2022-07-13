$(document).ready(()=>{
    $('#universal').hide();
    $('#scarlet').hide();
    $('#cuget').hide();
    $('#osf-click').addClass('clickWork');
    $('#osf-click').on('click', (event)=>{
        $(event.currentTarget).addClass('clickWork');
        $('#osf').show();
        $('#universal').hide();
        $('#scarlet').hide();
        $('#cuget').hide();
        $('#scarlet-click').removeClass('clickWork');
        $('#cuget-click').removeClass('clickWork');
        $('#universal-click').removeClass('clickWork');
    });
    $('#universal-click').on('click', (event)=>{
        $(event.currentTarget).addClass('clickWork');
        $('#universal').show();
        $('#osf').hide();
        $('#scarlet').hide();
        $('#cuget').hide();
        $('#scarlet-click').removeClass('clickWork');
        $('#cuget-click').removeClass('clickWork');
        $('#osf-click').removeClass('clickWork');
    });
    $('#scarlet-click').on('click', (event)=>{
        $(event.currentTarget).addClass('clickWork');
        $('#scarlet').show();
        $('#osf').hide();
        $('#universal').hide();
        $('#cuget').hide();
        $('#osf-click').removeClass('clickWork');
        $('#cuget-click').removeClass('clickWork');
        $('#universal-click').removeClass('clickWork');
    });
    $('#cuget-click').on('click', (event)=>{
        $(event.currentTarget).addClass('clickWork');
        $('#cuget').show();
        $('#osf').hide();
        $('#scarlet').hide();
        $('#universal').hide();
        $('#scarlet-click').removeClass('clickWork');
        $('#osf-click').removeClass('clickWork');
        $('#universal-click').removeClass('clickWork');
    });
});