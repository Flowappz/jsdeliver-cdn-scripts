// dropdown codes
window.formFieldsDropdown = () => {
  const selectors = {
    DROPDOWN_TOGGLER: "[form-field-dropdown-toggler]",
    SEARCHABLE_DROPDOWN_TOGGLER: "[form-field-searchable-dropdown-toggler]",
    DROPDOWN_INPUT: "[form-field-dropdown-input]",
    DROPDOWN_ITEM: "[form-field-dropdown-item]",
    DROPDOWN_LIST: "[form-field-dropdown-item-list]",
    DROPDOWN_TOGGLERS_SELECTED_VALUE: "[form-field-dropdown-toggler-selected-value]",
  };

  const togglerAttributes = {
    NAME: "dropdown-name",
  };

  const togglerItemAttributes = {
    INPUT_FIELD: "input-field",
    INPUT_DATA: "input-data",
  };

  /**
   * @type {{[k: string]: HTMLElement}}
   */
  const DROPDOWN_TOGGLERS = {};

  /**
   * @type {{[k: string]: HTMLElement}}
   */
  const SEARCHABLE_DROPDOWN_TOGGLERS = {};

  /**
   * @type {{[k: string]: HTMLElement[]}}
   */
  const SEARCHABLE_DROPDOWN_LIST_ITEMS = {};

  /**
   * @type {{[k: string]: HTMLElement}}
   */
  const DROPDOWN_TOGGLERS_SELECTED_VALUE = {};

  /**
   * @type {{[k: string]: HTMLElement}}
   */
  const DROPDOWN_LISTS = {};

  /**
   * @type {{[k: string]: HTMLInputElement}}
   */
  const DROPDOWN_INPUTS = {};

  function selectDropdownTogglers() {
    const togglers = document.querySelectorAll(selectors.DROPDOWN_TOGGLER);

    for (let toggler of togglers) {
      const name = toggler.getAttribute(togglerAttributes.NAME);
      DROPDOWN_TOGGLERS[name] = toggler;
    }

    const selectedValueLabelForRegularDropdown = document.querySelectorAll(selectors.DROPDOWN_TOGGLERS_SELECTED_VALUE);

    for (let selectedValueLabel of selectedValueLabelForRegularDropdown) {
      const name = selectedValueLabel.getAttribute(togglerAttributes.NAME);
      DROPDOWN_TOGGLERS_SELECTED_VALUE[name] = selectedValueLabel;
    }

    const searchableTogglers = document.querySelectorAll(selectors.SEARCHABLE_DROPDOWN_TOGGLER);

    for (let searchableToggler of searchableTogglers) {
      const name = searchableToggler.getAttribute(togglerAttributes.NAME);
      SEARCHABLE_DROPDOWN_TOGGLERS[name] = searchableToggler;
    }
  }

  function selectDropdownLists() {
    const dropdownLists = document.querySelectorAll(selectors.DROPDOWN_LIST);

    for (let list of dropdownLists) {
      const name = list.getAttribute(togglerAttributes.NAME);
      DROPDOWN_LISTS[name] = list;
    }
  }

  function selectDropdownInputs() {
    const inputs = document.querySelectorAll(selectors.DROPDOWN_INPUT);

    for (let input of inputs) {
      const name = input.getAttribute("name");
      DROPDOWN_INPUTS[name] = input;
    }
  }

  function getDropdownItems() {
    return document.querySelectorAll(selectors.DROPDOWN_ITEM);
  }

  function showHideListItemsOnTogglerClick() {
    for (let key in DROPDOWN_TOGGLERS) {
      const toggler = DROPDOWN_TOGGLERS[key];
      toggler.addEventListener("click", (e) => {
        e.stopPropagation();

        const name = toggler.getAttribute(togglerAttributes.NAME);

        if (name && DROPDOWN_LISTS[name].style.display !== "block") {
          DROPDOWN_LISTS[name].style.display = "block";
        } else if (name && DROPDOWN_LISTS[name].style.display === "block") {
          DROPDOWN_LISTS[name].style.display = "none";
        }

        Object.keys(DROPDOWN_TOGGLERS)
          .filter((k) => k !== key)
          .map((k) => (DROPDOWN_LISTS[k].style.display = "none"));
      });
    }
  }

  function setInputValueOnItemClick() {
    const dropdownItems = getDropdownItems();

    for (let item of dropdownItems) {
      item.addEventListener("click", () => {
        const data = item.getAttribute(togglerItemAttributes.INPUT_DATA);
        const inputName = item.getAttribute(togglerItemAttributes.INPUT_FIELD);

        if (inputName) {
          DROPDOWN_INPUTS[inputName].value = data;

          if (!SEARCHABLE_DROPDOWN_TOGGLERS[inputName]) DROPDOWN_TOGGLERS_SELECTED_VALUE[inputName].innerHTML = data;

          DROPDOWN_LISTS[inputName].style.display = "none";
        }
      });
    }
  }

  function makeTheDropdownsInteractive() {
    showHideListItemsOnTogglerClick();
    setInputValueOnItemClick();
  }

  selectDropdownTogglers();
  selectDropdownLists();
  selectDropdownInputs();

  makeTheDropdownsInteractive();
};

