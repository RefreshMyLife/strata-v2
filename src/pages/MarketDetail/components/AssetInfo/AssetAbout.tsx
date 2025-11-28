import type { VaultAsset } from "@/pages/Markets/components/markets.types";
import {
  TabsUnderline,
  TabsUnderlineList,
  TabsUnderlineTrigger,
  TabsUnderlineContent,
} from "@/components/ui/tabs/tabs-underline";
import { AboutTab } from "./tabs/AboutTab";
import { ChartsTab } from "./tabs/ChartsTab";
import { ReservesTab } from "./tabs/ReservesTab";

interface AssetAboutProps {
  asset: VaultAsset;
  description: string;
}

/**
 * Компонент "About" с детальной информацией об активе
 * Показывает табы: About, Charts, Reserves
 */
export function AssetAbout({ asset, description }: AssetAboutProps) {
  return (
    <div className="flex flex-col gap-4">
      <div className="">
        <TabsUnderline defaultValue="about">
          <TabsUnderlineList className="bg-[#151617] border-b-2 border-[#272a30] w-full pt-6 pl-6">
            <TabsUnderlineTrigger value="about">About</TabsUnderlineTrigger>
            <TabsUnderlineTrigger value="charts">Charts</TabsUnderlineTrigger>
            <TabsUnderlineTrigger value="reserves">
              Reserves
            </TabsUnderlineTrigger>
          </TabsUnderlineList>

          <TabsUnderlineContent value="about">
            <AboutTab asset={asset} description={description} />
          </TabsUnderlineContent>

          <TabsUnderlineContent value="charts">
            <ChartsTab />
          </TabsUnderlineContent>

          <TabsUnderlineContent value="reserves">
            <ReservesTab />
          </TabsUnderlineContent>
        </TabsUnderline>
      </div>
    </div>
  );
}
