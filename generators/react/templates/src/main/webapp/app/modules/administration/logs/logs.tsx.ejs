import React, { useState, useEffect } from 'react';
import { Translate, getSortState, translate } from 'react-jhipster';

import { getLoggers, changeLogLevel } from '../administration.reducer';
import { useAppDispatch, useAppSelector } from 'app/config/store';
import { MenuItemsData, setBreadItems } from 'app/shared/reducers/ui';
import { InputText } from 'primereact/inputtext';
import { Button } from 'primereact/button';
import { ASC, DESC } from 'app/shared/util/pagination.constants';

export const LogsPage = () => {
  const [filter, setFilter] = useState('');
  const logs = useAppSelector(state => state.administration.logs);
  const isFetching = useAppSelector(state => state.administration.loading);

  const [sortSate, setSortSate] = useState(getSortState({ search: '' }));

  const sortByField = (field: string) => {
    if (sortSate.order === ASC) {
      setSortSate(getSortState({ search: '' }, field, DESC));
    } else {
      setSortSate(getSortState({ search: '' }, field, ASC));
    }
  };

  const dispatch = useAppDispatch();

  useEffect(() => {
    dispatch(setBreadItems([MenuItemsData.homeMenuItem, MenuItemsData.administrationMenuItem, MenuItemsData.logsMenuItem]));
  }, []);

  useEffect(() => {
    dispatch(getLoggers());
  }, []);

  const changeLevel = (loggerName, level) => () => dispatch(changeLogLevel(loggerName, level));

  const changeFilter = evt => setFilter(evt.target.value);

  const filterFn = l => l.name.toUpperCase().includes(filter.toUpperCase());

  console.log(logs.loggers);

  const loggersTmp = logs ? Object.entries(logs.loggers).map((e: any) => ({ name: e[0], level: e[1].effectiveLevel })) : [];

  let loggers = loggersTmp;
  if (sortSate.sort === 'name') {
    loggers =
      sortSate.order === DESC
        ? loggersTmp.sort((p1, p2) => p1.name.localeCompare(p2.name))
        : loggersTmp.sort((p1, p2) => p2.name.localeCompare(p1.name));
  }

  if (sortSate.sort === 'level') {
    loggers =
      sortSate.order === DESC
        ? loggersTmp.sort((p1, p2) => p1.level.localeCompare(p2.level))
        : loggersTmp.sort((p1, p2) => p2.level.localeCompare(p1.level));
  }

  return (
    <div className="l-card overflow-auto">
      <h2 id="logs-page-heading" data-cy="logsPageHeading">
        <Translate contentKey="logs.title">Logs</Translate>
      </h2>
      <p>
        <Translate contentKey="logs.nbloggers" interpolate={{ total: loggers.length }}>
          There are {loggers.length.toString()} loggers.
        </Translate>
      </p>
      <InputText className="mb-4" value={filter} onChange={changeFilter} placeholder={translate('logs.filter')} disabled={isFetching} />

      <table className="l-table">
        <thead>
          <tr title="click to order">
            <th className="cursor-pointer" onClick={() => sortByField('name')}>
              <Translate contentKey="logs.table.name">Name</Translate>
            </th>
            <th className="cursor-pointer" onClick={() => sortByField('level')}>
              <Translate contentKey="logs.table.level">Level</Translate>
            </th>
          </tr>
        </thead>
        <tbody>
          {loggers.filter(filterFn).map((logger, i) => (
            <tr key={`log-row-${i}`}>
              <td className="max-w-64 break-words md:max-w-[500px]">
                <small>{logger.name}</small>
              </td>
              <td>
                <Button
                  disabled={isFetching}
                  label="TRACE"
                  onClick={changeLevel(logger.name, 'TRACE')}
                  size="small"
                  className={logger.level === 'TRACE' ? 'mb-2 mr-2' : 'p-button-raised p-button-text p-button-plain mb-2 mr-2'}
                />
                <Button
                  disabled={isFetching}
                  label="DEBUG"
                  onClick={changeLevel(logger.name, 'DEBUG')}
                  size="small"
                  className={
                    logger.level === 'DEBUG' ? 'p-button-success mb-2 mr-2' : 'p-button-raised p-button-text p-button-plain mb-2 mr-2'
                  }
                />
                <Button
                  disabled={isFetching}
                  label="INFO"
                  onClick={changeLevel(logger.name, 'INFO')}
                  size="small"
                  className={logger.level === 'INFO' ? 'p-button-info mb-2 mr-2' : 'p-button-raised p-button-text p-button-plain mb-2 mr-2'}
                />
                <Button
                  disabled={isFetching}
                  label="WARN"
                  onClick={changeLevel(logger.name, 'WARN')}
                  size="small"
                  className={
                    logger.level === 'WARN' ? 'p-button-warning mb-2 mr-2' : 'p-button-raised p-button-text p-button-plain mb-2 mr-2'
                  }
                />
                <Button
                  disabled={isFetching}
                  label="ERROR"
                  onClick={changeLevel(logger.name, 'ERROR')}
                  size="small"
                  className={
                    logger.level === 'ERROR' ? 'p-button-danger mb-2 mr-2' : 'p-button-raised p-button-text p-button-plain mb-2 mr-2'
                  }
                />
                <Button
                  disabled={isFetching}
                  label="OFF"
                  onClick={changeLevel(logger.name, 'OFF')}
                  size="small"
                  className={
                    logger.level === 'OFF' ? 'p-button-secondary mb-2 mr-2' : 'p-button-raised p-button-text p-button-plain mb-2 mr-2'
                  }
                />
              </td>
            </tr>
          ))}
        </tbody>
      </table>
    </div>
  );
};

export default LogsPage;
