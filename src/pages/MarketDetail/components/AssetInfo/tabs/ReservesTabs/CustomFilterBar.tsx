import React from "react";
import { FilterBar } from "../../components/FilterBar";
import { FilterChip } from "../../components";
import type { DataFilter, TimeFilter } from "./types";

export interface CustomFilterBarProps {
  dataFilter: DataFilter;
  setDataFilter: React.Dispatch<React.SetStateAction<DataFilter>>;
  timeFilter: TimeFilter;
  setTimeFilter: React.Dispatch<React.SetStateAction<TimeFilter>>;
}

export const CustomFilterBar = ({
  dataFilter,
  setDataFilter,
  timeFilter,
  setTimeFilter,
}: CustomFilterBarProps) => {
  return (
    <FilterBar
      leftFilters={
        <>
          <FilterChip
            label="COLLATERAL ASSETS"
            active={dataFilter === "collateralAssets"}
            onClick={() => setDataFilter("collateralAssets")}
          />
          <FilterChip
            label="COLLATERAL APY"
            active={dataFilter === "collateralApy"}
            onClick={() => setDataFilter("collateralApy")}
          />
        </>
      }
      rightFilters={
        <>
          <FilterChip
            label="7D"
            active={timeFilter === "7D"}
            onClick={() => setTimeFilter("7D")}
          />
          <FilterChip
            label="30D"
            active={timeFilter === "30D"}
            onClick={() => setTimeFilter("30D")}
          />
          <FilterChip
            label="1Y"
            active={timeFilter === "1Y"}
            onClick={() => setTimeFilter("1Y")}
          />
          <FilterChip
            label="ALL"
            active={timeFilter === "ALL"}
            onClick={() => setTimeFilter("ALL")}
          />
        </>
      }
    />
  );
};
