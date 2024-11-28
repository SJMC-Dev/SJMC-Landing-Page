import copy from 'copy-to-clipboard';

export const shareContent = async (
  title: string,
  text: string,
  url: string,
  toast: any,
  t: (key: string, options?: any) => string,
  failedWithCopy: boolean = true,
  onlyCopyUrl: boolean = true
) => {

  const shareText = onlyCopyUrl ? url : `【${title}】\n${text}\n${url}`;
  if (typeof navigator.share !== "undefined") {   
    // browser support navigator.share
    try {
      await navigator.share({
        title: title,
        text: text,
        url: url,
      });
      toast({
        title: t("Utils.share.shareContent.share-success"),
        status: "success",
      });
      return;
    } catch (error) { }
  }

  if (failedWithCopy) copy(shareText);
    toast({
      title: onlyCopyUrl 
        ? t("Utils.share.shareContent.copy-url-success") 
        : t("Utils.share.shareContent.copy-success"),
      status: "info",
    });
};

