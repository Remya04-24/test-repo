import { render, screen } from "@testing-library/react";
import Rewards, { getPoints } from "./Rewards";
import data from "../db.json";

describe("Reward Component", () => {
  test("Render Reward Component", () => {
    console.log("data", data);
    render(<Rewards data={data.retailer} />);
    expect(screen.getByText("Reward Points")).toBeInTheDocument();
  });

  test("Test calculateRewardPoints fn ", () => {
    //passing mock data to fn to get the expected output
    // Since we are passing 30 so the expected output should be 0 as for 30 its less than 50 so it will 0 points
    expect(getPoints(30)).toBe(0);

    // 60 - 50
    expect(getPoints(60)).toBe(10);
  });
});
