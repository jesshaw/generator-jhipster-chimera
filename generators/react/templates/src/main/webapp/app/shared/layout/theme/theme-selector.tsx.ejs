import './theme-selector.css';
import React from 'react';
import { Sidebar } from 'primereact/sidebar';
import { Dispatch, SetStateAction, useState, useEffect } from 'react';
import { Button } from 'primereact/button';
import { RadioButton, RadioButtonChangeEvent } from 'primereact/radiobutton';
import { useTheme } from './use-theme';
import { LocaleMenu } from '../menus';
import { Translate, Storage } from 'react-jhipster';
import { useAppDispatch } from 'app/config/store';
import { setLocale } from 'app/shared/reducers/locale';
import { MegaMenu } from 'primereact/megamenu';
import { MenuItem } from 'primereact/menuitem';
import { LocaleDropdown } from '../menus/locale-dropdown';

const ThemeSelector = ({
  currentLocale,
  visible,
  setVisible,
}: {
  currentLocale: string;
  visible: boolean;
  setVisible: Dispatch<SetStateAction<boolean>>;
}) => {
  const { theme, handleChangeTheme } = useTheme();

  const themes = [
    {
      name: 'blue',
      bgColor: 'bg-blue-500',
    },
    {
      name: 'pink',
      bgColor: 'bg-pink-500',
    },
    {
      name: 'amber',
      bgColor: 'bg-amber-500',
    },
    {
      name: 'cyan',
      bgColor: 'bg-cyan-500',
    },
    {
      name: 'green',
      bgColor: 'bg-green-500',
    },
    {
      name: 'indigo',
      bgColor: 'bg-indigo-500',
    },
    {
      name: 'purple',
      bgColor: 'bg-purple-500',
    },
    {
      name: 'teal',
      bgColor: 'bg-teal-500',
    },
  ];

  const [fontSize, setFontSize] = useState<number>(14);
  const handFontSize = (size: number) => {
    if (size > 11 && size < 17) {
      setFontSize(size);
      document.documentElement.style.fontSize = `${size}px`;
    }
  };

  const currentColorScheme = theme.split('/')[0];
  const currentTheme = theme.split('/')[1];

  // 主题
  const handleTheme = (newTheme: string) => {
    let realNewTheme = theme.replace(currentTheme, newTheme);
    handleChangeTheme(realNewTheme);
  };

  // 配色方案
  const handleColorScheme = (newScheme: string) => {
    let realNewTheme = theme.replace(currentColorScheme, newScheme);
    handleChangeTheme(realNewTheme);
  };

  const dispatch = useAppDispatch();
  const handleLocaleChange = event => {
    const langKey = event.target.value;
    Storage.session.set('locale', langKey);
    dispatch(setLocale(langKey));
  };

  useEffect(() => {
    handFontSize(fontSize);
  }, []); // 空 只执行一次

  return (
    <div>
      <Button icon="pi pi-palette" rounded text severity="secondary" aria-label="Bookmark" onClick={() => setVisible(true)} />

      <Sidebar position="right" visible={visible} onHide={() => setVisible(false)}>
        <h5 className="my-6">
          <Translate contentKey="global.menu.language">Language</Translate>
        </h5>
        <div>
          <LocaleDropdown currentLocale={currentLocale} onClick={handleLocaleChange} />
        </div>

        <h5 className="my-6">
          <Translate contentKey="global.menu.ui.themes">Themes</Translate>
        </h5>
        <div className="grid w-48 grid-cols-4 gap-1">
          {themes.map((t, index) => {
            return (
              <div key={index}>
                <button className={`h-8 w-8 cursor-pointer rounded-full border-0 ${t.bgColor}`} onClick={e => handleTheme(t.name)}>
                  {t.name === currentTheme && <i className="pi pi-check text-white"></i>}
                </button>
              </div>
            );
          })}
        </div>

        <h5 className="my-6">
          <Translate contentKey="global.menu.ui.scale">Scale</Translate>
        </h5>
        <div className="flex flex-wrap items-center gap-2">
          <Button icon="pi pi-minus" rounded text onClick={() => handFontSize(fontSize - 1)} />
          <div className="flex flex-wrap gap-1">
            {[...Array(5)].map((_, index) => (
              <i
                key={index + 12}
                className={`pi pi-circle-fill ${index + 12 == fontSize ? 'text-lxm-primary' : 'text-lxm-surface-border'} `}
              ></i>
            ))}
          </div>
          <Button icon="pi pi-plus" rounded text onClick={() => handFontSize(fontSize + 1)} />
        </div>

        <h5 className="my-6">
          <Translate contentKey="global.menu.ui.colorScheme">Color Scheme</Translate>
        </h5>
        <div className="flex flex-wrap gap-8">
          <div className="align-items-center flex">
            <RadioButton
              inputId="ingredient1"
              name="light"
              value="light"
              onChange={(e: RadioButtonChangeEvent) => handleColorScheme(e.value)}
              checked={currentColorScheme === 'light'}
            />
            <label htmlFor="ingredient1" className="ml-2">
              <Translate contentKey="global.menu.ui.colorScheme.light">Light</Translate>
            </label>
          </div>
          <div className="align-items-center flex">
            <RadioButton
              inputId="ingredient2"
              name="dark"
              value="dark"
              onChange={(e: RadioButtonChangeEvent) => handleColorScheme(e.value)}
              checked={currentColorScheme === 'dark'}
            />
            <label htmlFor="ingredient2" className="ml-2">
              <Translate contentKey="global.menu.ui.colorScheme.dark">Dark</Translate>
            </label>
          </div>
        </div>
      </Sidebar>
    </div>
  );
};

export default ThemeSelector;
