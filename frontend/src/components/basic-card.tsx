import React from 'react';
import { Button, Space, Typography } from 'antd';
import { useRouter } from "next/router";

const { Title, Paragraph } = Typography;

interface BasicCardProps {
    id?: string;      
    title?: string;
    subtitle?: React.ReactNode;
    style?: React.CSSProperties;
}

const BasicCard: React.FC<BasicCardProps> = ({ 
    id,
    title,
    subtitle,
    style
}) => {

    const router = useRouter();
    
    return (
        <Button className="container basic-card" style={{...style}}
            onClick={() => {router.push(`/content/${id}`)}}>
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