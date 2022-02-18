/**
 * Build styles
 */
require('./index.css').toString();

/**
 * @class Quote
 * @classdesc Quote Tool for Editor.js
 * @property {QuoteData} data - Tool`s input and output data
 * @propert {object} api - Editor.js API instance
 *
 * @typedef {object} QuoteData
 * @description Quote Tool`s input and output data
 * @property {string} text - quote`s text
 * @property {string} caption - quote`s caption
 * @property {'center'|'left'} alignment - quote`s alignment
 *
 * @typedef {object} QuoteConfig
 * @description Quote Tool`s initial configuration
 * @property {string} quotePlaceholder - placeholder to show in quote`s text input
 * @property {string} captionPlaceholder - placeholder to show in quote`s caption input
 * @property {'center'|'left'} defaultAlignment - alignment to use as default
 */
class QuestionAnswer {
  /**
   * Notify core that read-only mode is supported
   *
   * @returns {boolean}
   */
  static get isReadOnlySupported() {
    return true;
  }

  /**
   * Get Tool toolbox settings
   * icon - Tool icon's SVG
   * title - title to show in toolbox
   *
   * @returns {{icon: string, title: string}}
   */
  static get toolbox() {
    return {
      icon: '<svg width="20" height="20" viewBox="0 0 20 20" xmlns="http://www.w3.org/2000/svg"><path d="M17.9217 15.4929C18.6286 14.5304 18.9999 13.412 18.9999 12.2333C18.9999 10.3464 18.0214 8.59454 16.3705 7.50133C16.2183 5.82019 15.4333 4.26112 14.1209 3.05987C12.6696 1.73156 10.7441 1 8.69921 1C6.65428 1 4.72885 1.73156 3.27754 3.05991C1.80886 4.4041 1.00002 6.19629 1.00002 8.10633C1.00002 9.57544 1.47361 10.9683 2.37389 12.16L1.05128 15.4318C0.94402 15.6971 1.00825 16.0009 1.21374 16.2001C1.34768 16.3299 1.5241 16.3984 1.70332 16.3984C1.79905 16.3984 1.89559 16.3789 1.98678 16.3387L5.75907 14.6758C6.23266 14.8568 6.72055 14.9922 7.2197 15.0819C7.73097 15.9227 8.46025 16.6348 9.34682 17.1532C10.3366 17.7318 11.4794 18.041 12.6549 18.0499C12.6722 18.0512 12.6894 18.0525 12.707 18.0525C13.5197 18.0525 14.3072 17.9122 15.0521 17.6349L18.0132 18.9402C18.1044 18.9805 18.2009 19 18.2967 19C18.4759 19 18.6524 18.9315 18.7863 18.8016C18.9918 18.6025 19.056 18.2986 18.9487 18.0333L17.9217 15.4929ZM16.4648 15.641L16.996 16.955L15.3494 16.2292C15.1714 16.1507 14.9688 16.1495 14.7898 16.2258C14.1445 16.5012 13.4534 16.6423 12.7355 16.6459C12.726 16.6456 12.7166 16.6445 12.707 16.6445C11.3214 16.6445 10.0123 16.103 9.09774 15.2023C10.2573 15.1467 11.3939 14.8506 12.4072 14.336C12.7535 14.1602 12.8916 13.7369 12.7157 13.3907C12.5399 13.0445 12.1167 12.9064 11.7704 13.0822C10.8376 13.556 9.77555 13.8064 8.69921 13.8064C7.76391 13.8064 6.86346 13.6246 6.02299 13.266C5.84408 13.1896 5.64144 13.1908 5.46344 13.2693L3.00399 14.3535L3.83206 12.3051C3.93025 12.0622 3.88528 11.7848 3.7153 11.5854C2.85894 10.5807 2.40627 9.37768 2.40627 8.10633C2.40627 4.96326 5.22927 2.40625 8.69921 2.40625C12.1691 2.40625 14.9921 4.96326 14.9921 8.10633C14.9921 9.1215 14.6937 10.1181 14.129 10.9884C13.9176 11.3142 14.0104 11.7496 14.3362 11.9609C14.6619 12.1724 15.0973 12.0795 15.3087 11.7538C15.8098 10.9814 16.1446 10.1287 16.2995 9.24303C17.1231 10.0497 17.5937 11.1121 17.5937 12.2333C17.5937 13.2151 17.2437 14.1446 16.5816 14.9214C16.4116 15.1208 16.3666 15.3981 16.4648 15.641ZM9.36717 11.7226C9.36717 12.111 9.05239 12.4258 8.66405 12.4258C8.27572 12.4258 7.96093 12.111 7.96093 11.7226C7.96093 11.3343 8.27572 11.0195 8.66405 11.0195C9.05239 11.0195 9.36717 11.3343 9.36717 11.7226ZM11.3353 6.45455C11.3357 6.46433 11.3359 6.4741 11.3359 6.48398C11.3362 7.54242 10.7073 8.49495 9.73378 8.91053C9.53234 8.99656 9.40212 9.19944 9.40212 9.42736V9.47264C9.40212 9.86098 9.08733 10.1758 8.699 10.1758C8.31066 10.1758 7.99587 9.86098 7.99587 9.47264V9.42739C7.99587 8.63529 8.46131 7.92478 9.18165 7.61727C9.63 7.42585 9.9218 6.99058 9.92953 6.50447C9.92935 6.49772 9.92925 6.49094 9.92925 6.48415C9.92925 5.80582 9.37737 5.25393 8.699 5.25393C8.02066 5.2539 7.46874 5.80578 7.46874 6.48412C7.46874 6.87245 7.15396 7.18724 6.76562 7.18724C6.37729 7.18724 6.0625 6.87245 6.0625 6.48412C6.0625 5.03037 7.24522 3.84765 8.699 3.84765C10.1429 3.84765 11.3195 5.01438 11.3353 6.45455Z"/></svg>',
      title: 'Question Answer',
    };
  }

