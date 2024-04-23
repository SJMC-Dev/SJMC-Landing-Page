import react, { useContext, useEffect, useState } from "react";
import { Space, Typography, Grid } from "antd";
import BasicCard from "@/components/basic-card";
import ThemeContext from '@/contexts/theme';
import { MessageContext } from '@/contexts/message';
import { getShownPages } from '@/services/pages';
import { PageEntry } from '@/models/page';

const { Title } = Typography;

const HomeCardList = () => {

    const [pages, setPages] = useState<PageEntry[]>([]);
    const message = useContext(MessageContext);
    const themeCtx = useContext(ThemeContext);
    const screens = Grid.useBreakpoint();

    useEffect(() => {
        getShownPages()
        .then((data) => {
            setPages(data);
        })
        .catch(err => message.error(err));
    }, []);

    return (
    <Space direction="vertical" style={{width: '100%'}} size="large">
        <div className="home-title">
            <Title className="home-title" level={screens.lg ? 1:2}>标题</Title>
        </div>
        {pages.map(page => (
            <BasicCard 
                key={page.id} 
                id={page.id.toString()} 
                title={page.title} 
                subtitle={page.subtitle} 
                style={{backgroundColor: themeCtx.userTheme === 'light' ? page.card_color_light : page.card_color_dark}}
            />
            ))
        }
    </Space>)
}

export default HomeCardList;