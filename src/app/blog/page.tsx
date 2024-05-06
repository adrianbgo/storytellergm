import React from "react";
import styles from "./page.module.css";
import { getSortedPostsData } from "@/utils/posts";
import Link from "next/link";
import Date from "@/components/UI/atoms/Date";

type AllPostsData = {
  date: string;
  title: string;
  id: string;
}[];

const BlogPage = () => {
  const allPostsData: AllPostsData = getSortedPostsData();

  return (
    <div className={styles.blogPage} data-testid="blogPage">
      <section className={styles.blogSection}>
        <h2 className={styles.blogHeading}>Blog</h2>
        <ul className={styles.blogList}>
          {allPostsData.map(({ id, date, title }) => (
            <li className={styles.blogListItem} key={id}>
              <div>
                <Link href={`/blog/${id}`}>{title}</Link>
              </div>
              <small>
                <Date dateString={date} />
              </small>
            </li>
          ))}
        </ul>
      </section>
    </div>
  );
};

export default BlogPage;