window.formFieldsDropdown();

// dropdown show hide
window.showHideDropdown = () => {
  const selectors = {
    DROPDOWN_TOGGLER: "[form-field-dropdown-toggler]",
    SEARCHABLE_DROPDOWN_TOGGLER: "[form-field-searchable-dropdown-toggler]",
    DROPDOWN_INPUT: "[form-field-dropdown-input]",
    DROPDOWN_ITEM: "[form-field-dropdown-item]",
    DROPDOWN_LIST: "[form-field-dropdown-item-list]",
    DROPDOWN_TOGGLERS_SELECTED_VALUE:
      "[form-field-dropdown-toggler-selected-value]",
    NO_DATA_FOUND: "[form-field-searchable-dropdown-no-item-found]",
  };

  const togglerAttributes = {
    NAME: "dropdown-name",
  };

  const togglerItemAttributes = {
    INPUT_FIELD: "input-field",
    INPUT_DATA: "input-data",
  };

  /**
   * @type {{[k: string]: HTMLElement}}
   */
  const DROPDOWN_TOGGLERS = {};

  /**
   * @type {{[k: string]: HTMLElement}}
   */
  const SEARCHABLE_DROPDOWN_TOGGLERS = {};

  /**
   * @type {{[k: string]: HTMLElement[]}}
   */
  const SEARCHABLE_DROPDOWN_LIST_ITEMS = {};

  /**
   * @type {{[k: string]: HTMLElement}}
   */
  const DROPDOWN_TOGGLERS_SELECTED_VALUE = {};

  /**
   * @type {{[k: string]: HTMLElement}}
   */
  const DROPDOWN_LISTS = {};

  /**
   * @type {{[k: string]: HTMLInputElement}}
   */
  const DROPDOWN_INPUTS = {};

  /**
   * @type {{[k: string]: HTMLInputElement}}
   */
  const NO_DATA_FOUND = {};

  const togglers = document.querySelectorAll(selectors.DROPDOWN_TOGGLER);

  for (let toggler of togglers) {
    const name = toggler.getAttribute(togglerAttributes.NAME);
    DROPDOWN_TOGGLERS[name] = toggler;
  }

  const selectedValueLabelForRegularDropdown = document.querySelectorAll(
    selectors.DROPDOWN_TOGGLERS_SELECTED_VALUE,
  );

  for (let selectedValueLabel of selectedValueLabelForRegularDropdown) {
    const name = selectedValueLabel.getAttribute(togglerAttributes.NAME);
    DROPDOWN_TOGGLERS_SELECTED_VALUE[name] = selectedValueLabel;
  }

  const searchableTogglers = document.querySelectorAll(
    selectors.SEARCHABLE_DROPDOWN_TOGGLER,
  );

  for (let searchableToggler of searchableTogglers) {
    const name = searchableToggler.getAttribute(togglerAttributes.NAME);
    SEARCHABLE_DROPDOWN_TOGGLERS[name] = searchableToggler;
  }

  const noDataMessages = document.querySelectorAll(selectors.NO_DATA_FOUND);
  for (let noData of noDataMessages) {
    const name = noData.getAttribute(togglerAttributes.NAME);
    NO_DATA_FOUND[name] = noData;
  }

  const inputs = document.querySelectorAll(selectors.DROPDOWN_INPUT);

  for (let input of inputs) {
    const name = input.getAttribute("name");
    DROPDOWN_INPUTS[name] = input;
  }

  const dropdownLists = document.querySelectorAll(selectors.DROPDOWN_LIST);

  for (let list of dropdownLists) {
    const name = list.getAttribute(togglerAttributes.NAME);
    DROPDOWN_LISTS[name] = list;
  }

  const items = document.querySelectorAll(selectors.DROPDOWN_ITEM);

  for (let item of items) {
    const inputName = item.getAttribute(togglerItemAttributes.INPUT_FIELD);

    if (!SEARCHABLE_DROPDOWN_TOGGLERS[inputName]) continue;

    if (inputName && SEARCHABLE_DROPDOWN_LIST_ITEMS[inputName]) {
      SEARCHABLE_DROPDOWN_LIST_ITEMS[inputName].push(item);
    } else if (inputName) SEARCHABLE_DROPDOWN_LIST_ITEMS[inputName] = [item];
  }

  function filterItemsOnInputChange() {
    const inputKeys = Object.keys(SEARCHABLE_DROPDOWN_TOGGLERS);

    for (let key of inputKeys) {
      DROPDOWN_INPUTS[key].addEventListener("click", (e) => {
        if (DROPDOWN_LISTS[key].style.display === "block") {
          e.stopPropagation();
        }
      });

      DROPDOWN_INPUTS[key].addEventListener("input", (e) => {
        const val = e.target.value;

        if (val.trim()) {
          let count = 0;
          for (let item of SEARCHABLE_DROPDOWN_LIST_ITEMS[key]) {
            if (item.innerText.toLowerCase().includes(val.toLowerCase())) {
              item.style.display = "block";
              count++;
            } else item.style.display = "none";
          }
          if (count === 0) {
            NO_DATA_FOUND[key].style.display = "block";
          } else NO_DATA_FOUND[key].style.display = "none";
        } else {
          for (let item of SEARCHABLE_DROPDOWN_LIST_ITEMS[key]) {
            item.style.display = "block";
          }
          if (NO_DATA_FOUND[key]) NO_DATA_FOUND[key].style.display = "none";
        }
      });
    }
  }

  function closest(e, t) {
    return !e ? false : e === t ? true : closest(e.parentNode, t);
  }

  const hideDropdownOnOutsideClick = () => {
    const lists = document.querySelectorAll("[form-field-dropdown-item-list]");
    for (let list of lists) {
      list.addEventListener("click", (e) => e.stopPropagation());
      const inputName = list.getAttribute(togglerAttributes.NAME);
      document.body.addEventListener("click", function (e) {
        if (!closest(e.target, list)) {
          list.style.display = "none";
          if (NO_DATA_FOUND[inputName])
            NO_DATA_FOUND[inputName].style.display = "none";
        }
      });
    }
  };


  filterItemsOnInputChange();
  hideDropdownOnOutsideClick();
};

