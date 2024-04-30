import "@testing-library/jest-dom";
import { render, screen } from "@testing-library/react";
import Script from ".";
import styles from "./index.module.css";

describe("Script", () => {
  it("renders on the page", () => {
    render(<Script>Test</Script>);

    const script = screen.getByText("Test");

    expect(script).toBeInTheDocument();
  });

  it("renders h1", () => {
    render(<Script size="h1">Test</Script>);

    const script = screen.getByText("Test");
    expect(script).toHaveClass(styles.h1);
  });

  it("renders h2", () => {
    render(<Script size="h2">Test</Script>);

    const script = screen.getByText("Test");
    expect(script).toHaveClass(styles.h2);
  });

  it("renders h3", () => {
    render(<Script size="h3">Test</Script>);

    const script = screen.getByText("Test");
    expect(script).toHaveClass(styles.h3);
  });

  it("renders h4", () => {
    render(<Script size="h4">Test</Script>);

    const script = screen.getByText("Test");
    expect(script).toHaveClass(styles.h4);
  });

  it("renders h5", () => {
    render(<Script size="h5">Test</Script>);

    const script = screen.getByText("Test");
    expect(script).toHaveClass(styles.h5);
  });

  it("renders h6", () => {
    render(<Script size="h6">Test</Script>);

    const script = screen.getByText("Test");
    expect(script).toHaveClass(styles.h6);
  });

  it("renders p", () => {
    render(<Script size="p">Test</Script>);

    const script = screen.getByText("Test");
    expect(script).toHaveClass(styles.p);
  });

  it("renders small", () => {
    render(<Script size="small">Test</Script>);

    const script = screen.getByText("Test");
    expect(script).toHaveClass(styles.small);
  });

  it("renders xs", () => {
    render(<Script size="xs">Test</Script>);

    const script = screen.getByText("Test");
    expect(script).toHaveClass(styles.xs);
  });

  it("renders default p with no size input", () => {
    render(<Script>Test</Script>);

    const script = screen.getByText("Test");
    expect(script).toHaveClass(styles.p);
  });
});
