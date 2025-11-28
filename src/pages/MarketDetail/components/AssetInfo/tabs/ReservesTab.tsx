import { useState, useMemo } from "react";
import { ChartContainer, CollateralAssetsTable } from "../components";
import type { DataFilter, TimeFilter } from "./ReservesTabs/types";
import { generateMockData, getFilteredData } from "./ReservesTabs/utils";
import { mockCollateralAssets } from "./ReservesTabs/mockData";
import { CustomFilterBar } from "./ReservesTabs/CustomFilterBar";
import { CustomFilterTitle } from "./ReservesTabs/CustomFilterTitle";
import { CollateralAssetcCharts } from "./ReservesTabs/CollateralAssetcCharts";

/**
 * Таб Reserves с графиками залоговых активов и APY
 */
export function ReservesTab() {
  const [dataFilter, setDataFilter] = useState<DataFilter>("collateralAssets");
  const [timeFilter, setTimeFilter] = useState<TimeFilter>("ALL");

  // генерация моковых данных при монтировании (один раз)
  const mockData = useMemo(() => generateMockData(), []);

  // фильтрация
  const filteredData = getFilteredData(mockData, timeFilter);

  return (
    <div className="flex flex-col gap-2">
      {/* Карточка с графиком */}
      <div className="bg-[#151617] rounded-lg p-6 flex flex-col gap-4">
        {/* Фильтры */}
        <CustomFilterBar
          dataFilter={dataFilter}
          setDataFilter={setDataFilter}
          timeFilter={timeFilter}
          setTimeFilter={setTimeFilter}
        />

        {/* Заголовок */}
        <CustomFilterTitle
          dataFilter={dataFilter}
          filteredData={filteredData}
        />

        {/* График */}
        <ChartContainer height="sm">
          {dataFilter === "collateralAssets" ? (
            // График для Collateral Assets
            <CollateralAssetcCharts
              filteredData={filteredData}
              dataFilter={dataFilter}
            />
          ) : (
            // График для Collateral APY (два area графика)
            <CollateralAssetcCharts
              filteredData={filteredData}
              dataFilter={dataFilter}
            />
          )}
        </ChartContainer>
      </div>

      {/* Карточка с таблицей (отображается только для Collateral Assets) */}
      {dataFilter === "collateralAssets" && (
        <CollateralAssetsTable assets={mockCollateralAssets} />
      )}
    </div>
  );
}
