import { Lawsuits } from 'src/interfaces/lawsuits.interface';
import * as defendants from './defendants.mock';

const lawsuits: Array<Lawsuits> = [
    { id: 1, lawsuitNumber: 123, defendant: defendants.default[3] },
    { id: 2, lawsuitNumber: 312, defendant: defendants.default[4] },
    { id: 3, lawsuitNumber: 133 },
    { id: 4, lawsuitNumber: 423, defendant: defendants.default[0] },
];

export default lawsuits;