import { mediaQueriesList } from '@/constants';

export interface TypeWithMediaQueriesType<T> extends Partial<Record<typeof mediaQueriesList[number], T>> {}
