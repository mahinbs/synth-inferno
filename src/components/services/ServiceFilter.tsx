import { memo } from 'react';
import { filterCategories } from './ServiceData';
interface ServiceFilterProps {
  activeFilter: string;
  onFilterChange: (filterId: string) => void;
  isVisible: boolean;
}
const ServiceFilter = memo(({
  activeFilter,
  onFilterChange,
  isVisible
}: ServiceFilterProps) => {
  return <div className={`flex flex-wrap justify-center gap-4 mb-12 ${isVisible ? 'animate-fade-in-up animate-stagger-2' : 'opacity-0'}`}>
      {filterCategories.map(category => <button key={category.id} onClick={() => onFilterChange(category.id)} className="text-black">
          {category.label}
        </button>)}
    </div>;
});
ServiceFilter.displayName = 'ServiceFilter';
export default ServiceFilter;