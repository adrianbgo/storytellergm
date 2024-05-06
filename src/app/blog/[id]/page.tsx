import Date from "@/components/UI/atoms/Date";

import { getAllPostIds, getPostData } from "@/utils/posts";
import styles from "./page.module.css";
type Params = {
  id: string;
};

type Props = {
  params: Params;
};

type PostData = {
  title: string;
  date: string;
  contentHtml: string;
};

export const generateMetadata = async ({ params }: Props) => {
  const postData: PostData = await getPostData(params.id);

  return {
    title: postData.title,
  };
};

const Post: React.FC<Props> = async ({ params }) => {
  const postData: PostData = await getPostData(params.id);

  return (
    <div className={styles.blogPost}>
      <h1 className={styles.postTitle}>{postData.title}</h1>
      <div className={styles.postDate}>
        <Date dateString={postData.date} />
      </div>

      <div
        className={styles.postBody}
        dangerouslySetInnerHTML={{ __html: postData.contentHtml }}
      />
    </div>
  );
};

export default Post;
