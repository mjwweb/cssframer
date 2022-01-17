<?php
    require "header.php";
   ?>

<div class="topBar">
  <div class="logoWrap">
    <img id="logoImg" src="images/css3Logo.png" />
    <span class="logoTxt">Css Framer</span>
  </div>
  <button class="resetAb">Reset</button>
</div>

<div id="rulerAxis">

</div>

<div id="addElemsWrap">
  <button class="addElemBtns clone" id="addDivBtn">
    <div></div>
  </button>
  <button class="addElemBtns" id="addLineBtn">
    <div></div>
  </button>
  <button class="addElemBtns" id="addTxtBtn"></button>
  <button class="addElemBtns" id="addBtnBtn">
    <div>Button</div>
  </button>
  <button class="addElemBtns" id="addInptBtn">
    <div>Input</div>
  </button>
  <button class="addElemBtns" id="addImgBtn"><i class="fas fa-image"></i></button>
  <input id="fileInpt" type="file" />
</div>

<div class="boxCloner"></div>
<div class="txtCloner">Lorem ipsum dolor sit amet, consectetur adipiscing elit. Integer mollis risus a sapien volutpat
  scelerisque eu eget quam. Sed sed erat rhoncus elit ornare mattis eu a quam.</div>
<div class="imgCloner"></div>
<div class="lineCloner"></div>
<div class="btnCloner">
  <p>Button</p>
</div>
<div class="iconCloner"></div>

