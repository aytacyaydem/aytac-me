const getCoverImageURLFromNotionObject = (cover: any): string => {
  if (!cover) {
    return '';
  }
  return cover[cover?.type]?.url;
};

const parseNotionPagesForHomepageCard = (unserializedNotionPage: any[]): HomepagePostCard[] => {
  return unserializedNotionPage.map((page) => {
    const cover = page?.cover;

    const authorName = page?.properties?.author?.name ?? '';
    const authorAvatarURL = page?.properties?.author?.avatar_url ?? '';
    const statusSelectColor = page?.properties?.status?.select?.color ?? '';
    const statusSelectName = page?.properties?.status?.select?.name ?? '';
    const createdAt = page?.created_time ?? '';
    const updatedAt = page?.last_edited_time ?? '';
    const title = page.properties.Title.title[0].text.content ?? '';
    return {
      coverImage: getCoverImageURLFromNotionObject(cover),
      author: {
        name: authorName,
        avatar_url: authorAvatarURL,
      },
      status: {
        color: statusSelectColor,
        name: statusSelectName,
      },
      createdAt,
      updatedAt,
      title,
    };
  });
};

export default parseNotionPagesForHomepageCard;
