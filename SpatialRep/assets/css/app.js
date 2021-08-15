(function ($, undefined) {

  var sql_forbid = /\b(drop)\b/g;
  var sql_modify = /\b(update|alter|create|insert|delete)\b/g;

  $(document).ready(function () {

    var pathname = window.location.pathname.split('/');
    hl = pathname[pathname.length-2];
    if ('/' == hl || 'web' == hl) hl = './';
    $('a[href="' + hl + '"]').parent().attr('class', 'active');

    show_tables();

    $('#qry-form').submit(function(event) {
      event.preventDefault(); // Prevent the form from submitting via the browser.

      var qry = $.trim($('textarea[name="query"]').val().toLowerCase());
      var res = $('#result').empty();

      if (sql_forbid.test(qry)) {
        res.append(cons_warn(-1, "NO DROP"));
        return;
      }
      

      if (sql_modify.test(qry)){
          res.append(cons_warn(-0, "NO MODIFY"));
          return;
      }
       
      var form = $(this);
      $.ajax({
        type: form.attr('method'),
        url: form.attr('action'),
        data: form.serialize()
      }).success(function(ret) {
        //console.log(ret);

        
         

        var data = $.parseJSON(ret);
        var msg = data.msg;

        if (0 != data.errno) res.append(cons_warn(data.errno, msg[0].data[0].Message));
        else res.append(cons_table(msg[0]));

      }).fail(function() {
        // TODO: print some message
      });
    });
  });

  function show_tables() {

    $.ajax({
      type: 'post',
      url: 'demo/all_tables.php'
    }).success(function(ret) {
      // console.log(ret);

      var res = $.parseJSON(ret);
      if (0 != res.errno) {
        $('body>div[class="container"]').prepend(cons_warn(res.errno, res.msg));
      } else {
        var tblist = $('#tblist').empty();
        var tbdetail = $('#tbdetail').empty();
        for (var i = 0; i < res.msg.length; ++i) {
          var table = res.msg[i];

          var li = $('<li/>').append($('<a/>').attr({
            'href': '#'+table.name,
            'data-toggle': 'tab'}).append(table.name));
          var div = $('<div/>').attr({
            'class': 'tab-pane fade',
            'id': table.name}).append(cons_table(table));

          tblist.append(li);
          tbdetail.append(div);
        }

        var lastTab = localStorage.getItem('lastTab');
        console.log(lastTab);
        if (!lastTab) $('#tblist a:first').tab('show');
        else $('#tblist a[href="'+lastTab+'"]').tab('show');

        $('a[data-toggle="tab"]', $('#tblist')).on('show.bs.tab', function (e) {
          localStorage.setItem('lastTab', $(e.target).attr('href'));
        });
      }
    });
  }

  function cons_table(table) {
    var i, j, tmp, row;

    var th = $('<thead/>');
    tmp = $('<tr/>');
    for (i = 0; i < table.attrs.length; ++i)
      tmp.append($('<th/>').append(table.attrs[i]));
    th.append(tmp);

    var td = $('<tbody/>');
    for (i = 0; i < table.data.length; ++i) {
      row = table.data[i];
      tmp = $('<tr/>');
      for (j = 0; j < table.attrs.length; ++j)
        tmp.append($('<td/>').append(row[table.attrs[j]]));
      td.append(tmp);
    }

    var tb = $('<table/>').attr('class', 'table table-striped');
    tb.append(th);
    tb.append(td);

    return tb;
  }

  function cons_warn(errno, msg) {
    return $('<div/>').addClass('alert alert-danger alert-dismissable')
      .append($('<button/>').attr({
        'type': 'button',
        'data-dismiss': 'alert',
        'aria-hidden': 'true',
        'class': 'close'}).append('&times;'))
      .append('<strong>Error: ' + errno + '!</strong> ' + msg);
  }

}(jQuery));
