import React, { useState, useEffect } from 'react';
import { Translate, translate } from 'react-jhipster';
import { useAppDispatch, useAppSelector } from 'app/config/store';
import { MenuItemsData, setBreadItems } from 'app/shared/reducers/ui';
import HealthModal from './health-modal';
import { getSystemHealth } from '../administration.reducer';
import { Button } from 'primereact/button';
import { Badge } from 'primereact/badge';

export const HealthPage = () => {
  const [healthObject, setHealthObject] = useState({});
  const [showModal, setShowModal] = useState(false);
  const dispatch = useAppDispatch();

  const health = useAppSelector(state => state.administration.health);
  const isFetching = useAppSelector(state => state.administration.loading);

  useEffect(() => {
    dispatch(setBreadItems([MenuItemsData.homeMenuItem, MenuItemsData.administrationMenuItem, MenuItemsData.healthMenuItem]));
  }, []);

  useEffect(() => {
    dispatch(getSystemHealth());
  }, []);

  const fetchSystemHealth = () => {
    if (!isFetching) {
      dispatch(getSystemHealth());
    }
  };

  const getSystemHealthInfo = (name, healthObj) => () => {
    setShowModal(true);
    setHealthObject({ ...healthObj, name });
  };

  const getBadgeType = (status: string) => (status !== 'UP' ? 'danger' : 'success');

  const handleClose = () => setShowModal(false);

  const renderModal = () => <HealthModal healthObject={healthObject} handleClose={handleClose} showModal={showModal} />;

  const data = (health || {}).components || {};

  return (
    <div className="l-card">
      <h2 id="health-page-heading" data-cy="healthPageHeading">
        <Translate contentKey="health.title">Health Checks</Translate>
      </h2>
      <p>
        <Button
          label={translate('health.refresh.button')}
          className={isFetching ? 'p-button-dangerr' : ''}
          icon={`pi ${isFetching ? 'pi-spin' : ''} pi-refresh`}
          onClick={fetchSystemHealth}
          disabled={isFetching}
        />
      </p>
      <div>
        <table className="l-table">
          <thead>
            <tr>
              <th>
                <Translate contentKey="health.table.service">Service Name</Translate>
              </th>
              <th>
                <Translate contentKey="health.table.status">Status</Translate>
              </th>
              <th>
                <Translate contentKey="health.details.details">Details</Translate>
              </th>
            </tr>
          </thead>
          <tbody>
            {Object.keys(data).map((configPropKey, configPropIndex) =>
              configPropKey !== 'status' ? (
                <tr key={configPropIndex}>
                  <td>{configPropKey}</td>
                  <td>
                    <Badge severity={getBadgeType(data[configPropKey].status)} value={data[configPropKey].status} />
                  </td>
                  <td>
                    {data[configPropKey].details ? (
                      <Button icon="pi pi-eye" rounded text onClick={getSystemHealthInfo(configPropKey, data[configPropKey])} />
                    ) : null}
                  </td>
                </tr>
              ) : null,
            )}
          </tbody>
        </table>
      </div>
      {renderModal()}
    </div>
  );
};

export default HealthPage;
