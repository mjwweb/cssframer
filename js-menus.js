

    var editor, history;
    
    $(document).ready(function(){
      $('#runCssBtn').click(function(){
        css = editor.getValue();
        elemId = $(this).val();
        elemType = $('#'+elemId).attr('type');
        transform = 'transform: '+$.trim($('#'+elemId).css('transform')+';');
        values = $.trim(css.split('{').pop().split('}')[0]+transform);
        existing = $('#'+elemId).attr('style');

        if (elemType == 'line') {
          values = $.trim(css.split('{').pop().split('}')[0]);
          existing = $('#'+elemId).find('.innerElem').attr('style');
          AllCss = existing + values;
          alert(AllCss);
        } else {
          AllCss = transform + existing + values;
        }
        if (AllCss.indexOf('position:') >= 0) {
          alert('Position is set to absolute by default.');
          updateEditor(elemId);
        }
        else if (css.indexOf('transform:') >= 0) {
          alert('Transforms are not supported.');
          updateEditor(elemId);
        }
        else {
          //set editor styles to element
          if (type !== 'line') {
            $('#'+elemId).attr('style', values);
          } else {
            $('#'+elemId).find('.innerElem').attr('style', values);
          }

          updateMenu(elemId);
          updateDimensions(elemId);
          // remove existing controls and reattatch new
          // fixes dimension and position changes to element
          xElem = subjx('#'+elemId);
          $('.sjx-controls[attatched='+elemId+']').parent().remove();
          setControls(xElem, type);
        }
      });
    });


    // update dimensions on menu
    function updateDimensions(elemId) {

      type = $('#'+elemId).attr('type');

      trans = $('#'+elemId).css('transform');
      values = $.trim(trans.split('(').pop().split(')')[0]);
      matrixVals = values.split(',');

      leftPos = Math.round(matrixVals[4]);
      topPos = Math.round(matrixVals[5]);

      width = $('#'+elemId).css('width').slice(0, -2);
      height = $('#'+elemId).css('height').slice(0, -2);

      if (type !== 'icon') {
        $('#width-inpt').val(width);
        $('#height-inpt').val(height);
      } else {
         $('#width-inpt').val('auto');
         $('#height-inpt').val('auto');
      }
      $('#x-inpt').val(topPos);
      $('#y-inpt').val(leftPos);

      $('#msrInptWrap').val(elemId);

    }

    function updateIndex(elemId) {
      zIndex = $('#'+elemId).css('z-index');
      $('#zIndexInpt').val(zIndex);

      $('#msrInptWrap2').val(elemId);
    }

    function updateMenu(elemId) {
      type = $('#'+elemId).attr('type');
      if (type == 'box') {
        setBxMnu(elemId);
      }
      if (type == 'txt') {
        setTextMnu(elemId);
      }
      if (type == 'img') {
        setImgMnu(elemId);
      }
      if (type == 'btn') {
        setBtnMnu(elemId);
      }
      if (type == 'line') {
        setLineMnu(elemId);
      }
      if (type == 'icon') {
        setIconMnu(elemId);
      }
    }

    function updateEditor(elemId) {

      type = $('#'+elemId).attr('type');

      CssProps = $.trim($('#'+elemId).attr('style'));
      transform = $('#'+elemId).css('transform');
      tfProp = $.trim('transform: '+transform+';');
      newCss = CssProps.replace(''+tfProp+'', '');
      subStr = newCss.match("transform(.*);");

      frmtCss = cssbeautify('#'+elemId+' {' + newCss + '}' + '\n' + '/*pseudo classes are not supported.*/', {
        indent: '  '
      });

      editor.setValue('');
      editor.setValue(frmtCss);
      editor.clearSelection();

    }

    $(document).ready(function(){
      setTimeout(function(){
        setAbMnu();
      }, 500);
    });



    // Update the menu values /////////////////////////////////////////////////////////

    function setAbMnu() {

      bkgColor = $('#ab1').css('background-color');
      width = $('#ab1').width();
      height = $('#ab1').height();

      $('#ab-w-inpt').val(width);
      $('#ab-h-inpt').val(height);

    }

    function setImgMnu(elemId) {

      elem = $('#'+elemId);

      //hide menus
      if ($('#im-mnu').is(':hidden')) {
        $('.menus').hide();
      }

      //set menu value to active selection
      $('#im-mnu').val(elemId);

      //set execute css button to active selection
      $('#runCssBtn').val(elemId);

      //set global variable
      imElem = $('#im-mnu').val();

      imgSrc = $('#'+elemId).attr('src');

      if (imgSrc !== 'images/imgPlaceholder.jpg') {
        $('#im-holder-mnu').attr('src', imgSrc);
        $('.newImgUpld').hide();
        $('#im-holder-mnu').show();
        $('#imgUpldBtn').hide();
      } else {
        $('#im-holder-mnu').hide();
        $('.newImgUpld').show();
        $('#imgUpldBtn').show();
      }

      borderRadius = elem.css('border-radius').slice(0, -2);
      zIndex = elem.css('z-index');
      shadow = elem.attr('bs');

      $('.bs-slider-im').slider({
        value: shadow
      });
      $('.zIndexInpt-im').val(zIndex);
      $('.crnrsInpt-im').val(borderRadius);

      $('#ab-controls').hide();
      $('#controlsWrap').show();
      $('#im-mnu').show();

    }

    function setTextMnu(elemId) {

      elem = $('#'+elemId);

      //hide menus
      if ($('#tx-mnu').is(':hidden')) {
        $('.menus').hide();
      }

      //set menu value to active selection
      $('#tx-mnu').val(elemId);

      //set execute css button to active selection
      $('#runCssBtn').val(elemId);

      //set global variable
      txElem = $('#tx-mnu').val();

      textAlign = elem.css('text-align');
      fontSize = elem.css('font-size').slice(0, -2);
      fontWeight = elem.css('font-weight');
      fontFamily = elem.css('font-family');
      textDecoration = elem.css('text-decoration');
      fontStyle = elem.css('font-style');
      txColor = elem.css('color');
      text = elem.text();

      $('#font-picker').trigger('setFont', [fontFamily, ''+fontWeight+'']);

      $('.tx-edit-box').val('');
      $('.tx-edit-box').val(text);

      $('#fs-sel').val(fontSize);
      $('.ta-btns, .td-btns').removeClass('td-active');
      $('.ta-btns[action="'+textAlign+'"]').addClass('td-active');

      if (fontWeight == '700') {
        $('#boldBtn').addClass('td-active');
      }

      if (textDecoration.indexOf('underline') >= 0) {
        $('#underlineBtn').addClass('td-active');
      }

      if (fontStyle == 'italic') {
        $('#italicBtn').addClass('td-active');
      }

      $('#clr-pick-tx').spectrum({
          type: "component",
          preferredFormat: 'hex',
          hideAfterPaletteSelect:true,
          showAlpha: "false",
          color: txColor
      });

      setTimeout(function(){
        $('.tx-edit-box').focus();
      }, 200);

      $('#ab-controls').hide();
      $('#controlsWrap').show();
      $('#tx-mnu').show();

    }

    function setBxMnu(elemId) {

      elem = $('#'+elemId);

      //set menu value to active selection
      $('#bx-mnu').val(elemId);

      //set execute css button to active selection
      $('#runCssBtn').val(elemId);

      //set global variable
      bxElem = $('#bx-mnu').val();

      //hide menus
      if ($('#bx-mnu').is(':hidden')) {
        $('.menus').hide();
      }

      zIndex = elem.css('z-index');
      radius = elem.css('borderTopLeftRadius').slice(0, -2);
      shadow = elem.attr('bs');
      bkgColor = elem.css('background-color');
      bdrColor = elem.css('border-left-color');
      bdrWidth = elem.css('border-left-width').slice(0, -2);
      opacity = elem.css('opacity');
      opInpt = Math.round(opacity * 100);


      $('.bs-slider-ct').slider({
        value: shadow
      });
      $('.op-slider-ct').slider({
        value: opacity
      });

      $('#clr-pick-bx-bkg').spectrum({
          type: "component",
          preferredFormat: 'hex',
          hideAfterPaletteSelect: 'true',
          color: bkgColor
      });

      $('#clr-pick-ct-brdr').spectrum({
          type: "component",
          preferredFormat: 'hex',
          hideAfterPaletteSelect: 'true',
          color: bdrColor
      });

      $('#zIndexInpt-ct').val(zIndex);
      $('#crnrsInpt-ct').val(radius);
      $('#brdrInpt-ct').val(bdrWidth);
      $('.opacityInpt-ct').html(opInpt);

      $('#ab-controls').hide();
      $('#controlsWrap').show();
      $('#bx-mnu').show();

    }

    function setBtnMnu(elemId) {

      elem = $('#'+elemId);

      //set menu value to active selection
      $('#btn-mnu').val(elemId);

      //set execute css button to active selection
      $('#runCssBtn').val(elemId);

      //set global variable
      btnElem = $('#btn-mnu').val();
      btnTxt = $('#'+btnElem).text();

      //hide menus
      if ($('#btn-mnu').is(':hidden')) {
        $('.menus').hide();
      }

      bkgColor = elem.css('background-color');
      bdrColor = elem.css('border-color');
      txtColor = elem.css('color');

      $('#clr-pick-btn-bkg').spectrum({
          type: "component",
          preferredFormat: 'hex',
          hideAfterPaletteSelect: 'true',
          color: bkgColor
      });

      $('#clr-pick-btn-bdr').spectrum({
          type: "component",
          preferredFormat: 'hex',
          hideAfterPaletteSelect: 'true',
          color: bdrColor
      });

      $('#clr-pick-btn-txt').spectrum({
          type: "component",
          preferredFormat: 'hex',
          hideAfterPaletteSelect: 'true',
          color: txtColor
      });

      $('#btnTxtInpt').val(btnTxt);

      $('#ab-controls').hide();
      $('#controlsWrap').show();
      $('#btn-mnu').show();
    }

    function setLineMnu(elemId) {

      elem = $('#'+elemId);

      //get child element (the actual line)
      elem2 = $('#'+elemId).find('div');

      //set menu value to active selection 
      $('#line-mnu').val(elemId);

      //set execute css button to active selection
      $('#runCssBtn').val(elemId);

      //set global variable
      lineElem = $('#line-mnu').val();

      //hide menus
      if ($('#line-mnu').is(':hidden')) {
        $('.menus').hide();
      }

      color = elem2.css('background-color');

      $('#clr-pick-line').spectrum({
          type: "component",
          preferredFormat: 'hex',
          hideAfterPaletteSelect: 'true',
          color: color
      });

      $('#ab-controls').hide();
      $('#controlsWrap').show();
      //$('#line-mnu').show();
    }

    function setIconMnu(elemId) {

      elem = $('#'+elemId);

      elem2 = $('#'+elemId).find('i');

      $('#icon-mnu').val(elemId);

      size = elem2.css('font-size').slice(0, -2);

      $('#iconSizeInpt').val(size);

      $('.menus').hide();

      $('#ab-controls').hide();
      $('#controlsWrap').show();
      $('#icon-mnu').show();
    }
