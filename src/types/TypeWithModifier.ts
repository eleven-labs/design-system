import { MediaQueryType } from '@/types/MediaQueryType';

export type TypeWithModifierType<TModifierType extends string, TPropValue> = Partial<Record<TModifierType, TPropValue>>;

export type TypeWithMediaQueriesType<T> = T | TypeWithModifierType<MediaQueryType, T>;
