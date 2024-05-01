import "@testing-library/jest-dom";
import { render, screen } from "@testing-library/react";
import Button from ".";
import userEvent from "@testing-library/user-event";

import styles from "./index.module.css";

const setup = (jsx: React.JSX.Element) => {
  return {
    user: userEvent.setup(),
    ...render(jsx),
  };
};

describe("Button", () => {
  const testFire = jest.fn();

  it("renders default", async () => {
    const { user } = setup(<Button text="Test Button" onClick={testFire} />);

    const button = screen.getByTestId("button");

    expect(button).toBeInTheDocument();
    expect(button).toHaveTextContent("Test Button");
    expect(button).toHaveClass(`${styles.button} ${styles.primary}`);

    await user.click(button);

    expect(testFire).toHaveBeenCalled();
  });
  it("renders secondary", async () => {
    const { user } = setup(
      <Button variant="secondary" text="Test Button" onClick={testFire} />
    );

    const button = screen.getByTestId("button");

    expect(button).toBeInTheDocument();
    expect(button).toHaveTextContent("Test Button");
    expect(button).toHaveClass(`${styles.button} ${styles.secondary}`);

    await user.click(button);

    expect(testFire).toHaveBeenCalled();
  });

  it("renders disabled", async () => {
    const { user } = setup(
      <Button
        variant="secondary"
        text="Test Button"
        onClick={testFire}
        disabled
      />
    );

    const button = screen.getByTestId("button-disabled");

    expect(button).toBeInTheDocument();
    expect(button).toHaveTextContent("Test Button");
    expect(button).toHaveClass(styles.disabled);

    await user.click(button);

    expect(testFire).not.toHaveBeenCalled();
  });
});
