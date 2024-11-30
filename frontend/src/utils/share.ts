import { message } from "antd";

export const shareContent = async (
  title: string,
  text: string,
  url: string,
) => {

  if (typeof navigator.share !== "undefined") {   
    // browser support navigator.share
    try {
      await navigator.share({
        title: title,
        text: text,
        url: url,
      });
      message.success("分享成功");
      return;
    } catch (error) { }
  }
};

