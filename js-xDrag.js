var xDraggables;
var undoStack = [];
var redoStack = [];

function disableMultiSelect() {
  $('.element').each(function () {
    $(this).removeClass('cloneItem');
  });
}

$("#ab1").selectable({
  filter: '.element',
  selected: function (event, ui) {
    $('.ui-selected').each(function () {

      $(this).addClass('cloneItem');

      elemId = $(this).attr('id');

      trans = $('#' + elemId).css('transform');
      values = $.trim(trans.split('(').pop().split(')')[0]);
      matrixVals = values.split(',');

      leftPos = matrixVals[4];
      topPos = matrixVals[5];

      $('#' + elemId).attr('matrix-left', leftPos);
      $('.sjx-controls[attatched=' + elemId + ']').attr('matrix-left', leftPos);

      $('#' + elemId).attr('matrix-top', topPos);
      $('.sjx-controls[attatched=' + elemId + ']').attr('matrix-top', topPos);

    });
  }
});

$(document).on('mousemove', function (e) {

  if ($('.element').is(e.target) || $('.innerElem').is(e.target) && !$('.sjx-controls').is(e.target)) {
    if (mousedown == false) {
      if ($('.innerElem').is(e.target)) {
        elemId = e.target.getAttribute('pid');
      } else {
        elemId = e.target.id;
      }

      $('.sjx-controls[attatched=' + elemId + ']').show();
      $('.sjx-controls[attatched=' + elemId + ']').find('.sjx-hdl, .sjx-normal').hide();
    }
  }
  if ($('#ab1').is(e.target)) {
    $('.sjx-controls').not('.active').hide();
    $('.guide').remove();
  }
});

$(document).on('mouseleave', '.sjx-controls', function (e) {
  if (mousedown == false && !$(this).hasClass('active')) {
    $('.sjx-controls').not('.active').hide();
    $('.guide').remove();
  }
});

$(document).on('mousedown', function (e) {
  mousedown = true;
  controls = document.querySelector('.sjx-controls');
  if (!$('#tx-mnu').is(e.target) && $('#tx-mnu').has(e.target).length === 0) {
    $('.text').removeClass('textFocus');
  }
  if (!$('.spinner-wrap').is(e.target) && $('.spinner-wrap').has(e.target).length === 0) {
    $('.spinner-wrap').removeClass('spinner-focus');
  }
  if (!$('.sjx-controls').is(e.target) && $('.sjx-controls').has(e.target).length === 0) {
    $('.sjx-controls').hide();
    $('.sjx-controls').removeClass('active');
    $('.guide').remove();

    disableMultiSelect();
  }
});

$(document).on('mousedown', '.sjx-controls', function (e) {

  $('.ui-selectable-helper').hide();

  $('#ab1').selectable({
    disabled: true
  });

  $('.sjx-controls').removeClass('active').hide();
  elemId = $(this).attr('attatched');
  elemType = e.target.getAttribute('type');
  $(this).find('.sjx-hdl, .sjx-normal').show();
  $('.sjx-controls[attatched=' + elemId + ']').addClass('active').show();

  updateDimensions(elemId);
  updateIndex(elemId);
  updateMenu(elemId);
  updateEditor(elemId);

});

