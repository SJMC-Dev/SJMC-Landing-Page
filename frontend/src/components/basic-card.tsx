import React, { useContext } from 'react';
import Image from 'next/image';
import { Button, Space, Typography } from 'antd';
import { useRouter } from "next/router";
import Color from 'color';
import { getPageContent } from "@/services/pages";
import { MessageContext } from '@/contexts/message';

const { Title, Paragraph } = Typography;

interface BasicCardProps {
    id?: string;      
    title?: string;
    subtitle?: string;
    content_type?: string;
    logo_url?: string;
    banner_url?: string;
    style?: React.CSSProperties;
}

const BasicCard: React.FC<BasicCardProps> = ({ 
    id,
    title,
    subtitle,
    content_type,
    logo_url,
    banner_url,
    style
}) => {

    const router = useRouter();
    const message = useContext(MessageContext);
    const bgColor = Color(style.backgroundColor);
    const rgb = bgColor.rgb().object();
    const rgbVar = {
        '--card-r': rgb.r,
        '--card-g': rgb.g,
        '--card-b': rgb.b,
    } as React.CSSProperties;

    const onRoute = () => {
        if (content_type === 'link') {
            getPageContent(id)
            .then(res => window.location.href = res.content)
            .catch(err => message.error(err));
        }
        else router.push(`/content/${id}`);
    }
    
    return (
        <Button className="container basic-card" style={{...style}}
            onClick={() => onRoute()}>
            <div style={{width: '100%'}}>
                {banner_url && <div className="card-banner-img" style={{ ...rgbVar }}>
                    <Image src={banner_url} 
                        alt="Card Banner" unoptimized layout="fill" objectFit="cover"
                    /></div>}
                <Space size="middle" className="card-content">
                    {logo_url && <Image src={logo_url} alt="Logo" className="logo" width={50} height={50} unoptimized/>}
                        <Typography>
                            <Title level={4}>{title}</Title>
                            <Paragraph>{subtitle}</Paragraph>
                        </Typography>
                </Space>
            </div>
        </Button>
    )
}

export default BasicCard;