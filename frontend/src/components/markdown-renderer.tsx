import React, {useContext} from 'react';
import { Button } from 'antd';
import ReactMarkdown from 'react-markdown';
import remarkGfm from 'remark-gfm';
import remarkHtml from 'remark-html';
import rehypeRaw from 'rehype-raw';
import ThemeContext from "@/contexts/theme";

const MarkdownRenderer = ({content} : any) =>{

    const themeCtx = useContext(ThemeContext);

    const externalRender = {
        // replace html button to antd.Button
        button({node, antd_type, className, children, ...props}) {
            return (
                <Button 
                    className={className} type={antd_type} 
                    style={{padding: '0 10px'}}
                    {...props}
                >
                    {children}
                </Button>
            )
        },
    }

    const renderers = {
        ...externalRender,
    };

    return(
        <div style={{ wordWrap: 'break-word', overflowWrap: 'break-word'}} className={themeCtx.userTheme}>
        <ReactMarkdown
            className={'markdown-body-' + (themeCtx.userTheme === 'dark' ? 'dark' : 'light')}
            remarkPlugins={[remarkGfm, remarkHtml]}
            rehypePlugins={[rehypeRaw]}
            skipHtml={false}
            components={renderers}
        >
            {content}
        </ReactMarkdown>
        </div>
    )
}

export default MarkdownRenderer;