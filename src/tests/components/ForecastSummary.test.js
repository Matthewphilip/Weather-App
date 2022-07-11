import React from "react";
import { render } from "@testing-library/react";
import ForecastSummary from "../../components/ForecastSummary";

describe("Forecast Summary", () => {
  const validProps = {
    date: 1111111,
    description: "Stub description",
    icon: "800",
    temperature: {
      min: 12,
      max: 22,
    },
  };

  it("renders correctly", () => {
    const { asFragement } = render(
      <ForecastSummary
        date={validProps.date}
        description={validProps.description}
        icon={validProps.icon}
        temperature={validProps.temperature}
      />
    );
    expect(asFragement).toMatchSnapshot();
  });

  it("renders correct values for props", () => {
    const formattedDate = new Date(validProps.date).toDateString();
    const { getByText, getByTestId } = render(
      <ForecastSummary
        date={validProps.date}
        description={validProps.description}
        icon={validProps.icon}
        temperature={validProps.temperature}
      />
    );
    expect(getByText(formattedDate)).toHaveClass("forecast-summary__date");
    expect(getByText("Stub description")).toHaveClass(
      "forecast-summary__description"
    );
    expect(getByTestId("forecast-icon")).toHaveClass("forecast-summary__icon");
    expect(getByText("22°C")).toHaveClass("forecast-summary__temperature");
  });
});