  /**
   * Empty Quote is not empty Block
   *
   * @public
   * @returns {boolean}
   */
  static get contentless() {
    return true;
  }

  /**
   * Allow to press Enter inside the Quote
   *
   * @public
   * @returns {boolean}
   */
  static get enableLineBreaks() {
    return true;
  }

  /**
   * Default placeholder for question field
   *
   * @public
   * @returns {string}
   */
  static get DEFAULT_QUESTION_PLACEHOLDER() {
    return 'Enter a question';
  }

  /**
   * Default placeholder for answer field
   *
   * @public
   * @returns {string}
   */
  static get DEFAULT_ANSWER_PLACEHOLDER() {
    return 'Enter an answer';
  }

  /**
   * Default placeholder for interviewer field
   *
   * @public
   * @returns {string}
   */
  static get DEFAULT_INTERVIEWER_PLACEHOLDER() {
    return 'Enter an interviewer name';
  }

  /**
   * Default placeholder for interviewee field
   *
   * @public
   * @returns {string}
   */
  static get DEFAULT_INTERVIEWEE_PLACEHOLDER() {
    return 'Enter an interviewee name';
  }

  /**
   * Tool`s styles
   *
   * @returns {{baseClass: string, wrapper: string, text: string, input: string, caption: string, questionWrapper: string, answerWrapper: string}}
   */
  get CSS() {
    return {
      baseClass: this.api.styles.block,
      wrapper: 'cdx-qa',
      text: 'cdx-qa__text',
      input: this.api.styles.input,
      caption: 'cdx-qa__caption',
      questionWrapper: 'cdx-qa-question-row',
      answerWrapper: 'cdx-qa-answer-row',
    };
  }

