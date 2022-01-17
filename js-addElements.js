
	 var mouseX, mouseY, boxCloner, lineCloner, txtCloner, imgCloner, btnCloner;
	 var iconCloner;

	 var count = 0;

     function getMousePos(e) {
      mouseX = Math.ceil(e.clientX/5)*5;
      mouseY = Math.ceil(e.clientY/5)*5;

      return {x: Math.ceil(e.clientX/5)*5, y: Math.ceil(e.clientY/5)*5};
     }

     $(document).ready(function(){
        $('#addDivBtn').mousedown(function(){
          boxCloner = true;
          $(document).on('mousemove', function(e){
            if (boxCloner == true) {
              coords = getMousePos(e);
              $('.boxCloner').css({top: coords.y, left: coords.x});
              setGuides();
            }
          });
          $(document).on('mouseup', function(e){
            if (boxCloner == true) {
              $('.boxCloner').hide();
              newBox();
            }
            boxCloner = false;
          });
          $('.boxCloner').css('z-index', Number(count) + 1);
          $('.boxCloner').fadeIn('fast');
        });
        $('#addDivBtn').mouseup(function(){
          $('.boxCloner').hide();
        });
     });

     $(document).ready(function(){
        $('#addBtnBtn').mousedown(function(){
          btnCloner = true;
          $(document).on('mousemove', function(e){
            if (btnCloner == true) {
              coords = getMousePos(e);
              $('.btnCloner').css({top: coords.y, left: coords.x});
            }
          });
          $(document).on('mouseup', function(e){
            if (btnCloner == true) {
              $('.btnCloner').hide();
              newBtn();
            }
            btnCloner = false;
          });
          $('.btnCloner').css('z-index', Number(count) + 1);
          $('.btnCloner').show();
        });
        $('#addBtnBtn').mouseup(function(){
          $('.btnCloner').hide();
        });
     });

     $(document).ready(function(){
        $('#addLineBtn').mousedown(function(){
          lineCloner = true;
          $(document).on('mousemove', function(e){
            if (lineCloner == true) {
              coords = getMousePos(e);
              $('.lineCloner').css({top: coords.y, left: coords.x});
            }
          });
          $(document).on('mouseup', function(e){
            if (lineCloner == true) {
              $('.lineCloner').hide();
              newLine();
            }
           	lineCloner = false;
          });
          $('.lineCloner').css('z-index', Number(count) + 1);
          $('.lineCloner').show();
        });
        $('#addLineBtn').mouseup(function(){
          $('.lineCloner').hide();
        });
     });

     $(document).ready(function(){
        $('#addTxtBtn').mousedown(function(){
          txtCloner = true;
          $(document).on('mousemove', function(e){
            if (txtCloner == true) {
              coords = getMousePos(e);
              $('.txtCloner').css({top: coords.y, left: coords.x});
            }
          });
          $(document).on('mouseup', function(e){
            if (txtCloner == true) {
              $('.txtCloner').hide();
              newText();
            }
            txtCloner = false;
          });
          $('.txtCloner').css('z-index', Number(count) + 1);
          $('.txtCloner').show();
        });
        $('#addTxtBtn').mouseup(function(){
          $('.txtCloner').hide();
        });
     });

     $(document).ready(function(){
        $('.icon').mousedown(function(){
          iconCloner = true;

          icon = $(this).attr('class').slice(5);
          $('.iconCloner').html('<i class="'+icon+'"></i>');

          $(document).on('mousemove', function(e){
            if (iconCloner == true) {
              coords = getMousePos(e);
              $('.iconCloner').css({top: coords.y, left: coords.x});
            }
          });
          $(document).on('mouseup', function(e){
            if (iconCloner == true) {
              $('.iconCloner').hide();
              newIcon(icon);
            }
            iconCloner = false;
          });
          $('.iconCloner').css('z-index', Number(count) + 1);
          $('.iconCloner').show();
        });
        $('.icon').mouseup(function(){
          $('.iconCloner').hide();
        });
     });

     $(document).ready(function(){
        $('#addImgBtn').mousedown(function(){
          imgCloner = true;
          $(document).on('mousemove', function(e){
            if (imgCloner == true) {
              coords = getMousePos(e);
              $('.imgCloner').css({top: coords.y, left: coords.x});
            }
          });
          $(document).on('mouseup', function(e){
            if (imgCloner == true) {
              $('.imgCloner').hide();
              newImg();
            }
            imgCloner = false;
          });
          $('.imgCloner').css('z-index', Number(count) + 1);
          $('.imgCloner').show();
        });
        $('#addImgBtn').mouseup(function(){
          $('.imgCloner').hide();
        });
     });

     function newIcon(icon) {

     	count++;

        topPos = mouseX - $('#ab1').offset().left;
        leftPos = mouseY - $('#ab1').offset().top;

        matrixPos = 'transform: matrix(1, 0, 0, 1, '+topPos+', '+leftPos+');';
        iconInlineCss = 'color: gray; font-size: 20px';
        $('#ab1').append('<div type="icon" class="element testIconWrap" id="icon'+count+'" style="'+matrixPos+'"><i style="'+iconInlineCss+'" pid="icon'+count+'" class="innerElem '+icon+' testIcon"></i></div>');

        elemId = 'icon'+count;
        setIconMnu(elemId);

       	xElem = subjx('#icon'+count);
       	setControls(xElem, 'icon');

    }

      function newBox() {

        count++;

        topPos = mouseX - $('#ab1').offset().left;
        leftPos = mouseY - $('#ab1').offset().top;

        boxInlineCss = 'transform: matrix(1, 0, 0, 1, '+topPos+', '+leftPos+'); background-color: #fff; width: 100px; height: 100px; z-index: '+count+'; border: 2px solid #707070;';
        $('#ab1').append('<div type="box" bs="0" style="'+boxInlineCss+'" id="box'+count+'" class="box element"></div>');

        elemId = 'box'+count;
        setBxMnu(elemId);

        xElem = subjx('#box'+count);
        setControls(xElem, 'box');

      }

      function newText() {

      	topPos = mouseX - $('#ab1').offset().left;
        leftPos = mouseY - $('#ab1').offset().top;

        count++;
        txtInlineCss = 'transform: matrix(1, 0, 0, 1, '+topPos+', '+leftPos+'); width: 300px; height: 90px; font-size: 14px; color: #707070; z-index: '+count+';';
        $('#ab1').append('<div type="txt" style="'+txtInlineCss+'" id="text'+count+'" class="text element">Lorem ipsum dolor sit amet, consectetur adipiscing elit. Integer mollis risus a sapien volutpat scelerisque eu eget quam. Sed sed erat rhoncus elit ornare mattis eu a quam.</div>');

        elemId = 'text'+count;
        setTextMnu(elemId);

        xElem = subjx('#text'+count);
        setControls(xElem, 'txt');

      }

      function newImg() {

      	 topPos = mouseX - $('#ab1').offset().left;
         leftPos = mouseY - $('#ab1').offset().top;

     	 count++;
      	 imgInlineCss = 'transform: matrix(1, 0, 0, 1, '+topPos+', '+leftPos+'); width: 200px; z-index: '+count+';';
      	 $('#ab1').append('<img type="img" bs="0" style="'+imgInlineCss+'" id="image'+count+'" class="image element" src="images/imgPlaceholder.jpg" />');

      	 setTimeout(function(){
       	  elemId = 'image'+count;
       	  setImgMnu(elemId);

       	  xElem = subjx('#image'+count);
       	  setControls(xElem, 'img');
       	}, 50);

      }

      function newBtn() {

      	 topPos = mouseX - $('#ab1').offset().left;
         leftPos = mouseY - $('#ab1').offset().top;

         count++;
         btnInlineCss = 'transform: matrix(1, 0, 0, 1, '+topPos+', '+leftPos+'); width: 90px; height: 30px; background-color: #ccc; color: #707070; border-color: #ccc; border: 2px solid; border-radius: 5px; z-index: '+count+';';
         //$('#ab1').append('<div type="btn" class="button element" id="button'+count+'" style="'+btnInlineCss+'"><p pid="button'+count+'" class="innerElem" style="position: absolute; top: 50%; left: 50%; transform: translate(-50%, -50%);">Button</p></div>');
         $('#ab1').append('<button type="btn" class="button element" id="button'+count+'" style="'+btnInlineCss+'">button</button>');

         elemId = 'button'+count;
         setBtnMnu(elemId);

       	 xElem = subjx('#button'+count);
       	 setControls(xElem, 'btn');

      }

      function newLine() {

      	count++;

        topPos = mouseX - $('#ab1').offset().left;
        leftPos = mouseY - $('#ab1').offset().top;

       	lineInlineCss = 'background-color: #707070; width: 100%; height: 1px;';
       	matrixPos = 'transform: matrix(1, 0, 0, 1, '+topPos+', '+leftPos+'); z-index: '+count+';';
        $('#ab1').append('<div style="'+matrixPos+'" type="line" id="line'+count+'" class="lineWrap element"><div pid="line'+count+'" style="'+lineInlineCss+'" class="line innerElem"></div></div>');

        elemId = 'line'+count;
        setLineMnu(elemId);

        xElem = subjx('#line'+count);
        setControls(xElem, 'line');

      }

      $(document).ready(function(){
        $('#imgUpldBtn').click(function(){
          $('#fileInpt').trigger('click');
        });
      });

       $("#fileInpt").on('change', function () {
           var imgPath = $(this)[0].value;
           var extn = imgPath.substring(imgPath.lastIndexOf('.') + 1).toLowerCase();

           if (extn == "gif" || extn == "png" || extn == "jpg" || extn == "jpeg" || extn == 'svg') {
               if (typeof (FileReader) != "undefined") {

                   var reader = new FileReader();
                   reader.onload = function (e) {

                    $('#'+imElem).attr('src', e.target.result);

                    setTimeout(function(){
                      imgWidth = $('#'+imElem).width();
                      imgHeight = $('#'+imElem).height();
                      $('.sjx-controls[attatched='+imElem+']').height(imgHeight);
                      $('.sjx-controls[attatched='+imElem+']').width(imgWidth);

                      $('#im-holder-mnu').attr('src', e.target.result);
                      $('.newImgUpld').hide();
                      $('#imgUpldBtn').hide();
                      $('#im-holder-mnu').show();
                    }, 500);

                     count++;
                     //imgInlineCss = 'transform: matrix(1, 0, 0, 1, 60, 60); width: 300px; z-index: '+count+';';
                     //$('#ab1').append('<img type="img" bs="0" style="'+imgInlineCss+'" id="image'+count+'" class="image element" src="'+e.target.result+'" />');
                   }

                   reader.readAsDataURL($(this)[0].files[0]);
                   $('#fileInpt')[0].value = '';

               } else {
                   alert("This browser does not support file uploading with our platform. We recommend using Google Chrome or Safari.");
               }
           } else {
               alert("Invalid file type");
           }
       });