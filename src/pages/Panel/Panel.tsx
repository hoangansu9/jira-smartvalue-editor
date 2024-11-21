import Editor, { EditorProps, Monaco, loader } from '@monaco-editor/react';
import { ConfigProvider, theme as antTheme, message } from 'antd';
import classNames from 'classnames';
import { editor } from 'monaco-editor';
import React, { useRef, useState } from 'react';
import DropdownSettings, { DropDownItem } from './dropdown';
import styles from './panel.module.scss';
import { suggestions } from './suggestions';
import ButtonTheme, { ThemeType } from './theme';
import { getConfig, saveConfig } from './utils';

loader.config({ paths: { vs: '/monaco-editor/vs' } });
const monacoLanguages: DropDownItem[] = [
  {
    label: 'Handlebars',
    value: 'handlebars',
  },
  {
    label: 'JSON',
    value: 'json',
  },
  {
    label: 'JavaScript',
    value: 'javascript',
  },
];

const Panel: React.FC = () => {
  const [currentText, setCurrentText] = useState('');
  const monacoRef = useRef<editor.IStandaloneCodeEditor | null>(null);
  const [language, setLanguage] = useState<DropDownItem>(monacoLanguages[0]);
  const [theme, setTheme] = useState<ThemeType>('vs-dark');

  const saveData = async () => {
    if (!chrome.storage?.sync) {
      return;
    }
    try {
      await saveConfig('jira_smart_values', currentText);
      message.success('Saved');
    } catch (error) {
      console.error(error);
    }
  };

  const getInitData = async (editor: any) => {
    const result: any = await getConfig('jira_smart_values');
    const text = result || '';
    editor?.setValue(text);
  };

  const handleEditorDidMount = async (editor: any, monaco: Monaco) => {
    await getInitData(editor);
    if (!editor || !editor?.current) {
      return;
    }
    monacoRef.current = editor;

    editor.addAction({
      id: 'format-document',
      label: 'Format Document',
      contextMenuOrder: 2,
      contextMenuGroupId: '1_modification',
      keybindings: [monaco.KeyMod.CtrlCmd | monaco.KeyCode.KeyF],
      run: function (editor: any) {
        editor.getAction('editor.action.formatDocument')?.run();
      },
    });

    const actionsFormat: any = Array.from(
      (monacoRef as any).current['_actions']
    )?.find((a: any) => a[0] === 'editor.action.formatDocument');
    if (actionsFormat) {
      actionsFormat[1]._run();
    }
  };

  const handleEditorWillMount = (monaco: any) => {
    const config = {
      triggerCharacters: ['.', ' '],
      provideCompletionItems: function () {
        const list = suggestions.map((i) => ({
          label: i.name,
          kind: monaco.languages.CompletionItemKind.Keyword,
          documentation: i.description,
          insertText: i.name,
        }));
        return { suggestions: list };
      },
    };
    monaco.languages.registerCompletionItemProvider('handlebars', config);
    monaco.languages.registerCompletionItemProvider('json', config);
  };

  const options: EditorProps['options'] = {
    formatOnPaste: true,
    formatOnType: true,
    wordWrap: 'on',
    codeActionsOnSaveTimeout: 500,
    suggestSelection: 'first',
    wordBasedSuggestions: 'currentDocument',
    minimap: {
      enabled: false,
    },
    acceptSuggestionOnEnter: 'smart',
  };

  const headerClass = classNames(styles.header, {
    [styles.dark]: theme === 'vs-dark',
    [styles.light]: theme === 'light',
  });

  const darkThemeToken = {
    algorithm: antTheme.darkAlgorithm,
    token: {
      colorBgContainer: '#1e1e1e',
      borderRadius: 3,
    },
  };
  const lightThemeToken = {
    algorithm: antTheme.defaultAlgorithm,
    token: { borderRadius: 3 },
  };

  const algorithm = theme === 'vs-dark' ? darkThemeToken : lightThemeToken;
  return (
    <ConfigProvider theme={algorithm}>
      <div>
        <div className={headerClass}>
          <ButtonTheme theme={theme} onThemChange={setTheme} />
          <DropdownSettings
            onButtonSaveClick={saveData}
            langs={monacoLanguages}
            langSelected={language.value}
            onLangSelected={(langKey) =>
              setLanguage(
                monacoLanguages.find((l) => l.value === langKey) ||
                  monacoLanguages[0]
              )
            }
          />
        </div>
        <Editor
          onChange={(value) => setCurrentText(value || '')}
          height="100vh"
          className="container"
          language={language.value}
          theme={theme}
          beforeMount={handleEditorWillMount}
          onMount={handleEditorDidMount}
          options={options}
        />
      </div>
    </ConfigProvider>
  );
};

export default Panel;
