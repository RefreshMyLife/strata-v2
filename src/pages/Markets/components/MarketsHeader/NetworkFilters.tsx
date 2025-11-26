import {
  TabsFilledNetworkList,
  TabsFilledNetworkTrigger,
} from "@/components/ui/tabs/tabs-filled-network";
import { SortByDropdown, type SortValue } from "@/components/SortByDropdown";
import { NETWORK_FILTERS } from "../markets.constants";

interface NetworkFiltersProps {
  sortBy: SortValue;
  onSortChange: (value: SortValue) => void;
}

/** Компонент фильтрации по сетям и сортировки */
export function NetworkFilters({ sortBy, onSortChange }: NetworkFiltersProps) {
  return (
    <div className="flex items-center align-baseline justify-between w-full">
      {/* Табы сетей */}
      <TabsFilledNetworkList className="flex flex-row gap-2 flex-1">
        {NETWORK_FILTERS.map((network) => (
          <TabsFilledNetworkTrigger
            key={network.id}
            value={network.id}
            icon={network.icon}
            count={network.count}
          >
            {network.label}
          </TabsFilledNetworkTrigger>
        ))}
      </TabsFilledNetworkList>

      {/* Сортировка */}
      <SortByDropdown value={sortBy} onValueChange={onSortChange} />
    </div>
  );
}
