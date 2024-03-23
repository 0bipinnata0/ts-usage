import { render } from "@testing-library/react";
import { TweetButton } from ".";
import { test } from "vitest";

test("tweet button renders correctly", () => {
  render(<TweetButton />);
});
