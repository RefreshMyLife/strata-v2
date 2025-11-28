import { FilterChip } from "../../components";
import type { DataFilter, PeriodFilter } from "./types";

export interface CustomFilterBarProps {
  dataFilter: DataFilter;
  setDataFilter: React.Dispatch<React.SetStateAction<DataFilter>>;
  periodFilter: PeriodFilter;
  setPeriodFilter: React.Dispatch<React.SetStateAction<PeriodFilter>>;
}

export const CustomFilterBar = ({
  dataFilter,
  setDataFilter,
  periodFilter,
  setPeriodFilter,
}: CustomFilterBarProps) => {
  return (
    <div className="flex items-center justify-between">
      {/* Фильтры данных (слева) */}
      <div className="flex gap-2">
        <FilterChip
          label="PRICE"
          active={dataFilter === "price"}
          onClick={() => setDataFilter("price")}
        />
        <FilterChip
          label="MARKET CAP"
          active={dataFilter === "marketCap"}
          onClick={() => setDataFilter("marketCap")}
        />
        <FilterChip
          label="APY"
          active={dataFilter === "apy"}
          onClick={() => setDataFilter("apy")}
        />
        <FilterChip
          label="COVERAGE"
          active={dataFilter === "coverage"}
          onClick={() => setDataFilter("coverage")}
        />
      </div>

      {/* Фильтры периода (справа) */}
      <div className="flex gap-2">
        <FilterChip
          label="7D"
          active={periodFilter === "7D"}
          onClick={() => setPeriodFilter("7D")}
        />
        <FilterChip
          label="30D"
          active={periodFilter === "30D"}
          onClick={() => setPeriodFilter("30D")}
        />
        <FilterChip
          label="1Y"
          active={periodFilter === "1Y"}
          onClick={() => setPeriodFilter("1Y")}
        />
        <FilterChip
          label="ALL"
          active={periodFilter === "ALL"}
          onClick={() => setPeriodFilter("ALL")}
        />
      </div>
    </div>
  );
};
