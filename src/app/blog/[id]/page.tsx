import DateComponent from "@/components/UI/atoms/Date";

import { getAllPostIds, getPostData } from "@/utils/posts";
import styles from "./page.module.css";
import React, { useEffect, useState } from "react";
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

const Post: React.FC<Props> = ({ params }) => {
  const [postData, setPostData] = useState<PostData>({
    title: "",
    date: new Date().toISOString(),
    contentHtml: "",
  });

  useEffect(() => {
    console.log(new Date(postData.date));
    const fetchData = async () => {
      try {
        const res: PostData = await getPostData(params.id);
        setPostData(res);
      } catch (err) {
        console.log(err);
      }
    };
    fetchData();
  }, []);

  return (
    <div className={styles.blogPost} data-testid="blogPost">
      <h1 className={styles.postTitle}>{postData.title}</h1>
      <div className={styles.postDate}>
        <DateComponent dateString={postData.date} />
      </div>

      <div
        className={styles.postBody}
        dangerouslySetInnerHTML={{ __html: postData.contentHtml }}
      />
    </div>
  );
};

export default Post;
