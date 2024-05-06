import React, { act } from "react";
import { render, screen, waitFor } from "@testing-library/react";
import Post, { generateMetadata } from "./page";
import { vi } from "vitest";

describe("Blog Post", () => {
  it("renders the Blog Post", async () => {
    render(<Post params={{ id: "test-post" }} />);

    let postPage;
    await waitFor(() => (postPage = screen.getByTestId("blogPost")));

    expect(postPage).toBeInTheDocument();
  });

  it("throws an error with bad data", async () => {
    const logSpy = vi.spyOn(console, "log");

    render(<Post params={{ id: "bad-post-data" }} />);

    expect(logSpy).toHaveBeenCalled();
  });
});

describe("generateMetadata", () => {
  it("generates the correct metadata", async () => {
    let metadata: { title: string } = { title: "" };

    await waitFor(
      async () =>
        (metadata = await generateMetadata({ params: { id: "test-post" } }))
    );

    expect(metadata.title).toBe("Test Blog Post");
  });
});
