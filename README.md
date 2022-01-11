![](https://badgen.net/badge/Editor.js/v2.0/blue)

# Question Answer Tool

Provides Question Answer Blocks for the [Editor.js](https://editorjs.io).

## Installation

### Install via NPM

Get the package

```shell
yarn add github.com/ScaleMeUp/editorjs-question-answer
```

Include module at your application

```javascript
const QuestionAnswer = require('@scalemeup/editorjs-question-answer');
```

## Usage

Add a new Tool to the `tools` property of the Editor.js initial config.

```javascript
var editor = EditorJS({
  ...
  
  tools: {
    ...
    questionAnswer: QuestionAnswer,
  },
  
  ...
});
```

Or init Question Answer Tool with additional settings

```javascript
var editor = EditorJS({
  ...
  
  tools: {
    ...
    questionAnswer: {
      class: QuestionAnswer,
      inlineToolbar: true,
      config: {
        answerPlaceholder: 'Enter an answer',
        questionPlaceholder: 'Enter a question',
        interviewerPlaceholder: 'Enter an interviewer name',
        intervieweePlaceholder: 'Enter an interviewee name',
      },
    },
  },
  
  ...
});
```

## Config Params

| Field                     | Type     | Description                        |
| ------------------------- | -------- | ---------------------------------- |
| answerPlaceholder         | `string` | Answer's placeholder string        |
| questionPlaceholder       | `string` | Question's placeholder string      |
| interviewerPlaceholder    | `string` | Interview's placeholder string     |
| intervieweePlaceholder    | `string` | Interviewee's placeholder string   |

## Tool's settings

![](https://capella.pics/0db5d4de-c431-4cc2-90bf-bb1f4feec5df.jpg)

You can choose alignment for the quote. It takes no effect while editing, but saved the «alignment» param.

## Output data

| Field         | Type     | Description                |
| ------------- | -------- | -------------------------- |
| interviewer   | `string` | interviewer's name         |
| question      | `string` | question from interviewer  |
| interviewee   | `string` | interviewee's name         |
| answer        | `string` | answer from interviewer    |


```json
{
    "type" : "quote",
    "data" : {
        "interviewer" : "Injun Joe",
        "question" : "I'm going to look for treasure. Do you want to come with me?",
        "interviewee" : "Tom Sawyer",
        "answer" : "Of course"
    }
}
```
