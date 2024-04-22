import React from 'react';
import { Button, Space, Typography } from 'antd';

const { Title, Paragraph } = Typography;

interface BasicCardProps {
    link?: string;      
    title?: string;
    subtitle?: React.ReactNode;
}

const BasicCard: React.FC<BasicCardProps> = ({ 
    link,
    title,
    subtitle,
}) => {
    return (
        <Button className="container basic-card">
            <Space direction='vertical'>
                <Typography>
                    <Title level={3}>{title}</Title>
                    <Paragraph>{subtitle}</Paragraph>
                </Typography>
            </Space>
        </Button>
    )
}

export default BasicCard;