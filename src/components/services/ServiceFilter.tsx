
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
  return (
    <div className={`flex flex-wrap justify-center gap-4 mb-12 ${isVisible ? 'animate-fade-in-up animate-stagger-2' : 'opacity-0'}`}>
      {filterCategories.map(category => (
        <button
          key={category.id}
          onClick={() => onFilterChange(category.id)}
          className={`px-6 py-3 rounded-xl font-medium transition-all duration-300 ${
            activeFilter === category.id
              ? 'bg-primary text-primary-foreground shadow-lg'
              : 'bg-card text-card-foreground border border-border hover:bg-muted/50'
          }`}
        >
          {category.label}
        </button>
      ))}
    </div>
  );
});

ServiceFilter.displayName = 'ServiceFilter';
export default ServiceFilter;