<div class="window-wrap">
  <div id="leftBar">

    <div id="ab-controls">
      <p id="abHdr">Artboard</p>
      <div id="ab-dims-wrap">
        <div class="ab-inpt-w">
          <span class="ab-inpt-lbl">W:</span>
          <input id="ab-w-inpt" />
          <span class="ab-inpt-lbl">px</span>
        </div>
        <div class="ab-inpt-w">
          <span class="ab-inpt-lbl">H:</span>
          <input id="ab-h-inpt" />
          <span class="ab-inpt-lbl">px</span>
        </div>
      </div>
      <div id="ab-clrPick"></div>
      <button id="arangeAbBtn">Center and Arrange</button>

      <div style="display: none;" id="ovStngsWr">

        <div id="abOvLbl">
          <p>Hide Overflow</p>
        </div>

        <div id="abOvWrap">
          <input type="checkbox" class="switcht" id="abOvSwitch" />
        </div>

      </div>

    </div>

    <div id="controlsWrap">

      <div id="msrInptWrap">

        <div class="pos-inpt-wrap">

          <div class="width-inpt-wrap">
            <div class="msr-label-wrap">
              <label class="msr-label">Width:</label>
            </div>
            <div class="spinner-wrap">
              <input value="0" type="text" class="msrInpt msrInptDim" id="width-inpt" />
              <div class="spinner-btns-wrap">
                <div class="sp-btn sp-btn-dim spinner-btn-up" type="none" input="#width-inpt" action="up"><img
                    class="upSpnIcon" src="images/upSpinner.png" /></div>
                <div class="sp-btn sp-btn-dim spinner-btn-dwn" type="none" input="#width-inpt" action="down"><img
                    class="dwnSpnIcon" src="images/downSpinner.png" /></div>
              </div>
            </div>
          </div>

          <div class="height-inpt-wrap">
            <div class="msr-label-wrap">
              <label class="msr-label">Height:</label>
            </div>
            <div class="spinner-wrap">
              <input value="0" type="text" class="msrInpt msrInptDim" id="height-inpt" />
              <div class="spinner-btns-wrap">
                <div class="sp-btn sp-btn-dim spinner-btn-up" type="none" input="#height-inpt" action="up"><img
                    class="upSpnIcon" src="images/upSpinner.png" /></div>
                <div class="sp-btn sp-btn-dim spinner-btn-dwn" type="none" input="#height-inpt" action="down"><img
                    class="dwnSpnIcon" src="images/downSpinner.png" /></div>
              </div>
            </div>
          </div>

        </div>

        <div class="dim-inpt-wrap">

          <div class="x-inpt-wrap">
            <div class="msr-label-wrap">
              <label class="msr-label">Top:</label>
            </div>
            <div class="spinner-wrap">
              <input value="0" type="text" class="msrInpt msrInptDim" id="x-inpt" />
              <div class="spinner-btns-wrap">
                <div class="sp-btn sp-btn-dim spinner-btn-up" type="none" input="#x-inpt" action="up"><img
                    class="upSpnIcon" src="images/upSpinner.png" /></div>
                <div class="sp-btn sp-btn-dim spinner-btn-dwn" type="none" input="#x-inpt" action="down"><img
                    class="dwnSpnIcon" src="images/downSpinner.png" /></div>
              </div>
            </div>
          </div>

          <div class="y-inpt-wrap">
            <div class="msr-label-wrap">
              <label class="msr-label">Left:</label>
            </div>
            <div class="spinner-wrap">
              <input value="0" type="text" class="msrInpt msrInptDim" id="y-inpt" />
              <div class="spinner-btns-wrap">
                <div class="sp-btn sp-btn-dim spinner-btn-up" type="none" input="#y-inpt" action="up"><img
                    class="upSpnIcon" src="images/upSpinner.png" /></div>
                <div class="sp-btn sp-btn-dim spinner-btn-dwn" type="none" input="#y-inpt" action="down"><img
                    class="dwnSpnIcon" src="images/downSpinner.png" /></div>
              </div>
            </div>
          </div>

        </div>

      </div>

      <div id="msrInptWrap2">

        <div class="zIndxInptWrap">
          <div class="indx-label-wrap">
            <label class="indx-label">z-Index</label>
          </div>
          <div class="spinner-wrap">
            <input value="0" type="text" class="msrInpt index-inpt" id="zIndexInpt" />
            <div class="spinner-btns-wrap">
              <div class="sp-btn sp-btn-indx spinner-btn-up" type="box" input="#zIndexInpt" action="up"><img
                  class="upSpnIcon" src="images/upSpinner.png" /></div>
              <div class="sp-btn sp-btn-indx spinner-btn-dwn" type="box" input="#zIndexInpt" action="down"><img
                  class="dwnSpnIcon" src="images/downSpinner.png" /></div>
            </div>
          </div>
        </div>

        <div id="ca-btns-wrap">
          <label class="cntr-label">Center Justify:</label>
          <button id="ha-btn"><img src="images/horzCenter.png" /></button>
          <button id="va-btn"><img src="images/vertCenter.png" /></button>
        </div>

      </div>

      <div class="menus" id="bx-mnu">

        <div class="ct-clr-wr">

          <div>
            <p class="clr-label">Background Color</p>
            <input class="ct-clrPck" id="clr-pick-bx-bkg" />
          </div>

          <div style="margin-top: 15px;">
            <p class="clr-label">Border Color</p>
            <input class="ct-clrPck" id="clr-pick-ct-brdr" />
          </div>

        </div>

        <div class="bx-btm-inpts-wrap">

          <div class="">

          </div>

          <div class="msr-label-wrap">

          </div>

          <div class="spinner-btns-wrap2">
            <label class="bdr-labels">Border Size</label>
            <div class="sp-btn sp-btn-inline sp-il-dwn sp-btn-bdr " type="box" input="#brdrInpt-ct" action="down"><i
                class="fas fa-minus"></i></div><input value="0" type="text" class="bx-btm-inpts" id="brdrInpt-ct" />
            <div class="sp-btn sp-btn-inline sp-il-up sp-btn-bdr" type="box" input="#brdrInpt-ct" action="up"><i
                class="fas fa-plus"></i></div>
          </div>

          <div style="margin-left: 10px;" class="spinner-btns-wrap2">
            <label class="bdr-labels">Border Radius</label>
            <div class="sp-btn sp-btn-inline sp-il-dwn sp-btn-radius" type="box" input="#crnrsInpt-ct" action="down"><i
                class="fas fa-minus"></i></div><input value="0" type="text" class="bx-btm-inpts" id="crnrsInpt-ct" />
            <div class="sp-btn sp-btn-inline sp-il-up sp-btn-radius" type="box" input="#crnrsInpt-ct" action="up"><i
                class="fas fa-plus"></i></div>
          </div>

        </div>

      </div>

      <div class="menus" id="tx-mnu">

        <div class="tx-options-row1">
          <input id="font-picker" type="text" />
        </div>

        <input id="clr-pick-tx" value='#353535' />

        <div class="spinner-wrap fs-spinner-wrap">
          <input value="14" type="text" class="" id="fs-sel" />
          <div class="spinner-btns-wrap">
            <div class="sp-btn sp-btn-radius spinner-btn-up" type="txt" input="#fs-sel" action="up"><img
                class="upSpnIcon" src="images/upSpinner.png" /></div>
            <div class="sp-btn sp-btn-radius spinner-btn-dwn" type="txt" input="#fs-sel" action="down"><img
                class="dwnSpnIcon" src="images/downSpinner.png" /></div>
          </div>
        </div>

        <div class="tx-options-row2">
          <button id="boldBtn" action="bold" class="td-btns"><b>B</b></button>
          <button id="underlineBtn" action="underline" class="td-btns"><u>U</u></button>
          <button id="italicBtn" action="italic" class="td-btns"><i>I</i></button>
          <button action="left" class="ta-btns">
            <div class="ta-cl"></div>
            <div class="ta-ls"></div>
            <div class="ta-cl"></div>
            <div class="ta-ls"></div>
            <div class="ta-cl"></div>
          </button>
          <button action="center" class="ta-btns">
            <div class="ta-cl"></div>
            <div class="ta-cs"></div>
            <div class="ta-cl"></div>
            <div class="ta-cs"></div>
            <div class="ta-cl"></div>
          </button>
          <button action="right" class="ta-btns">
            <div class="ta-cl"></div>
            <div class="ta-rs"></div>
            <div class="ta-cl"></div>
            <div class="ta-rs"></div>
            <div class="ta-cl"></div>
          </button>
        </div>
        <textarea spellcheck="false" placeholder="Text to display.." class="tx-edit-box"></textarea>

      </div>

      <div class="menus" id="im-mnu">
        <div class="newImgUpld">
          <img id="upldIcon" src="images/uploadIcon.png" />
          <p id="iu-txt">Upload an Image</p>
        </div>
        <img id="im-holder-mnu" />
        <button id="imgUpldBtn">Choose a File</button>
        <input style="dispay: none;" id="fileInpt" type="file" />
      </div>

      <div class="menus" id="btn-mnu">
        <div class="ct-clr-wr">

          <div style="">
            <p class="clr-label">Fill</p>
            <input class="ct-clrPck" id="clr-pick-btn-bkg" />
          </div>

          <div style="margin-top: 15px;">
            <p class="clr-label">Border</p>
            <input class="ct-clrPck" id="clr-pick-btn-bdr" />
          </div>

          <div style="margin-top: 15px;">
            <p class="clr-label">Text</p>
            <input class="ct-clrPck" id="clr-pick-btn-txt" />
          </div>

        </div>
        <input type="text" id="btnTxtInpt" />
      </div>

      <div class="menus" id="line-mnu">

        <div class="ct-clr-wr">
          <div style="">
            <p class="clr-label">Color:</p>
            <input class="ct-clrPck" id="clr-pick-line" />
          </div>
        </div>

        <div class="bx-btm-inpts-wrap">
          <div class="msr-label-wrap">
            <label class="msr-label">Thickness</label>
          </div>
          <div class="spinner-wrap">
            <input value="0" type="text" class="msrInpt bx-btm-inpts" id="thckInpt-line" />
            <div class="spinner-btns-wrap">
              <div class="sp-btn sp-btn-radius spinner-btn-up" type="line" input="#thckInpt-line" action="up"><img
                  class="upSpnIcon" src="images/upSpinner.png" /></div>
              <div class="sp-btn sp-btn-radius spinner-btn-dwn" type="line" input="#thckInpt-line" action="down"><img
                  class="dwnSpnIcon" src="images/downSpinner.png" /></div>
            </div>
          </div>
        </div>

      </div>

      <div class="menus" id="icon-mnu">
        <input type="number" id="iconSizeInpt" />
      </div>

      <div id="runCssBtn"><img src="images/runIcon.png" />Run</div>
      <div id="editor">/*Click an element to add custom sytles*/</div>

    </div>

  </div>

  <div id="mainAbWrap">
    <div id="mainAb" class="gridBkg">
      <div class="artboard abTranslate" id="ab1">
        <img type="img" bs="0" style="transform: matrix(1, 0, 0, 1, 495, 325); width: 50px; z-index: 2; height: 50px;"
          id="d-image1" class="image element sjx-drag ui-selectee" src="svg/braces.svg" data-cx="25" data-cy="25"><img
          type="img" bs="0" style="width: 50px; z-index: 2; transform: matrix(1, 0, 0, 1, 125, 325); height: 50px;"
          id="d-image3" class="image element sjx-drag ui-selectee" src="svg/columns.svg" data-cx="25" data-cy="25"><img
          type="img" bs="0" style="transform: matrix(1, 0, 0, 1, 205, 50); width: 120px; z-index: 4; height: 120px;"
          id="d-image4" class="image element sjx-drag ui-selectee" src="svg/css.svg" data-cx="60" data-cy="60"
          matrix-left=" 205" matrix-top=" 40">
        <div type="box" bs="0"
          style="background-color: rgb(255, 255, 255); width: 350px; height: 370px; z-index: 1; border: 0px solid rgb(112, 112, 112); box-shadow: rgba(0, 0, 0, 0.1) 0px 0px 25px 10px; border-radius: 0px; transform: matrix(1, 0, 0, 1, 100, 300);"
          id="d-box8" class="box element sjx-drag ui-selectee" data-cx="175" data-cy="185" matrix-left=" 100"
          matrix-top=" 320"></div><img type="img" bs="0"
          style="transform: matrix(1, 0, 0, 1, 875, 325); width: 50px; z-index: 10; height: 50px;" id="image10"
          class="image element sjx-drag ui-selectee" src="svg/globe.svg" data-cx="25" data-cy="25">
        <div type="box" bs="0"
          style="background-color: rgb(255, 255, 255); width: 350px; height: 370px; z-index: 1; border: 0px solid rgb(112, 112, 112); box-shadow: rgba(0, 0, 0, 0.1) 0px 0px 25px 10px; border-radius: 0px; transform: matrix(1, 0, 0, 1, 475, 300);"
          id="d-box12" class="box element sjx-drag ui-selectee" data-cx="175" data-cy="185" matrix-left=" 475"
          matrix-top=" 305"></div>
        <div type="box" bs="0"
          style="background-color: rgb(255, 255, 255); width: 350px; height: 370px; z-index: 1; border: 0px solid rgb(112, 112, 112); box-shadow: rgba(0, 0, 0, 0.1) 0px 0px 25px 10px; border-radius: 0px; transform: matrix(1, 0, 0, 1, 850, 300);"
          id="d-box13" class="box element sjx-drag ui-selectee" data-cx="175" data-cy="185" matrix-left=" 850"
          matrix-top=" 305"></div>
        <div type="txt"
          style="transform: matrix(1, 0, 0, 1, 360, 40); width: 885px; height: 135px; font-size: 91px; color: rgb(112, 112, 112); z-index: 14; font-family: Michroma; font-weight: 400;"
          id="d-text14" class="text element sjx-drag ui-selectee" data-cx="442.5" data-cy="67.5" matrix-left=" 360"
          matrix-top=" 30">CSS Framer</div>
        <div type="txt"
          style="transform: matrix(1, 0, 0, 1, 205, 200); width: 890px; height: 60px; font-size: 17px; color: rgb(112, 112, 112); z-index: 15; text-align: center; font-family: Poppins; font-weight: 400;"
          id="d-text15" class="text element sjx-drag ui-selectee" data-cx="445" data-cy="30" matrix-left=" 205"
          matrix-top=" 190">Drag and drop any element on this artboard. You can reset it in the top right corner of the
          page.</div>
        <div type="txt"
          style="width: 300px; height: 45px; font-size: 25px; color: rgb(112, 112, 112); z-index: 22; font-family: Michroma; font-weight: 700; letter-spacing: 0.2px; transform: matrix(1, 0, 0, 1, 495, 385);"
          id="d-text16" class="text element sjx-drag ui-selectee" data-cx="150" data-cy="22.5">Real CSS</div>
        <div type="txt"
          style="width: 300px; height: 45px; font-size: 25px; color: rgb(112, 112, 112); z-index: 21; font-family: Michroma; font-weight: 700; letter-spacing: 0.2px; transform: matrix(1, 0, 0, 1, 115, 385);"
          id="d-text17" class="text element sjx-drag ui-selectee" data-cx="150" data-cy="22.5">Prototype</div>
        <div type="txt"
          style="width: 300px; height: 45px; font-size: 25px; color: rgb(112, 112, 112); z-index: 17; font-family: Michroma; font-weight: 700; letter-spacing: 0.2px; transform: matrix(1, 0, 0, 1, 870, 385);"
          id="d-text18" class="text element sjx-drag ui-selectee" data-cx="150" data-cy="22.5">Fully Native</div>
        <div type="txt" style="width: 300px;
  height: 200px;
  font-size: 18px;
  color: rgb(112, 112, 112);
  z-index: 19;
  line-height: 28px;
