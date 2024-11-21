import { CheckCircleOutlined, CodeOutlined } from '@ant-design/icons';
import type { MenuProps } from 'antd';
import { Dropdown, Space } from 'antd';
import React from 'react';

export interface DropDownItem {
  label: string;
  value: string;
}

interface DropdownSettingsProps {
  onLangSelected: (lang: string) => void;
  langs: DropDownItem[];
  langSelected: string;
  onButtonSaveClick: () => void;
}
const DropdownSettings = ({
  onLangSelected,
  onButtonSaveClick,
  langs,
  langSelected,
}: DropdownSettingsProps) => {
  const items: MenuProps['items'] = langs.map((lang) => ({
    key: lang.value,
    label: lang.label,
    icon:
      lang.value === langSelected ? <CheckCircleOutlined /> : <CodeOutlined />,
    disabled: lang.value === langSelected,
  }));

  const menuProps: MenuProps = {
    items,
    onClick: (data) => {
      onLangSelected(data.key);
    },
  };

  return (
    <Space wrap>
      <Dropdown.Button
        menu={menuProps}
        onClick={onButtonSaveClick}
        trigger={['click', 'hover']}
      >
        Save
      </Dropdown.Button>
    </Space>
  );
};

export default DropdownSettings;
