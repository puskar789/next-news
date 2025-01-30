import { getNewsItem } from "@/lib/news";
import { notFound } from "next/navigation";

const ImagePage = async ({ params }) => {
  const newsSlug = params.slug;
  const newsItem = await getNewsItem(newsSlug);

  if (!newsItem) {
    notFound();
  }

  return (
    <div className="fullscreen-image">
      <img src={`/images/news/${newsItem.image}`} alt={newsSlug} />
    </div>
  );
};

export default ImagePage;
