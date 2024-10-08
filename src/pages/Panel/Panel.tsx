import Editor, { EditorProps, Monaco, loader } from '@monaco-editor/react';
import * as editorWorker from 'monaco-editor/esm/vs/editor/editor.worker.js';
import * as cssWorker from 'monaco-editor/esm/vs/language/css/css.worker.js';
import * as htmlWorker from 'monaco-editor/esm/vs/language/html/html.worker.js';
import * as jsonWorker from 'monaco-editor/esm/vs/language/json/json.worker.js';
import * as tsWorker from 'monaco-editor/esm/vs/language/typescript/ts.worker.js';
import React, { ChangeEvent, useRef, useState } from 'react';

import * as parserBabel from 'prettier/parser-babel';
import * as prettier from 'prettier/standalone';
import './Panel.scss';
import { suggestions } from './suggestions';

// eslint-disable-next-line no-restricted-globals
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
        const list = suggestions.map((i) => ({
          label: i.name,
          kind: monaco.languages.CompletionItemKind.Snippet,
          documentation: i.description,
          insertText: i.name,
        }));
        return { suggestions: list };
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
