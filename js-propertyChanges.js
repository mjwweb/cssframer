
    var spnTimeout, spnInterval;

// Spinners

    $(document).on('mouseup', function(){
      $('.ui-selectable-helper').show();
      mousedown = false;
      $('.guide').remove();
      $('.msrUnits').hide();

      clearInterval(spnInterval);
      clearTimeout(spnTimeout);

      $('#ab1').selectable({disabled: false});

    });

    $(document).ready(function(){
      $('.sp-btn').mousedown(myFunc = function testing(){

        inpt = $(this).attr('input');
        type = $(this).attr('type');
        action = $(this).attr('action');
        val = $(''+inpt+'').val();

        if (val !== 'auto') {
          if (action == 'up') {
            val++;
          }
          else {
            if (val > 0) {
              val--;
            }
          }

          spinnerChange(inpt, val);

          spnTimeout = setTimeout(function(){
            spnInterval = setInterval(function(){

              if (mousedown == true) {
                if (action == 'up') {
                  val++;
                } else {
                  if (val > 0) {
                    val--;
                  }
                }
              }

              spinnerChange(inpt, val);

            }, 50);
          }, 450);
        }

      });
    });

    function spinnerChange(inpt, val) {
      $(''+inpt+'').val(val);
      $(''+inpt+'').trigger('propertychange');
    }

    $(document).ready(function(){
      $('.msrInpt').on('input propertychange', function() {
        changeDimensions();
      });
    });

    $(document).ready(function(){
      $("#va-btn").click(function(){
        vertCenter();
      });
    });

    $(document).ready(function(){
      $("#ha-btn").click(function(){
        horzCenter();
      });
    });

