import Editor, { EditorProps, Monaco, loader } from '@monaco-editor/react';
import React, { ChangeEvent, useRef, useState } from 'react';
import './Panel.scss';
import * as monaco from 'monaco-editor';
import * as editorWorker from 'monaco-editor/esm/vs/editor/editor.worker.js';
import * as jsonWorker from 'monaco-editor/esm/vs/language/json/json.worker.js';
import * as cssWorker from 'monaco-editor/esm/vs/language/css/css.worker.js';
import * as htmlWorker from 'monaco-editor/esm/vs/language/html/html.worker.js';
import * as tsWorker from 'monaco-editor/esm/vs/language/typescript/ts.worker.js';

import * as prettier from 'prettier/standalone';
import * as parserBabel from 'prettier/parser-babel';

self.MonacoEnvironment = {
  getWorker(_: any, label: string) {
    if (label === 'json') {
      return new jsonWorker();
    }
    if (label === 'css' || label === 'scss' || label === 'less') {
      return new cssWorker();
    }
    if (label === 'html' || label === 'handlebars' || label === 'razor') {
      return new htmlWorker();
    }
    if (label === 'typescript' || label === 'javascript') {
      return new tsWorker();
    }
    return new editorWorker();
  },
};
// loader.config({ paths: { vs: 'https://www.unpkg.com/monaco-editor/min/vs', } });
loader.config({ paths: { vs: '/monaco-editor/min/vs' } });
type Lang = 'handlebars' | 'javascript';
const Panel: React.FC = () => {
  const monacoRef = useRef<EditorProps | null>(null);
  const [lang, setLang] = useState<Lang>('handlebars');
  const handleEditorDidMount = (editor: any, monaco: Monaco) => {
    monacoRef.current = editor;
    editor.addAction({
      id: 'format-document',
      label: 'Format Document',
      keybindings: [monaco.KeyMod.CtrlCmd | monaco.KeyCode.KeyF],
      run: function (editor: any) {
        const model = editor.getModel();
        const fullRange = model.getFullModelRange();
        const formattedValue = formatDocument(model.getValue());
        editor.executeEdits('format-document', [
          {
            range: fullRange,
            text: formattedValue,
            forceMoveMarkers: true,
          },
        ]);
      },
    });

    const actionsFormat: any = Array.from(
      (monacoRef as any).current['_actions']
    )?.find((a: any) => a[0] === 'editor.action.formatDocument');
    if (actionsFormat) {
      actionsFormat[1]._run();
    }
  };
  function formatDocument(value: string) {
    // Call your preferred formatting logic, e.g., using Prettier
    return prettier.format(value, {
      plugins: [parserBabel],
      tabWidth: 2,
      useTabs: false,
      singleQuote: false,
      printWidth: 80,
      embeddedLanguageFormatting: 'auto',
    });
  }

  const handleEditorWillMount = (monaco: any) => {
    monaco.languages.registerCompletionItemProvider('handlebars', {
      provideCompletionItems: function () {
        const suggestions = [
          {
            label: '{{#if condition}}{{/}}',
            kind: monaco.languages.CompletionItemKind.Snippet,
            documentation: 'Conditional logic',
            insertText: '{{#if condition}}{{/}}',
          },
          {
            label: '.add',
            kind: monaco.languages.CompletionItemKind.Snippet,
            documentation: 'Add two numbers',
            insertText: 'add',
          },
          {
            label: '.answers',
            kind: monaco.languages.CompletionItemKind.Snippet,
            documentation: 'Answers information',
            insertText: 'answers',
          },
          {
            label: '.color',
            kind: monaco.languages.CompletionItemKind.Snippet,
            documentation: 'Design color value',
            insertText: 'color',
          },
          {
            label: '.development.commit',
            kind: monaco.languages.CompletionItemKind.Snippet,
            documentation: 'Development commit information',
            insertText: 'development.commit',
          },
          {
            label: '.date',
            kind: monaco.languages.CompletionItemKind.Snippet,
            documentation: 'Format date value',
            insertText: 'date date format',
          },
          {
            label: '.message',
            kind: monaco.languages.CompletionItemKind.Snippet,
            documentation: 'Alert message',
            insertText: 'message',
          },
          {
            label: '.multiply',
            kind: monaco.languages.CompletionItemKind.Snippet,
            documentation: 'Multiply two numbers',
            insertText: 'multiply',
          },
          {
            label: '.now.plusDays',
            kind: monaco.languages.CompletionItemKind.Snippet,
            documentation: 'Add days to current date',
            insertText: 'now.plusDays days',
          },
          {
            label: '.object',
            kind: monaco.languages.CompletionItemKind.Snippet,
            documentation: 'Insight object information',
            insertText: 'object',
          },
          {
            label: '.state',
            kind: monaco.languages.CompletionItemKind.Snippet,
            documentation: 'State information',
            insertText: 'state',
          },
          {
            label: '.subtract',
            kind: monaco.languages.CompletionItemKind.Snippet,
            documentation: 'Subtract two numbers',
            insertText: 'subtract',
          },
          {
            label: 'issue.comments.first.body',
            kind: monaco.languages.CompletionItemKind.Snippet,
            documentation: 'Body of the first comment on the issue',
            insertText: 'issue.comments.first.body',
          },
          {
            label: 'issue.comments.last.body',
            kind: monaco.languages.CompletionItemKind.Snippet,
            documentation: 'Body of the last comment on the issue',
            insertText: 'issue.comments.last.body',
          },
          {
            label: 'issue.comments.reverse',
            kind: monaco.languages.CompletionItemKind.Snippet,
            documentation: 'Reverse order of comments on the issue',
            insertText: 'issue.comments.reverse',
          },
          {
            label: 'issue.comments.size',
            kind: monaco.languages.CompletionItemKind.Snippet,
            documentation: 'Number of comments on the issue',
            insertText: 'issue.comments.size',
          },
          {
            label: 'issue.description',
            kind: monaco.languages.CompletionItemKind.Snippet,
            documentation: 'Jira issue description',
            insertText: 'issue.description',
          },
          {
            label: 'issue.fields.customfield_',
            kind: monaco.languages.CompletionItemKind.Snippet,
            documentation: 'Custom text field value',
            insertText: 'issue.fields.customfield_',
          },
          {
            label: 'issue.key',
            kind: monaco.languages.CompletionItemKind.Snippet,
            documentation: 'Jira issue key',
            insertText: 'issue.key',
          },
          {
            label: 'issue.properties."proforma.forms.i1"',
            kind: monaco.languages.CompletionItemKind.Snippet,
            documentation: 'Form',
            insertText: 'issue.properties."proforma.forms.i1"',
          },
          {
            label: 'issue.summary',
            kind: monaco.languages.CompletionItemKind.Snippet,
            documentation: 'Jira issue summary',
            insertText: 'issue.summary',
          },
          {
            label: '.json.toString',
            kind: monaco.languages.CompletionItemKind.Snippet,
            documentation: 'Convert JSON to string',
            insertText: 'json.toString jsonObject',
          },
          {
            label: '.now',
            kind: monaco.languages.CompletionItemKind.Snippet,
            documentation: 'Current date and time',
            insertText: 'now',
          },
          {
            label: '.project.key',
            kind: monaco.languages.CompletionItemKind.Snippet,
            documentation: 'Jira project key',
            insertText: 'project.key',
          },
          {
            label: 'project.lead.displayName',
            kind: monaco.languages.CompletionItemKind.Snippet,
            documentation: 'Jira project lead display name',
            insertText: 'project.lead.displayName',
          },
          {
            label: 'project.name',
            kind: monaco.languages.CompletionItemKind.Snippet,
            documentation: 'Jira project name',
            insertText: 'project.name',
          },
          {
            label: 'security.level',
            kind: monaco.languages.CompletionItemKind.Snippet,
            documentation: 'Security level of the issue',
            insertText: 'security.level',
          },
          {
            label: '.toLowerCase',
            kind: monaco.languages.CompletionItemKind.Snippet,
            documentation: 'Convert text to lowercase',
            insertText: 'toLowerCase',
          },
          {
            label: '.toUpperCase',
            kind: monaco.languages.CompletionItemKind.Snippet,
            documentation: 'Convert text to uppercase',
            insertText: 'toUpperCase',
          },
          {
            label: '.displayName',
            kind: monaco.languages.CompletionItemKind.Snippet,
            documentation: 'Jira user display name',
            insertText: 'displayName',
          },
          {
            label: '.emailAddress',
            kind: monaco.languages.CompletionItemKind.Snippet,
            documentation: 'Jira user email address',
            insertText: 'emailAddress',
          },
          {
            label: '.timeZone',
            kind: monaco.languages.CompletionItemKind.Snippet,
            documentation: 'Jira user time zone',
            insertText: 'timeZone',
          },
          {
            label: '.format("")',
            kind: monaco.languages.CompletionItemKind.Snippet,
            documentation: 'Conditional logic',
            insertText: 'format("")',
          },
        ];
        return { suggestions: suggestions };
      },
    });
  };

  const options: EditorProps['options'] = {
    formatOnPaste: true,
    formatOnType: true,
    suggestSelection: 'recentlyUsedByPrefix',
    wordBasedSuggestions: 'currentDocument',
    minimap: {
      enabled: false,
    },
    quickSuggestions: true,
    parameterHints: {
      enabled: true,
      cycle: true,
    },
    snippetSuggestions: 'inline',
  };
  console.log('lang', lang);
  return (
    <div>
      <select
        className="select-lang"
        onChange={(e: ChangeEvent<HTMLSelectElement>) =>
          setLang(e.target.value as Lang)
        }
      >
        <option value="handlebars">Handlebars</option>
        <option value="javascript">JavaScript</option>
      </select>
      <Editor
        height="100vh"
        className="container"
        language={lang}
        theme="vs-dark"
        beforeMount={handleEditorWillMount}
        onMount={handleEditorDidMount}
        options={options}
        onChange={(value, event) => {
          const actionsFormat: any = Array.from(
            (monacoRef as any).current['_actions']
          )?.find((a: any) => a[0] === 'editor.action.formatDocument');
          if (actionsFormat) {
            actionsFormat[1]._run();
          }
        }}
      />
    </div>
  );
};

export default Panel;