transform: matrix(1, 0, 0, 1, 120, 435);" id="text19" class="text element sjx-drag ui-selectee" data-cx="150"
          data-cy="100">Design low to high fidelity wireframes for websites and user interfaces. Easily drag in new new
          elements, write your own css, and test out any CSS properties in your current browser.</div>
        <div type="txt"
          style="width: 300px; height: 200px; font-size: 18px; color: rgb(112, 112, 112); z-index: 19; line-height: 28px; transform: matrix(1, 0, 0, 1, 495, 435);"
          id="text20" class="text element sjx-drag ui-selectee" data-cx="150" data-cy="100">Drag and drop elements, set
          background and border colors, change font types and more all while automatically updating your CSS code.</div>
        <div type="txt"
          style="width: 300px; height: 200px; font-size: 18px; color: rgb(112, 112, 112); z-index: 19; line-height: 28px; transform: matrix(1, 0, 0, 1, 875, 435);"
          id="text21" class="text element sjx-drag ui-selectee" data-cx="150" data-cy="100">Traditional design tools
          like
          Figma, Photoshop, and Adobe XD use SVG elements. We use real HTML and CSS on our artboard for a native browser
          look and feel.</div>
      </div>
    </div>
  </div>

  <div id="topRuler">
    <p class="msrUnits" id="msrLft">345px</p>
    <p class="msrUnits" id="msrRt">445px</p>
  </div>
  <div id="leftRuler">
    <p class="msrUnits" id="msrTp">345px</p>
    <p class="msrUnits" id="msrBt">445px</p>
  </div>

