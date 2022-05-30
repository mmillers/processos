import { Defendants } from './defendants.interface';

export interface Lawsuits {
	id: number;
	lawsuitNumber: number;
	defendant?: Defendants;
}