  /**
   * Render plugin`s main Element and fill it with saved data
   *
   * @param {{data: QuoteData, config: QuoteConfig, api: object}}
   *   data — previously saved data
   *   config - user config for Tool
   *   api - Editor.js API
   *   readOnly - read-only mode flag
   */
  constructor({ data, config, api, readOnly}) {
    this.api = api;
    this.readOnly = readOnly;

    this.answerPlaceholder = config.answerPlaceholder || QuestionAnswer.DEFAULT_ANSWER_PLACEHOLDER;
    this.questionPlaceholder = config.questionPlaceholder || QuestionAnswer.DEFAULT_QUESTION_PLACEHOLDER;
    this.interviewerPlaceholder = config.interviewerPlaceholder || QuestionAnswer.DEFAULT_INTERVIEWER_PLACEHOLDER;
    this.intervieweePlaceholder = config.intervieweePlaceholder || QuestionAnswer.DEFAULT_INTERVIEWEE_PLACEHOLDER;

    this.data = {
      interviewer: data.interviewer || '',
      question: data.question || '',
      interviewee: data.interviewee || '',
      answer: data.answer || '',
    };
  }

  /**
   * Create Quote Tool container with inputs
   *
   * @returns {Element}
   */
  render() {
    const container = this._make('div', [this.CSS.baseClass, this.CSS.wrapper]);

    const questionRow = this._makeRow(
        this.data.interviewer,
        this.data.question,
        this.CSS.questionWrapper,
        this.interviewerPlaceholder,
        this.questionPlaceholder
    );

    const answerRow = this._makeRow(
        this.data.interviewee,
        this.data.answer,
        this.CSS.answerWrapper,
        this.intervieweePlaceholder,
        this.answerPlaceholder,
    );

    container.appendChild(questionRow);
    container.appendChild(answerRow);

    return container;
  }

  /**
   * Extract Quote data from Quote Tool element
   *
   * @param {HTMLDivElement} quoteElement - element to save
   * @returns {QuoteData}
   */
  save(quoteElement) {
    let interviewer = quoteElement.querySelector(`.${this.CSS.questionWrapper} .${this.CSS.caption}`).innerHTML;
    let question = quoteElement.querySelector(`.${this.CSS.questionWrapper} .${this.CSS.text}`).innerText;
    let interviewee = quoteElement.querySelector(`.${this.CSS.answerWrapper} .${this.CSS.caption}`).innerHTML;
    let answer = quoteElement.querySelector(`.${this.CSS.answerWrapper} .${this.CSS.text}`).innerHTML;

    question = question.replace(/(\r\n|\r|\n)/g, '<br>');
    answer = answer.replace(/(\r\n|\r|\n)/g, '<br>');

    return Object.assign(this.data, {
      interviewer,
      question,
      interviewee,
      answer,
    });
  }

  /**
   * Helper for making Elements with attributes
   *
   * @param  {string} name                - new Element caption
   * @param  {string} value               - new Element value
   * @param  {string} wrapperClass        - new Element wrapper class
   * @param  {string} namePlaceholder     - new Element placeholder
   * @param  {string} valuePlaceholder    - new Element placeholder
   * @returns {Element}
   */
  _makeRow(name, value, wrapperClass, namePlaceholder, valuePlaceholder) {
    const author = this._make('div', [this.CSS.input, this.CSS.caption], {
      contentEditable: !this.readOnly,
      innerHTML: name,
    });
    author.dataset.placeholder = namePlaceholder;

    const phrase = this._make('div', [this.CSS.input, this.CSS.text], {
      contentEditable: !this.readOnly,
      innerHTML: value,
    });
    phrase.dataset.placeholder = valuePlaceholder;

    const row = this._make('div', [wrapperClass]);

    row.appendChild(author);
    row.appendChild(phrase);

    return row;
  }

  /**
   * Helper for making Elements with attributes
   *
   * @param  {string} tagName           - new Element tag name
   * @param  {Array|string} classNames  - list or name of CSS classname(s)
   * @param  {object} attributes        - any attributes
   * @returns {Element}
   */
  _make(tagName, classNames = null, attributes = {}) {
    const el = document.createElement(tagName);

    if (Array.isArray(classNames)) {
      el.classList.add(...classNames);
    } else if (classNames) {
      el.classList.add(classNames);
    }

    for (const attrName in attributes) {
      el[attrName] = attributes[attrName];
    }

    return el;
  }
}

module.exports = QuestionAnswer;
