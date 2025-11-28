import { APYMetric } from "../../components/APYMetric";

import { getCurrentValue } from "./utils";
import { ExternalLink } from "../../components";
import type { DataFilter, ReservesDataPoint } from "./types";

interface CustomFilterTitle {
  dataFilter: DataFilter;
  filteredData: ReservesDataPoint[];
}

export const CustomFilterTitle = ({
  dataFilter,
  filteredData,
}: CustomFilterTitle) => {
  return (
    <div>
      {dataFilter === "collateralAssets" ? (
        // Для Collateral Assets - одно значение с ссылкой
        <div className="flex items-end justify-between mb-4">
          <h3 className="mono text-2xl leading-8 tracking-[-0.48px] text-white">
            {getCurrentValue(filteredData, dataFilter)}
          </h3>
          <ExternalLink label="Etherscan" href="https://etherscan.io" />
        </div>
      ) : (
        // Для Collateral APY - два заголовка с метриками
        <div className="flex gap-3 mb-4 items-end">
          <APYMetric
            label="Collateral Pool APY"
            value={`${
              filteredData.length > 0
                ? filteredData[filteredData.length - 1].collateralApy.toFixed(2)
                : "0.00"
            }%`}
            color="#2c6eff"
          />
          <APYMetric
            label="Benchmark APY"
            value={`${
              filteredData.length > 0
                ? filteredData[filteredData.length - 1].benchmarkApy.toFixed(2)
                : "0.00"
            }%`}
            color="#ffa339"
          />
        </div>
      )}
    </div>
  );
};