</div>

<div id="fa-wrap">
  <div id="fa-srch-wrap">
    <div id="fa-srchBar-wrap">
      <input placeholder="Search icons.." type="text" id="fa-srchBar" />
      <img src="images/srchIcon.png" />
    </div>
    <div class="icons-wrap">
      <div class="fa-row">
        <div class="fa-row-inner">
          <i class="icon fas fa-user"></i>
          <i class="icon fas fa-smile"></i>
          <i class="icon fas fa-backspace"></i>
        </div>
      </div>
      <div class="fa-row">
        <div class="fa-row-inner">
          <i class="icon fas fa-user"></i>
          <i class="icon fas fa-user"></i>
          <i class="icon fas fa-user"></i>
        </div>
      </div>
      <div class="fa-row">
        <div class="fa-row-inner">
          <i class="icon fas fa-user"></i>
          <i class="icon fas fa-user"></i>
          <i class="icon fas fa-user"></i>
        </div>
      </div>
      <div class="fa-row">
        <div class="fa-row-inner">
          <i class="icon fas fa-user"></i>
          <i class="icon fas fa-user"></i>
          <i class="icon fas fa-user"></i>
        </div>
      </div>
      <div class="fa-row">
        <div class="fa-row-inner">
          <i class="icon fas fa-user"></i>
          <i class="icon fas fa-user"></i>
          <i class="icon fas fa-user"></i>
        </div>
      </div>
      <div class="fa-row">
        <div class="fa-row-inner">
          <i class="icon fas fa-user"></i>
          <i class="icon fas fa-user"></i>
          <i class="icon fas fa-user"></i>
        </div>
      </div>
      <div class="fa-row">
        <div class="fa-row-inner">
          <i class="icon fas fa-user"></i>
          <i class="icon fas fa-user"></i>
          <i class="icon fas fa-user"></i>
        </div>
      </div>
      <div class="fa-row">
        <div class="fa-row-inner">
          <i class="icon fas fa-user"></i>
          <i class="icon fas fa-user"></i>
          <i class="icon fas fa-user"></i>
        </div>
      </div>
      <div class="fa-row">
        <div class="fa-row-inner">
          <i class="icon fas fa-user"></i>
          <i class="icon fas fa-user"></i>
          <i class="icon fas fa-user"></i>
        </div>
      </div>
      <div class="fa-row">
        <div class="fa-row-inner">
          <i class="icon fas fa-user"></i>
          <i class="icon fas fa-user"></i>
          <i class="icon fas fa-user"></i>
        </div>
      </div>
    </div>
  </div>
</div>

<div id="settingsMnuWr">

</div>

<body>

  </html>

  <script src="javascript.js"></script>
  <script src='js-menus.js'></script>
  <script src='js-propertyChanges.js'></script>
  <script src='js-artboards.js'></script>
  <script src='js-xDrag.js'></script>
  <script src='js-addElements.js'></script>