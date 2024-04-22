import React from 'react';
import { Button, Space, Typography } from 'antd';

const { Title, Paragraph } = Typography;

interface BasicCardProps {
    link?: string;      
    title?: string;
    subtitle?: React.ReactNode;
    style?: React.CSSProperties;
}

const BasicCard: React.FC<BasicCardProps> = ({ 
    link,
    title,
    subtitle,
    style
}) => {
    return (
        <Button className="container basic-card" style={{...style}}>
            <Space direction='vertical'>
                <Typography>
                    <Title level={4}>{title}</Title>
                    <Paragraph>{subtitle}</Paragraph>
                </Typography>
            </Space>
        </Button>
    )
}

export default BasicCard;