window.showHideDropdown();

// date picker & range
window.formFieldsDateInput = async () => {
  const selectors = {
    DATE_PICKER: "[form-fields-pro-date-picker]",
    DATE_RANGE_PICKER: "[form-fields-pro-date-range-picker]",
  };

  /**
   *
   * @param {Element} element
   */
  const getCommonConfig = (element) => {
    const grid = Number(element.getAttribute("data-columns"));
    const calendars = Number(element.getAttribute("data-months"));
    const firstDay = Number(element.getAttribute("data-firstDay"));
    const format = element.getAttribute("data-format");
    const lang = element.getAttribute("data-language");
    const zIndex = element.getAttribute("data-zIndex");

    return {
      element,
      css: ["https://cdn.jsdelivr.net/npm/@easepick/bundle@1.2.1/dist/index.css"],
      grid,
      calendars,
      firstDay,
      format,
      lang,
      zIndex,
    };
  };

  /**
   *
   * @param {Element} element
   */
  const overrideCss = (element) => {
    const inputName = element.getAttribute("name");
    const datePicker = document.querySelector(`[name="${inputName}"] + span.easepick-wrapper`);

    const lightTheme = {
      selectedDateBackgroundColor: element.getAttribute("data-light-theme-selected-date-color"),
      todayColor: element.getAttribute("data-light-theme-today-color"),
    };

    const darkTheme = {
      selectedDateBackgroundColor: element.getAttribute("data-dark-theme-selected-date-color"),
      todayColor: element.getAttribute("data-dark-theme-today-color"),
    };

    const sheet = new CSSStyleSheet();
    sheet.replaceSync(`
    .calendar>.days-grid>.day.today {
      color: ${lightTheme.todayColor}
    }
    .calendar>.days-grid>.day.selected {
      background-color: ${lightTheme.selectedDateBackgroundColor}; 
    }
    .calendar>.days-grid>.day:hover {
      border-color: ${lightTheme.selectedDateBackgroundColor}
    }

    @media (prefers-color-scheme: dark) {
      .calendar>.days-grid>.day.today {
        color: ${darkTheme.todayColor}
      }
      .calendar>.days-grid>.day.selected {
        background-color: ${darkTheme.selectedDateBackgroundColor}; 
      }
      .calendar>.days-grid>.day:hover {
        border-color: ${darkTheme.selectedDateBackgroundColor}
      }
    }
    `);
    datePicker.shadowRoot.adoptedStyleSheets = [sheet];

    console.log("input: ", inputName, "datePicker: ", datePicker, datePicker.shadowRoot);
  };

  const initializeDatePickers = () => {
    const datePickers = document.querySelectorAll(selectors.DATE_PICKER);

    for (let datePicker of datePickers) {
      const config = getCommonConfig(datePicker);
      new easepick.create({
        ...config,
        date: new Date(),
      });
      overrideCss(datePicker);
    }
  };

  const initializeDateRangePickers = () => {
    const datePickers = document.querySelectorAll(selectors.DATE_RANGE_PICKER);

    for (let datePicker of datePickers) {
      const config = getCommonConfig(datePicker);
      console.log("config: ", config);
      new easepick.create({
        ...config,
        plugins: ["RangePlugin"],
        RangePlugin: {
          startDate: new Date(),
          endDate: new Date(),
        },
      });
      overrideCss(datePicker);
    }
  };

  const addDatePickerPackage = async () => {
    const res = await fetch("https://cdn.jsdelivr.net/npm/@easepick/bundle@1.2.1/dist/index.umd.min.js");
    if (res.ok) {
      const code = await res.text();
      const script = document.createElement("script");
      script.text = code;
      script.type = "text/javascript";

      script.setAttribute("form-fields-date-picker-package", "true");

      document.getElementsByTagName("head")[0].appendChild(script);
    }
  };

  await addDatePickerPackage();
  initializeDatePickers();
  initializeDateRangePickers();
};

