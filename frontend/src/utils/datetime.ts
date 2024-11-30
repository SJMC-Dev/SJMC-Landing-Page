export const ISOtoDate = (isoString: string): string => {
  const date = new Date(isoString);
  const year = date.getFullYear();
  const month = String(date.getMonth() + 1).padStart(2, '0');
  const day = String(date.getDate()).padStart(2, '0');
  return `${year}-${month}-${day}`;
};

export const formatRelativeTime = (isoString: string, t: (key: string, options?: any) => string): string => {
  const date = new Date(isoString);
  const now = new Date();
  const diffMilliseconds = now.getTime() - date.getTime();
  const diffMinutes = Math.floor(diffMilliseconds / (1000 * 60));
  const diffHours = Math.floor(diffMilliseconds / (1000 * 60 * 60));
  const diffDays = Math.floor((now.setHours(0, 0, 0, 0) - date.setHours(0, 0, 0, 0)) / (1000 * 60 * 60 * 24));
  
  if (diffMinutes < 3) {
    return t('Utils.datetime.formatRelativeTime.now');
  } else if (diffMinutes < 60) {
    return t('Utils.datetime.formatRelativeTime.minutes-ago', { count: diffMinutes });
  } else if (diffHours < 24 && now.getDate() === date.getDate()) {
    if (diffHours === 1) {
      return t('Utils.datetime.formatRelativeTime.last-hour');
    }
    return t('Utils.datetime.formatRelativeTime.hours-ago', { count: diffHours });
  } else if (diffDays === 1) {
    return t('Utils.datetime.formatRelativeTime.yesterday');
  } else if (now.getFullYear() === date.getFullYear()) {
    const month = String(date.getMonth() + 1).padStart(2, '0');
    const day = String(date.getDate()).padStart(2, '0');
    return t('Utils.datetime.formatRelativeTime.others', {
      time: `${month}-${day}`
    });
  } else {
    const year = date.getFullYear();
    const month = String(date.getMonth() + 1).padStart(2, '0');
    const day = String(date.getDate()).padStart(2, '0');
    return t('Utils.datetime.formatRelativeTime.others', {
      time: `${year}-${month}-${day}`
    });
  }
};
