
import { ServiceData, ColorType } from './types';
import { webServices } from './definitions/webServices';
import { aiServices } from './definitions/aiServices';
import { specialtyServices } from './definitions/specialtyServices';

export const servicesData: ServiceData[] = [
  ...webServices,
  ...specialtyServices,
  ...aiServices,
];

export type { ServiceData, ColorType };
