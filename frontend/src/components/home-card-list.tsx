import react, { useContext, useEffect, useState } from "react";
import { Space, Typography, Grid, Flex } from "antd";
import Image from 'next/image';
import BasicCard from "@/components/basic-card";
import ThemeContext from '@/contexts/theme';
import { MessageContext } from '@/contexts/message';
import { getShownPages } from '@/services/pages';
import { PageEntry } from '@/models/page';
import SJMCIcon from '../../assets/mcclub.png';

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
            <Flex justify="space-between" align="flex-start">
                <Title className="home-title" level={screens.lg ? 1:2}>
                    <span className="home-title-normal">我的世界</span>
                    <br/>
                    <span className="home-title-highlighted">我们的大学</span>
                </Title>
                <Image src={SJMCIcon} alt="SJMC Icon" width={50} height={50} unoptimized/>
            </Flex>
        </div>
        {pages.map(page => (
            <BasicCard 
                key={page.id} 
                id={page.id.toString()} 
                title={page.title} 
                subtitle={page.subtitle} 
                content_type={page.type}
                logo_url={page.logo_url}
                banner_url={page.banner_url}
                style={{backgroundColor: themeCtx.userTheme === 'light' ? page.card_color_light : page.card_color_dark}}
            />
            ))
        }
    </Space>)
}

export default HomeCardList;