// BOXES ///////////////////////////////////////////////////////////////////

    $(document).ready(function(){
      $('#clr-pick-bx-bkg').change(function(){
        color = $(this).val();
        $('#'+bxElem+'').css('background-color', color);
        updateEditor(bxElem);
      });
    });

    $(document).ready(function(){
      $('#clr-pick-ct-brdr').change(function(){
        color = $(this).val();
        $('#'+bxElem+'').css('border-color', color);
        updateEditor(bxElem);
      });
    });

    $(document).ready(function(){
      $('.bs-slider-ct').slider({
        orientation: 'horizontal',
        range: "min",
        value: 0,
        min: 0,
        max: 5,
        step: 1,
        slide: function(event, ui) {
          changeBS(ui.value, 'bx');
        },
        stop: function(event, ui) {
          updateEditor(bxElem);
        }
      });
    });

    $(document).ready(function(){
      $('.op-slider-ct').slider({
        orientation: 'horizontal',
        range: "min",
        value: 1,
        min: 0,
        max: 1,
        step: .01,
        slide: function(event, ui) {
          changeOP(ui.value, 'bx');
        },
        stop: function(event, ui) {
          updateEditor(bxElem);
        }
      });
    });

    $(document).ready(function(){
      $('#crnrsInpt-ct').on('input propertychange', function(){
        val = $(this).val();
        if (!val) {
          val = 0;
        }
        changeBxRadius(val);
      });
    });

    $(document).ready(function(){
      $('#brdrInpt-ct').on('input propertychange', function() {
        val = $(this).val();
        if (!val) {
          val = 0;
        }
        changeBxBorder(val);
      });
    });

    $(document).ready(function(){
      $('#zIndexInpt').on('input propertychange', function() {
        val = $(this).val();
        if (!val) {
          val = 0;
        }
        changeIndex(val);
      });
    });

    // BUTTONS ////////////////////////////////////////////////////////////////

    $(document).ready(function(){
      $('#clr-pick-btn-bkg').change(function(){
        color = $(this).val();
        $('#'+btnElem).css('background-color', color);
        updateEditor(btnElem);
      });
    });

    $(document).ready(function(){
      $('#clr-pick-btn-txt').change(function(){
        color = $(this).val();
        $('#'+btnElem).css('color', color);
        updateEditor(btnElem);
      });
    });

    $(document).ready(function(){
      $('#clr-pick-btn-bdr').change(function(){
        color = $(this).val();
        $('#'+btnElem).css('border-color', color);
        updateEditor(btnElem);
      });
    });

    $(document).ready(function(){
      $('#btnTxtInpt').on('input propertychange', function(){
        val = $(this).val();
        $('#'+btnElem).text(val);
      });
    });

    // IMAGES /////////////////////////////////////////////////////////////////

    $(document).ready(function(){
      $('.bs-slider-im').slider({
        orientation: 'horizontal',
        value: 0,
        min: 0,
        max: 5,
        step: 1,
        slide: function(event, ui) {
          changeBS(ui.value, 'img');
          updateEditor(imElem);
        }
      });
    });

    $(document).ready(function(){
      $('.op-slider-im').slider({
        orientation: 'horizontal',
        value: 1,
        min: 0,
        max: 1,
        step: .01,
        slide: function(event, ui) {
          changeOP(ui.value, 'img');
          updateEditor(imElem);
        }
      });
    });

    $(document).ready(function(){
      $('.zIndexInpt-im').on('input propertychange', function() {
        val = $(this).val();
        if (!val) {
          val = 0;
        }
        changezIndex(val, 'img');
        updateEditor(imElem);
      });
    });

    $(document).ready(function(){
      $('.crnrsInpt-im').on('input propertychange', function(){
        val = $(this).val();
        if (!val) {
          val = 0;
        }
        changeCorners(val, 'img');
        updateEditor(imElem);
      });
    });

    // TEXT BLOCKS  ///////////////////////////////////////////////////////////

    $(document).ready(function(){
      $('#font-picker').on('change', function(){
        changeFont(this.value);
        updateEditor(txElem);
      });
    });

    $(document).ready(function(){
      $('#clr-pick-tx').change(function(){
        color = $(this).val();
        $('#'+txElem+'').css('color', color);
        updateEditor(txElem);
      });
    });

    $(document).ready(function(){
      $('.ta-btns').click(function(){
        $('.ta-btns').removeClass('td-active');
        $(this).addClass('td-active');

        action = $(this).attr('action');
        $('#'+txElem).css('text-align', action);
        updateEditor(txElem);
      });
    });

    $(document).ready(function(){
      $('.td-btns').click(function(){

        action = $(this).attr('action');

        if (action == 'bold') {
          if (!$(this).hasClass('td-active')) {
            $('#'+txElem).css('font-weight', '700');
          } else {
            $('#'+txElem).css('font-weight', '400');
          }
        }

        if (action == 'underline') {
          if (!$(this).hasClass('td-active')) {
            $('#'+txElem).css('text-decoration', 'underline');
          } else {
            $('#'+txElem).css('text-decoration', 'none');
          }
        }

        if (action == 'italic') {
          if (!$(this).hasClass('td-active')) {
            $('#'+txElem).css('font-style', 'italic');
          } else {
            $('#'+txElem).css('font-style', 'normal');
          }
        }

        $(this).toggleClass('td-active');
        updateEditor(txElem);

      });
    });

    $(document).ready(function(){
      $('#fs-sel').on('input propertychange', function(){
        val = $(this).val();
        $('#'+txElem).css('font-size', val+'px');
        updateEditor(txElem);
      });
    });

    $('.tx-size').on('input propertychange', function(){
      val = $(this).val();
      $('#'+txElem).css('font-size', val+'px');
      updateEditor(txElem);
    });

    $('.tx-edit-box').on('input propertychange', function(){
      val = $(this).val();
      $('#'+txElem).text(val);
    });

    // Icons //////////////////////////////////////////////////////////////////

    $(document).ready(function(){
      $('#iconSizeInpt').change(function(){
        elemId = $('#icon-mnu').val();
        val = $(this).val();

        $('#'+elemId).find('i').css('font-size', val+'px');

        wrapDims = Number(val) + 10 + 'px';

        $('#'+elemId).css('width', wrapDims);
        $('#'+elemId).css('height', wrapDims);

        $('.sjx-controls[attatched='+elemId+']').css('width', wrapDims);
        $('.sjx-controls[attatched='+elemId+']').css('height', wrapDims);

      });
    });

    // UPDATE FUNCTIONS ///////////////////////////////////////////////////////

    function vertCenter() {

      elemId = $('#msrInptWrap2').val();

      abHeight = $('#ab1').css('height').slice(0, -2);
      elemHeight = $('#'+elemId).css('height').slice(0, -2);

      abCenter = abHeight / 2;

      trans = $('#'+elemId).css('transform');
      values = $.trim(trans.split('(').pop().split(')')[0]);
      matrixVals = values.split(',');

      topPos = abCenter - (elemHeight / 2);

      newVal = 'matrix(' + matrixVals[0] + ',' + matrixVals[1] + ',' + matrixVals[2] + ',' + matrixVals[3] + ',' + matrixVals[4] + ',' + topPos + ')';

      $('#'+elemId).css('transform', newVal);
      $('.sjx-controls[attatched='+elemId+']').css('transform', newVal);

      updateEditor(elemId);
      updateDimensions(elemId);
    }

    function horzCenter() {

      elemId = $('#msrInptWrap2').val();

      abWidth = $('#ab1').css('width').slice(0, -2);
      elemWidth = $('#'+elemId).css('width').slice(0, -2);

      abCenter = abWidth / 2;

      trans = $('#'+elemId).css('transform');
      values = $.trim(trans.split('(').pop().split(')')[0]);
      matrixVals = values.split(',');

      leftPos = abCenter - (elemWidth / 2);

      newVal = 'matrix(' + matrixVals[0] + ',' + matrixVals[1] + ',' + matrixVals[2] + ',' + matrixVals[3] + ',' + leftPos + ',' + matrixVals[5] + ')';

      $('#'+elemId).css('transform', newVal);
      $('.sjx-controls[attatched='+elemId+']').css('transform', newVal);

      updateEditor(elemId);
      updateDimensions(elemId);
    }

    function changeDimensions() {

      w = $('#width-inpt').val();
      h = $('#height-inpt').val();
      x = $('#x-inpt').val();
      y = $('#y-inpt').val();


      elemId = $('#msrInptWrap').val();

      trans = $('#'+elemId).css('transform');
      values = $.trim(trans.split('(').pop().split(')')[0]);
      matrixVals = values.split(',');

      leftPos = Math.round(y);
      topPos = Math.round(x);

      newVal = 'matrix(' + matrixVals[0] + ',' + matrixVals[1] + ',' + matrixVals[2] + ',' + matrixVals[3] + ',' + leftPos + ',' + topPos + ')';

      $('#'+elemId).css({ transform: newVal, width: w, height: h });
      $('.sjx-controls[attatched='+elemId+']').css({ transform: newVal, width: w, height: h });

      updateEditor(elemId);

    }

    function changeBS(val, type) {

      if (type == 'img') {
        elem = $('#im-mnu').val();
      }

      if (type == 'bx') {
        elem = $('#bx-mnu').val();
      }

      if (val == 0) {
        $('#'+elem).css('box-shadow', 'none');
        $('#'+elem).attr('bs', '0');
      }
      if (val == 1) {
        $('#'+elem).css('box-shadow', '0 1px 3px rgba(0,0,0,0.12), 0 1px 2px rgba(0,0,0,0.24)');
        $('#'+elem+'').attr('bs', '1');
      }
      if (val == 2) {
        $('#'+elem).css('box-shadow', '0 3px 6px rgba(0,0,0,0.16), 0 3px 6px rgba(0,0,0,0.23)');
        $('#'+elem+'').attr('bs', '2');
      }
      if (val == 3) {
        $('#'+elem).css('box-shadow', '0 10px 20px rgba(0,0,0,0.19), 0 6px 6px rgba(0,0,0,0.23)');
        $('#'+elem+'').attr('bs', '3');
      }
      if (val == 4) {
        $('#'+elem).css('box-shadow', '0 14px 28px rgba(0,0,0,0.25), 0 10px 10px rgba(0,0,0,0.22)');
        $('#'+elem+'').attr('bs', '4');
      }
      if (val == 5) {
        $('#'+elem).css('box-shadow', '0 19px 38px rgba(0,0,0,0.30), 0 15px 12px rgba(0,0,0,0.22)');
        $('#'+elem+'').attr('bs', '5');
      }

    }

    function changeBxBorder(val) {
      color = $("#clr-pick-ct-brdr").spectrum('get');
      $('#'+bxElem+'').css('border', val+'px solid'+color);
      updateEditor(bxElem);
    }

    function changeOP(val, type) {

      truVal = Math.round(val * 100);

      if (type == 'bx') {
        elem = $('#bx-mnu').val();
        $('.opacityInpt-ct').html(truVal);
      }
      if (type == 'img') {
        elem = $('#im-mnu').val();
        $('.opacityInpt-im').html(truVal);
      }

      $('#'+elem).css('opacity', val);

    }

    function changeFont(font) {
      elem = $('#tx-mnu').val();

      font = font.replace(/\+/g,' ');
      font = font.split(':');

      fontFamily = font[0];
      fontWeight = font[1] || 400;

      $('#'+elem).css({fontFamily:"'"+fontFamily+"'", fontWeight:fontWeight});
    }

    function changeIndex(val) {

      elem = $('#msrInptWrap2').val();

      $('#'+elem+'').css('z-index', val);
      $('.sjx-controls[attatched='+elem+']').css('z-index', val);

      updateEditor(elem);
    }

    function changeBxRadius(val) {

      $('#'+bxElem+'').css('border-radius', val+'px');
      updateEditor(bxElem);

    }