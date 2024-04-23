import { createContext, useEffect, useContext } from 'react';
import { ConfigProvider, theme } from 'antd';
import { CodeOutlined } from '@ant-design/icons';
import { LayoutProps } from '@/models/layout';
import { MessageContext } from '@/contexts/message';
import useLocalStorage from "@/hooks/useLocalStorage";
import zhCN from 'antd/locale/zh_CN';

interface ThemeContextType {
  userTheme: string;
  changeTheme: (themeName: string) => void;
}

const ThemeContext = createContext<ThemeContextType>({
  userTheme: 'light', 
  changeTheme: () => {} 
});

export const ThemeContextProvider = (props : LayoutProps) => {
  const [userTheme, setUserTheme] = useLocalStorage('theme', 'light')
  const message = useContext(MessageContext);

  useEffect(() => {
    document.documentElement.setAttribute('data-theme', userTheme);
  }, [userTheme])

  const changeThemeHandler = (themeName : string) => {        
    setUserTheme(themeName);
    message.open({
      content: `Set the time to ${themeName==='light'?'1000':'18000'}`,
      icon: <CodeOutlined />,
      duration: 1
    })
  }

  const contextValue = {
    userTheme: userTheme,
    changeTheme: changeThemeHandler
  }

  return (
    <ThemeContext.Provider value={contextValue}>
      <ConfigProvider
        theme={{ 
            algorithm: userTheme === 'dark' ? theme.darkAlgorithm : theme.defaultAlgorithm,
            token: { colorPrimary: "#1677ff", colorInfo: "#1677ff", screenXXLMin: 1920, screenXXL: 2560, },
        }}
        locale={zhCN}
      >
        {props.children}
      </ConfigProvider>
    </ThemeContext.Provider>
  )
}

export default ThemeContext