import { Lawsuits } from './lawSuits.interface';

export interface ApiResponse {
	data: Array<Lawsuits> | Lawsuits | null;
	message: string | null;
}