window.formFieldsDateInput();

// user ip
window.formFieldsUserIp = async () => {
  const hideAdminAlert = () => {
    /**
     * @type {HTMLElement[]}
     */
    const alertElements = document.querySelectorAll(
      "[form-fields-pro-user-ip-admin-alert]",
    );

    for (let element of alertElements) element.style.display = "none";
  };

  const getUserIp = async () => {
    const BASE_URL = "https://9d87-103-51-53-92.ngrok-free.app";
    const res = await fetch(`${BASE_URL}/api/user-ip`);

    if (res.ok) {
      const { ip } = await res.json();
      return ip;
    } else return "";
  };

  const collectUserIp = async () => {
    const ip = await getUserIp();

    /**
     * @type {HTMLInputElement[]}
     */
    const inputElements = document.querySelectorAll(
      "[form-fields-pro-user-ip-input]",
    );

    for (let input of inputElements) {
      input.value = ip;
    }
  };

  hideAdminAlert();
  collectUserIp();
};

window.formFieldsUserIp();

// range slider
window.formFieldsNumberSlider = async () => {
  const additionalCss = `
  .rs-noscale .rs-scale {
    display: none;
  }
  .rs-scale {
    display: flex;
    justify-content: space-between;
    width: 100%;
  }
  .rs-scale span {
    display: none;
  }
  .rs-scale span:first-child, .rs-scale span:last-child {
    display: initial;
  }
  .rs-scale span::before {
    display: none;
  }
  .rs-container .rs-bg, .rs-container .rs-selected {
    height: 12px;
    border-radius: 13.5px;
  }

  .rs-container .rs-pointer {
    width: 22px;
    height: 22px;
    top: 1px;
    border-radius: 50%;
  }

  .rs-container .rs-selected {
    border: none;
  }

  .rs-container .rs-pointer::after, .rs-container .rs-pointer::before {
    display: none;
  }

  .rs-tooltip {
    min-width: fit-content;
    border: none;
  }


  .form-fields-dropdown-item:hover {
    background: lightgray;
  }
  [form-field-searchable-dropdown-no-item-found] .form-fields-dropdown-item:hover {
    background: initial;
  }
  `;

  const addNumberSliderCss = async () => {
    const res = await fetch(`https://slawomir-zaziablo.github.io/range-slider/css/rSlider.min.css`);

    if (res.ok) {
      const cssString = await res.text();
      const style = document.createElement("style");
      style.innerHTML = `${cssString} ${additionalCss}`;

      document.getElementsByTagName("head")[0].appendChild(style);
    }
  };

  const addNumberSliderPackage = async () => {
    const res = await fetch("https://slawomir-zaziablo.github.io/range-slider/js/rSlider.min.js");
    if (res.ok) {
      const code = await res.text();
      const script = document.createElement("script");
      script.text = code;
      script.type = "text/javascript";

      script.setAttribute("form-fields-number-slider-package", "true");

      document.getElementsByTagName("head")[0].appendChild(script);
    }
  };

  /**
   *
   * @param {Element} element
   */
  const overrideCss = (element) => {
    const inputName = element.getAttribute("name");

    const lightTheme = {
      sliderColor: element.getAttribute("data-light-theme-slider-color"),
    };

    const darkTheme = {
      sliderColor: element.getAttribute("data-dark-theme-slider-color"),
    };

    const sheet = new CSSStyleSheet();
    sheet.replaceSync(`
    [name="${inputName}"] + .rs-container .rs-selected {
      background: ${lightTheme.sliderColor}
    }
    [name="${inputName}"] + .rs-container .rs-tooltip {
      background: ${lightTheme.sliderColor}
    }

    @media (prefers-color-scheme: dark) {
      [name="${inputName}"] + .rs-container .rs-selected {
        background: ${darkTheme.sliderColor}
      }
      [name="${inputName}"] + .rs-container .rs-tooltip {
        background: ${darkTheme.sliderColor}
      }
    }
    `);

    document.adoptedStyleSheets.push(sheet);
  };

  /**
   *
   * @param {Element} sliderInput
   */
  const initializeRegularSlider = (sliderInput) => {
    const min = Number(sliderInput.getAttribute("data-min"));
    const max = Number(sliderInput.getAttribute("data-max"));
    const defaultValue = Number(sliderInput.getAttribute("data-default"));

    new rSlider({
      target: sliderInput,
      values: { min, max },
      set: [defaultValue],
      range: false,
      tooltip: true,
      scale: true,
      label: false,
      step: 1,
    });
  };

  /**
   *
   * @param {Element} sliderInput
   */
  const initializeRangeSlider = (sliderInput) => {
    const min = Number(sliderInput.getAttribute("data-min"));
    const max = Number(sliderInput.getAttribute("data-max"));
    const defaultmin = Number(sliderInput.getAttribute("data-min-default"));
    const defaultmax = Number(sliderInput.getAttribute("data-max-default"));

    new rSlider({
      target: sliderInput,
      values: { min, max },
      set: [defaultmin, defaultmax],
      range: true,
      tooltip: true,
      scale: true,
      label: false,
      step: 1,
    });
  };

  const initializeTheSliders = () => {
    const sliders = document.querySelectorAll(`[form-fields-pro-number-slider]`);

    for (let slider of sliders) {
      const rangeSlider = slider.getAttribute("allow-range");
      if (rangeSlider) initializeRangeSlider(slider);
      else initializeRegularSlider(slider);

      overrideCss(slider);
    }
  };

  await Promise.all([addNumberSliderCss(), addNumberSliderPackage()]);

  initializeTheSliders();
};

window.formFieldsNumberSlider();


