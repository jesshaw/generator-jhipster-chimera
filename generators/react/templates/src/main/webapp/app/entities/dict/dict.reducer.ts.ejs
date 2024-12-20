import axios from 'axios';
import { createAsyncThunk, isFulfilled, isPending } from '@reduxjs/toolkit';
import { ASC } from 'app/shared/util/pagination.constants';
import { cleanEntity } from 'app/shared/util/entity-utils';
import { IQueryParams, createEntitySlice, EntityState, serializeAxiosError } from 'app/shared/reducers/reducer.utils';
import { IDict, defaultValue } from 'app/shared/model/dict.model';
import qs from 'qs';

const initialState: EntityState<IDict> = {
  loading: false,
  errorMessage: null,
  entities: [],
  entity: defaultValue,
  updating: false,
  updateSuccess: false,
};

const apiUrl = 'api/dicts';

// Actions

export const fetchDict = createAsyncThunk('dict/fetch_dict', async (data: String[]) => {
  const query = qs.stringify({ types: data }, { arrayFormat: 'repeat' });
  const requestUrl = `${apiUrl}?${query ? `${query}` : ''}`;
  return axios.get<IDict>(requestUrl);
});

// slice

export const DictSlice = createEntitySlice({
  name: 'dict',
  initialState,
  extraReducers(builder) {
    builder.addCase(fetchDict.fulfilled, (state, action) => {
      state.loading = false;
      state.entity = action.payload.data;
    });
  },
});

export const { reset } = DictSlice.actions;

// Reducer
export default DictSlice.reducer;
