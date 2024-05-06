import { waitFor } from "@testing-library/react";
import { getAllPostIds, getPostData, getSortedPostsData } from "./posts";

describe("getSortedPostsData", () => {
  it("retrieves sorted posts", () => {
    const testArray = [
      {
        author: "Adrian Bauer",
        date: "2024-05-05",
        description: "This is a test blog post",
        id: "test-post",
        tags: ["test", "blog", "post"],
        title: "Test Blog Post",
      },
      {
        author: "Adrian Bauer",
        date: "2021-05-05",
        description: "This is a test blog post",
        id: "test-post2",
        tags: ["test", "blog", "post"],
        title: "Test Blog Post",
      },
      {
        author: "Adrian Bauer",
        date: "2024-08-08",
        description: "This is a test blog post",
        id: "test-post3",
        tags: ["test", "blog", "post"],
        title: "Test Blog Post",
      },
    ];
    expect(getSortedPostsData()).toBeDefined;
    expect(getSortedPostsData()).toStrictEqual(
      testArray.sort((a, b) => {
        if (a.date < b.date) {
          return 1;
        }
        return -1;
      })
    );
  });
});

describe("getAllPostIds", () => {
  it("returns all post ids", () => {
    expect(getAllPostIds()).toStrictEqual([
      {
        params: {
          id: "test-post",
        },
      },
      {
        params: {
          id: "test-post2",
        },
      },
      {
        params: {
          id: "test-post3",
        },
      },
    ]);
  });
});

describe("getPostData", () => {
  it("retrieves all post data", async () => {
    let postData = {};
    await waitFor(async () => (postData = await getPostData("test-post")));

    expect(postData).toStrictEqual({
      author: "Adrian Bauer",
      contentHtml:
        "<h1>Test Blog Post</h1>\n<p>This is my <em>first blog post</em></p>\n<h2>What I've accomplished:</h2>\n<ol>\n<li><strong>Writing the basic blog post</strong></li>\n<li><strong>Adding markdown parsing</strong></li>\n<li><em>Making Blog Posts</em></li>\n</ol>\n",
      date: "2024-05-05",
      description: "This is a test blog post",
      id: "test-post",
      tags: ["test", "blog", "post"],
      title: "Test Blog Post",
    });
  });
});