function setControls(xElem, type) {

  elemId = xElem[0].id;

  if (type == 'box' || type == "txt" || type == "line" || type == 'btn' || type == 'icon') {

    xDraggables = xElem.drag({
      snap: {
        x: 5,
        y: 5,
        angle: 1.875
      },
      onInit() {
        updateEditor(elemId);
        updateDimensions(elemId);
        updateIndex(elemId);
      },
      onMove({
        clientX,
        clientY,
        dx,
        dy,
        transform
      }) {
        elemMove(elemId, transform, dx, dy);
      },
      onResize({
        clientX,
        clientY,
        dx,
        dy,
        width,
        height
      }) {
        elemResize(elemId);
      },
      onRotate({
        clientX,
        clientY,
        delta,
        transform
      }) {
        setGuides(elemId);
      },
      onDrop({
        clientX,
        clientY
      }) {
        updateEditor(elemId);
        $('.guide').remove();
        disableMultiSelect();
      },
      onDestroy(el) {
        updateEditor(elemId);
      }

    });

  }
  if (type == 'img') {

    xDraggables = xElem.drag({
      proportions: true,
      snap: {
        x: 5,
        y: 5,
        angle: 1.875
      },
      onInit() {
        updateEditor(elemId);
        updateDimensions(elemId);
        updateIndex(elemId);
      },
      onMove({
        clientX,
        clientY,
        dx,
        dy,
        transform
      }) {
        elemMove(elemId, transform, dx, dy);
      },
      onResize({
        clientX,
        clientY,
        dx,
        dy,
        width,
        height
      }) {
        elemResize(elemId);
      },
      onRotate({
        clientX,
        clientY,
        delta,
        transform
      }) {
        setGuides(elemId);
      },
      onDrop({
        clientX,
        clientY
      }) {
        updateEditor(elemId);
        $('.guide').remove();
        disableMultiSelect();
      },
      onDestroy(el) {
        updateEditor(elemId);
      }

    });

  }

  controlsMaster = xDraggables[0].storage.controls;
  controlsMaster.setAttribute('attatched', elemId);
  controlsMaster.setAttribute('type', type);

  var node = document.createElement("a");
  var textnode = document.createTextNode("x");
  node.appendChild(textnode);
  controlsMaster.appendChild(node);

  if (type == 'line') {
    $('.sjx-controls[attatched=' + elemId + ']').find('.sjx-hdl').not('.sjx-hdl-mr, .sjx-hdl-ml, .sjx-rotator').remove();
  }
  if (type == 'icon') {
    $('.sjx-controls[attatched=' + elemId + ']').find('.sjx-hdl, .sjx-normal').remove();
  }

  elemIndex = $('#' + elemId).css('z-index');
  $('.sjx-controls[attatched=' + elemId + ']').css('z-index', elemIndex);
  $('.sjx-controls[attatched=' + elemId + ']').addClass('active');

}

function elemMove(elemId, transform, dx, dy) {
  // update the top and left positions to always snap to multiple of 5
  matrix = transform;

  leftPos = Math.ceil(matrix[4] / 5) * 5;
  topPos = Math.ceil(matrix[5] / 5) * 5;
  newVal = 'matrix(' + matrix[0] + ',' + matrix[1] + ',' + matrix[2] + ',' + matrix[3] + ',' + leftPos + ',' + topPos + ')';

  // set both the element and its controls to the new values
  $('#' + elemId).css('transform', newVal);
  $('.sjx-controls[attatched=' + elemId + ']').css('transform', newVal);

  //find each element with clone class for multi drag
  $('.cloneItem').each(function () {

    cloneId = $(this).attr('id');

    trans = $('#' + cloneId).css('transform');
    values = $.trim(trans.split('(').pop().split(')')[0]);
    matrixVals = values.split(',');

    curLeft = $(this).attr('matrix-left');
    curTop = $(this).attr('matrix-top');

    newLeft = Number(curLeft) + Number(dx);
    newTop = Number(curTop) + Number(dy);

    newVal = 'matrix(' + matrixVals[0] + ',' + matrixVals[1] + ',' + matrixVals[2] + ',' + matrixVals[3] + ',' + newLeft + ',' + newTop + ')';

    $(this).css('transform', newVal);
    $('.sjx-controls[attatched=' + cloneId + ']').css('transform', newVal);
  });

  if (!$('#' + elemId).hasClass('cloneItem')) {
    setGuides(elemId);
  }

  updateDimensions(elemId);
}

function elemResize(elemId) {
  // update width and height to always snap to multiple of 5
  width = $('#' + elemId).css('width').slice(0, -2);
  height = $('#' + elemId).css('height').slice(0, -2);

  newW = Math.ceil(width / 5) * 5;
  newH = Math.ceil(height / 5) * 5;

  // set both the element and its controls to the new values
  $('#' + elemId).css({
    width: newW,
    height: newH
  });
  $('.sjx-controls[attatched=' + elemId + ']').css({
    width: newW,
    height: newH
  });

  disableMultiSelect();
  setGuides(elemId);
  updateDimensions(elemId);
}