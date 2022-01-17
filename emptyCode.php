

<script>

	var msrSpnTimeout, msrSpnInterval, indxSpnTimeout, indxSpnInterval, radiusSpnTimeout, radiusSpnInterval;

	 $(document).on('mouseup', function(){
      mousedown = false;
      $('.guide').remove();

      clearInterval(msrSpnInterval);
      clearTimeout(msrSpnTimeout);

      clearInterval(indxSpnInterval);
      clearTimeout(indxSpnTimeout);

      clearInterval(radiusSpnInterval);
      clearTimeout(radiusSpnTimeout);

      clearInterval(bdrSpnInterval);
      clearTimeout(bdrSpnTimeout);

    });

    $(document).ready(function(){
      $('.sp-btn-indx').mousedown(function(){

        inpt = $(this).attr('input');
        type = $(this).attr('type');
        action = $(this).attr('action');
        val = $(''+inpt+'').val();

        if (action == 'up') {
          val++;
        }
        else {
          val--;
        }

        $(''+inpt+'').val(val);

        changezIndex(val, type);

        indxSpnTimeout = setTimeout(function(){
          indxSpnInterval = setInterval(function(){

            if (mousedown == true) {
              if (action == 'up') {
                val++;
              } else {
                val--;
              }

              $(''+inpt+'').val(val);
            }

            changezIndex(val, type);

          }, 50);
        }, 450);

      });
    });

    $(document).ready(function(){
      $('.sp-btn-radius').mousedown(function(){

        inpt = $(this).attr('input');
        type = $(this).attr('type');
        action = $(this).attr('action');
        val = $(''+inpt+'').val();

        if (action == 'up') {
          val++;
        }
        else {
          val--;
        }

        $(''+inpt+'').val(val);

        changeCorners(val, type);

        radiusSpnTimeout = setTimeout(function(){
          radiusSpnInterval = setInterval(function(){

            if (mousedown == true) {
              if (action == 'up') {
                val++;
              } else {
                val--;
              }

              $(''+inpt+'').val(val);
            }

            changeCorners(val, type);

          }, 50);
        }, 450);

      });
    });

    $(document).ready(function(){
      $('.sp-btn-bdr').mousedown(function(){

        inpt = $(this).attr('input');
        type = $(this).attr('type');
        action = $(this).attr('action');
        val = $(''+inpt+'').val();

        if (action == 'up') {
          val++;
        }
        else {
          val--;
        }

        $(''+inpt+'').val(val);

        changeBorder(val);

        bdrSpnTimeout = setTimeout(function(){
          bdrSpnInterval = setInterval(function(){

            if (mousedown == true) {
              if (action == 'up') {
                val++;
              } else {
                val--;
              }

              $(''+inpt+'').val(val);
            }

            changeBorder(val);

          }, 50);
        }, 450);

      });
    });

    $(document).ready(function(){
      $('.sp-btn-dim').mousedown(function(){
        elem = $(this).attr('for');
        action = $(this).attr('action');
        val = $(''+elem+'').val();

        if (action == 'up') {
          val++;
        }
        else {
          val--;
        }

        $(''+elem+'').val(val);
        changeDimensions();

        msrSpnTimeout = setTimeout(function(){
          msrSpnInterval = setInterval(function(){

            if (mousedown == true) {
              if (action == 'up') {
                val++;
              } else {
                val--;
              }

              $(''+elem+'').val(val);
            }

            changeDimensions();

          }, 50);
        }, 450);

      });
    });

</script>