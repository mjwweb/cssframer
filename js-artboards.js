
    var abCount = 0;

    $(document).ready(function(){
      $('#addDtBtn').click(function(){
        abCount++;
        $('#mainAb').append('<div id="ab'+abCount+'" class="artboard dtArtboard"></div>');
        $('#ab'+abCount).draggable({
          grid: [5, 5]
        });
      });
    });

    $(document).ready(function(){
      $('#addTbBtn').click(function(){
        abCount++;
        $('#mainAb').append('<div id="ab'+abCount+'" class="artboard tbArtboard"></div>');
        $('#ab'+abCount).draggable({
          grid: [5, 5]
        });
      });
    });

    $(document).ready(function(){
      $('#addMbBtn').click(function(){
        abCount++;
        $('#mainAb').append('<div id="ab'+abCount+'" class="artboard mbArtboard"></div>');
        $('#ab'+abCount).draggable({
          grid: [5, 5]
        });
      });
    });
