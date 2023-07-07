import { createAction, props } from '@ngrx/store';
import { HousingLocation } from '../models/housinglocation';

export const loadItems = createAction(
  '[Housing List] Load housing'
)

export const loadedItems = createAction(
  '[Housing List] Loaded Success',
  props<{ items: HousingLocation[] }>()
)

export const selectedItem = createAction(
  '[Housing List] House Selected'
)
