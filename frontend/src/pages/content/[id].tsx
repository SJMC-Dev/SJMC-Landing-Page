import { useContext, useEffect, useState } from "react";
import { Layout, Button, Space, Typography, FloatButton, Result, Grid } from "antd";
import Head from "next/head";
import Link from "next/link";
import { ArrowLeftOutlined, MoonOutlined, SunOutlined, ArrowUpOutlined, LoadingOutlined } from "@ant-design/icons";
import { useRouter } from "next/router";
import { MessageContext } from '@/contexts/message';
import ThemeContext from '@/contexts/theme';
import { getPageContent } from "@/services/pages";
import { Page } from "@/models/page";
import MarkdownRenderer from "@/components/markdown-renderer";

const { Header, Footer, Content } = Layout;
const { Title } = Typography;

const DetailPage = () => {
    const router = useRouter();
    const message = useContext(MessageContext);
    const themeCtx = useContext(ThemeContext);
    const screens = Grid.useBreakpoint();
    const { id } = router.query;

    const [pageContent, setPageContent] = useState<Page | null>(null);
    const [showTitleInHeader, setShowTitleInHeader] = useState(false);

    useEffect(() => {
        if (typeof id === 'string') {
            getPageContent(id)
            .then(res => setPageContent(res))
            .catch(err => message.error(err));
        }
    }, [id]);

    useEffect(() => {
        if (pageContent && pageContent.type === 'link') {
            window.location.href = pageContent.content;
        }
    }, [pageContent]);  

    useEffect(() => {
        const handleScroll = () => {
        const titleElement = document.querySelector('.home-title');
        if (!titleElement) return;
        const titleRect = titleElement.getBoundingClientRect();
            setShowTitleInHeader(titleRect.top <= 48);
        };

        window.addEventListener('scroll', handleScroll);

        return () => window.removeEventListener('scroll', handleScroll);
    }, []);

    if (pageContent && pageContent.type === 'link')
        return (
            <>
                <Result icon={<LoadingOutlined />} title="正在跳转..."/>
            </>
        )

    return (
        <>
            <Head>
                <title>{`${pageContent ? pageContent.title : '加载中'} - SJMC`}</title>
            </Head>
            <Layout className="main-layout">
                <Header className="layout-header">
                    <Space className="navbar">
                        <Link href="/">
                            <Button type="text" icon={<ArrowLeftOutlined />}/>
                        </Link>
                        <div className={`header-title ${showTitleInHeader ? 'visible' : ''}`}>
                            {showTitleInHeader && pageContent?.title}
                        </div>
                    </Space>
                </Header>
                <Content className="layout-content">
                    {pageContent && pageContent.type==='article' &&
                    <Space className="page-content" direction="vertical" style={{width: '100%'}}>
                        <Title className="home-title" level={screens.lg ? 2:3}>{pageContent.title}</Title>
                        <MarkdownRenderer content={pageContent.content}/>
                    </Space>
                    }
                </Content>
                <Footer className="layout-footer">
                    上海交通大学 Minecraft 社 | 沪ICP备05052060号-7
                </Footer>
            </Layout>
            <FloatButton.Group 
                shape="square"
                style={screens.lg ? { bottom: 60, right: 30 } : { bottom: 48, right: 20 }}
            >
                <FloatButton 
                    icon={<ArrowUpOutlined />}
                    onClick={()=>{window.scrollTo({ top: 0, behavior: 'smooth' });}}
                />
                <FloatButton
                    onClick={() => {themeCtx.changeTheme(themeCtx.userTheme === 'light' ? 'dark' : 'light')}}
                    icon = {themeCtx.userTheme === 'light' ? <MoonOutlined /> : <SunOutlined />}
                />
            </FloatButton.Group>
        </>
    )
}

export default DetailPage;