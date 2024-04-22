// import { fetcher } from '@/services/request';
import axios from "axios";
import { Page, PageEntry } from '@/models/page';

export const getPageContent = async (pageId: string) => {
    try {
        const res = await axios.get(`http://localhost:8000/api/pages/${pageId}/`);
        console.log(res);
        const data: Page = res.data;
        return data;
    } catch (error) {
        var errmessage = `页面加载失败：${error}`
        console.log(errmessage);
        throw errmessage;
    }
}

export const getShownPages = async () => {
    try {
        const res = await axios.get('http://localhost:8000/api/list-pages/');
        // console.log(res);
        const data: PageEntry[] = res.data;
        return data;
    } catch (error) {
        var errmessage = `获取页面列表失败：${error}`
        console.log(errmessage);
        throw errmessage;
    }
}


