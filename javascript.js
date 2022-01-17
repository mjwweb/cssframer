
  var bxElem, imElem, txElem, btnElem, lineElem, iconElem, mousedown, keydown;
  var controlKey = false;

  $(document).ready(function () {
    editor = ace.edit("editor");
    editor.setTheme("ace/theme/dracula");
    editor.session.setMode("ace/mode/css");
    editor.session.setUseWrapMode(true);
    editor.setHighlightActiveLine(true);
    editor.setOptions({
      fontSize: '11px'
    });
    //editor.renderer.setShowGutter(false);
  });

  $('.resetAb').click(function(){
    $('.artboard').html('');
  });

  setTimeout(function () {
    $('.element').each(function () {
      id = '#' + $(this).attr('id');
      type = $(this).attr('type');
      xElem = subjx(id);
      setControls(xElem, type);
      setTimeout(function(){
        //$(document).trigger('mousedown');
      }, 1500);
    });
  }, 1000);

  $('.saveBtn').click(function () {
    
    // remove the controls from each element
    $('.sjx-wrapper').remove();
    $('.element').removeClass('.sjx-drag');

    doc = $('.artboard').html();

    console.log(doc);
  });

  $(document).ready(function () {
    $('#editor').keydown(function (e) {
      cursor = editor.getCursorPosition();
      lines = editor.session.doc.getAllLines();
      charCount = editor.session.getValue().length;
    });
  });

  $(document).ready(function () {
    $('#ab-w-inpt').change(function () {
      val = $(this).val();
      $('#ab1').css('width', val + 'px');
      $('#arangeAbBtn').trigger('click');
    });
  });

  $(document).ready(function () {
    $('#ab-h-inpt').change(function () {
      val = $(this).val();
      $('#ab1').css('height', val + 'px');
      $('#arangeAbBtn').trigger('click');
    });
  });

  $(document).ready(function () {
    $('.switch').toggleSwitch();
  });

  $(document).ready(function () {
    $('.ui-slider-handle').on('mousedown', function () {
      //$(this).addClass('slider-hdl-focus');
    });
  });

  $(document).ready(function () {
    $('#abOvSwitch').change(function () {
      if ($(this).is(':checked')) {
        $('#ab1').addClass('abOverflow');
      } else {
        $('#ab1').removeClass('abOverflow');
      }
    });
  });

  $(document).ready(function () {
    $('#gridBtn').click(function () {
      $('#mainAb').toggleClass('gridBkg');
    });
  });

  $(document).ready(function () {
    $('#mainAb').mousedown(function () {
      $('#controlsWrap').hide();
      $('#ab-controls').show();
    });
  });

  $(document).ready(function () {
    $('#arangeAbBtn').click(function () {
      $('#ab1').addClass('abTranslate');

      abWidth = $('#ab1').width();
      abHeight = $('#ab1').height();

      topPos = $('#ab1').css('top').slice(0, -2);
      leftPos = $('#ab1').css('left').slice(0, -2);

      trueTop = topPos - (abHeight / 2);
      trueLeft = leftPos - (abWidth / 2);

      newTop = Math.round(trueTop / 50) * 50;
      newLeft = Math.floor(trueLeft / 50) * 50;

      if (newTop < 50) {
        newTop = 50;
      }

      $('#ab1').removeClass('abTranslate');
      $('#ab1').css({
        top: newTop,
        left: newLeft
      });

    });
  });

  //center the artboard on page load

  $(document).ready(function () {
    setTimeout(function () {
      abWidth = $('#ab1').width();
      abHeight = $('#ab1').height();

      topPos = $('#ab1').css('top').slice(0, -2);
      leftPos = $('#ab1').css('left').slice(0, -2);

      trueTop = topPos - (abHeight / 2);
      trueLeft = leftPos - (abWidth / 2);

      newTop = Math.round(trueTop / 50) * 50;
      newLeft = Math.floor(trueLeft / 50) * 50;

      $('#ab1').removeClass('abTranslate');
      $('#ab1').css({
        top: newTop,
        left: newLeft
      });
      $('#ab1').hide();
      $('#ab1').css('visibility', 'visible');
      $('#ab1').fadeIn('fast');
    }, 500);
  });

  var clipboard;

  $(document).ready(function () {
    $(document).keyup(function (e) {
      if (e.keyCode == 17) {
        controlKey = false;
      }
    });
  });

  $(document).ready(function () {
    $(document).keydown(function (e) {

      elemId = $('.active').attr('attatched');
      elem = $('#' + elemId);
      keydown == true;
      key = e.keyCode;

      if (key == 46) {

        $('#' + elemId).remove();
        $('.sjx-controls[attatched=' + elemId + ']').parent().remove();

      }

      if (key == 17) {
        controlKey = true;
      }

      if (key == 37 || key == 38 || key == 39 || key == 40) {

        e.view.event.preventDefault();

        $('.guides').show();

        trans = $('#' + elemId).css('transform');
        values = $.trim(trans.split('(').pop().split(')')[0]);
        matrixVals = values.split(',');

        leftPos = Math.round(matrixVals[4]);
        topPos = Math.round(matrixVals[5]);

        if (key == 38) {
          topPos--;
        }
        if (key == '39') {
          leftPos++;
        }
        if (key == '40') {
          topPos++;
        }
        if (key == '37') {
          leftPos--;
        }

        newVal = 'matrix(' + matrixVals[0] + ',' + matrixVals[1] + ',' + matrixVals[2] + ',' + matrixVals[3] +
          ',' + leftPos + ',' + topPos + ')';
        $('#' + elemId).css('transform', newVal);
        $('.active').css('transform', newVal);

        updateDimensions(elemId);
        updateEditor(elemId);

        setGuides(elemId);
        updateGuides(elemId);

      }

    });
  });

  $(document).ready(function () {
    $(document).keyup(function (e) {
      keydown == false;
      if (e.keyCode == 16) {
        shiftKey == false;
      }
    });
  });

  $('.msrInpt').keydown(function () {
    $(this).val
  });

  $(document).ready(function () {
    $('.spinner-wrap').click(function () {
      $('.spinner-wrap').removeClass('spinner-focus');
      $(this).addClass('spinner-focus');
    });
  });

  function setGuides(elemId) {
    if (elemId) {

      elem = document.querySelector('#' + elemId);
      pos = elem.getBoundingClientRect();

      scrollTop = $('#mainAb').scrollTop();

      w = $('#' + elemId).css('width').slice(0, -2);
      h = $('#' + elemId).css('height').slice(0, -2);

      rectT = (pos.top - 81) + scrollTop + 'px';
      rectR = (pos.right - 351) + 'px';
      rectB = (pos.bottom - 81) + scrollTop + 'px';
      rectL = (pos.left - 351) + 'px';

      unitT = Math.round((pos.top - 81)) + 'px';
      unitR = Math.round((pos.right - 371)) + 'px';
      unitB = Math.round((pos.bottom - 81)) + 'px';
      unitL = Math.round((pos.left - 372)) + 'px';

      midH = ((pos.top - 81) + (pos.bottom - 81)) / 2 + scrollTop + 'px';
      midV = ((pos.left - 351) + (pos.right - 351)) / 2 + 'px';

      if ($('.guide').length == 0) {
        // show the guides on element mousedown
        $('.msrUnits').show();

        $('#mainAb').append('<div id="leftG" style="left:' + rectL + ';" class="vertGuide guide"></div>');
        $('#mainAb').append('<div id="rightG" style="left:' + rectR + ';" class="vertGuide guide"></div>');
        $('#mainAb').append('<div id="bottomG" style="top: ' + rectB + ';" class="horzGuide guide"></div>');
        $('#mainAb').append('<div id="topG" style="top: ' + rectT + ';" class="horzGuide guide"></div>');
        $('#mainAb').append('<div id="midHg" style="top: ' + midH + ';" class="horzMidGuide guide"></div>');
        $('#mainAb').append('<div id="midVg" style="left: ' + midV + ';" class="vertMidGuide guide"></div>');

        $('#msrTp').css('top', unitT).text(msrT + 'px');
        $('#msrRt').css('left', unitR).text(msrR + 'px');
        $('#msrBt').css('top', unitB).text(msrB + 'px');
        $('#msrLft').css('left', unitL).text(msrL + 'px');

        elemIndex = $('#' + elemId).css('z-index');
        guideIndex = elemIndex - 1;
        $('.guide').css('z-index', guideIndex);
      } else {
        // reposition the guides on element mousemove
        elemWidth = $('#width-inpt').val();
        elemHeight = $('#height-inpt').val();

        msrT = $('#x-inpt').val();
        msrL = $('#y-inpt').val();

        msrB = Number(msrT) + Number(elemHeight);
        msrR = Number(msrL) + Number(elemWidth);

        $('#topG').css('top', rectT);
        $('#rightG').css('left', rectR);
        $('#bottomG').css('top', rectB);
        $('#leftG').css('left', rectL);
        $('#midHg').css('top', midH);
        $('#midVg').css('left', midV);

        $('#msrTp').css('top', unitT).text(msrT + 'px');
        $('#msrRt').css('left', unitR).text(msrR + 'px');
        $('#msrBt').css('top', unitB).text(msrB + 'px');
        $('#msrLft').css('left', unitL).text(msrL + 'px');
      }
    }
  }

  $(document).ready(function () {
    $('#addUnitBtn').click(function () {
      $('#addElemsWrap').animate({
        width: 'toggle'
      }, 200, 'easeInOutQuart');
    });
  });

  $(document).ready(function () {
    $('#font-picker').fontselect();
  });

  $(document).ready(function () {
    $('#addBkgBtn').click(function () {
      $('#bkg-pk-mnu').show();
      $('#addElemMnu').hide();
    });
  });

  $(document).ready(function () {
    $('#cs-btn').click(function () {
      $('.draggable').remove();
    });
  });

  $(document).ready(function () {
    $('#fs-btn').click(function () {
      elem = document.getElementById('wrapMain');
      //openFullscreen(elem);
    });
  });

  function openFullscreen(elem) {
    if (elem.requestFullscreen) {
      elem.requestFullscreen();
    } else if (elem.mozRequestFullScreen) {
      elem.mozRequestFullScreen();
    } else if (elem.webkitRequestFullscreen) {
      elem.webkitRequestFullscreen();
    } else if (elem.msRequestFullscreen) {
      elem.msRequestFullscreen();
    }
  }