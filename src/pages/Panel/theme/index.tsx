import React, { ChangeEvent, useEffect, useState } from 'react';
import { getConfig, saveConfig } from '../utils';
import styles from './theme.module.scss';

export type ThemeType = 'light' | 'vs-dark';
type ButtonThemeProps = {
  onThemChange: (theme: ThemeType) => void;
};

const ButtonTheme = ({ onThemChange }: ButtonThemeProps) => {
  const [theme, setTheme] = useState<ThemeType>('vs-dark');

  const getTheme = async () => {
    const defaultTheme = await getConfig<string>('jira_smart_value_theme');
    setTheme((defaultTheme as ThemeType) || 'vs-dark');
    onThemChange(defaultTheme as ThemeType);
  };

  useEffect(() => {
    (async () => {
      await getTheme();
    })();
  }, []);

  const onChangeTheme = async (e: ChangeEvent<HTMLInputElement>) => {
    const newTheme = e.target.checked ? 'light' : 'vs-dark';
    setTheme(newTheme);
    onThemChange(newTheme);
    await saveConfig('jira_smart_value_theme', newTheme);
  };

  return (
    <div className={styles.container}>
      <div className={styles.switch}>
        <input
          checked={theme === 'light'}
          type="checkbox"
          className={styles.switch__input}
          id="theme"
          onChange={onChangeTheme}
        />
        <label className={styles.switch__label} htmlFor="theme">
          <span className={styles.switch__indicator}></span>
          <span className={styles.switch__decoration}></span>
        </label>
      </div>
    </div>
  );
};

export default ButtonTheme;
