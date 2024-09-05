import React, { useState, useEffect } from 'react';
import { Translate, translate } from 'react-jhipster';

import { getConfigurations, getEnv } from '../administration.reducer';
import { useAppDispatch, useAppSelector } from 'app/config/store';
import { MenuItemsData, setBreadItems } from 'app/shared/reducers/ui';
import { InputText } from 'primereact/inputtext';

export const ConfigurationPage = () => {
  const [filter, setFilter] = useState('');
  const [reversePrefix, setReversePrefix] = useState(false);
  const [reverseProperties, setReverseProperties] = useState(false);
  const dispatch = useAppDispatch();

  const configuration = useAppSelector(state => state.administration.configuration);

  useEffect(() => {
    dispatch(setBreadItems([MenuItemsData.homeMenuItem, MenuItemsData.administrationMenuItem, MenuItemsData.configurationMenuItem]));
  }, []);

  useEffect(() => {
    dispatch(getConfigurations());
    dispatch(getEnv());
  }, []);

  const changeFilter = evt => setFilter(evt.target.value);

  const envFilterFn = configProp => configProp.toUpperCase().includes(filter.toUpperCase());

  const propsFilterFn = configProp => configProp.prefix.toUpperCase().includes(filter.toUpperCase());

  const changeReversePrefix = () => setReversePrefix(!reversePrefix);

  const changeReverseProperties = () => setReverseProperties(!reverseProperties);

  const getContextList = contexts =>
    Object.values(contexts)
      .map((v: any) => v.beans)
      .reduce((acc, e) => ({ ...acc, ...e }));

  const configProps = configuration?.configProps ?? {};

  const env = configuration?.env ?? {};

  return (
    <div className="l-card overflow-auto">
      <h2 id="configuration-page-heading" data-cy="configurationPageHeading">
        <Translate contentKey="configuration.title">Configuration</Translate>
      </h2>
      <InputText
        type="search"
        value={filter}
        placeholder={translate('configuration.filter')}
        onChange={changeFilter}
        name="search"
        id="search"
      />
      <h4>Spring configuration</h4>
      <table className="l-table">
        <thead>
          <tr>
            <th className="cursor-pointer" onClick={changeReversePrefix}>
              <Translate contentKey="configuration.table.prefix">Prefix</Translate>
            </th>
            <th className="cursor-pointer" onClick={changeReverseProperties}>
              <Translate contentKey="configuration.table.properties">Properties</Translate>
            </th>
          </tr>
        </thead>
        <tbody>
          {configProps.contexts
            ? (reversePrefix
                ? Object.values(getContextList(configProps.contexts)).sort((p1, p2) => p1['prefix'].localeCompare(p2['prefix']))
                : Object.values(getContextList(configProps.contexts))
              )
                .filter(propsFilterFn)
                .map((property: any, propIndex) => (
                  <tr key={propIndex}>
                    <td>{property['prefix']}</td>
                    <td>
                      {(reverseProperties
                        ? Object.keys(property['properties']).sort((p1, p2) => p1.localeCompare(p2))
                        : Object.keys(property['properties'])
                      ).map((propKey, index) => (
                        <div className="flex flex-row" key={index}>
                          <div className="basis-4/12">{propKey}</div>
                          <div className="basis-8/12 text-right">
                            <div className="ml-auto max-w-[960px] break-words bg-lxm-surface-border">
                              {JSON.stringify(property['properties'][propKey])}
                            </div>
                          </div>
                        </div>
                      ))}
                    </td>
                  </tr>
                ))
            : null}
        </tbody>
      </table>
      {env.propertySources
        ? env.propertySources.map((envKey, envIndex) => (
            <div key={envIndex}>
              <h4>
                <span>{envKey.name}</span>
              </h4>
              <table className="l-table">
                <thead>
                  <tr key={envIndex}>
                    <th>Property</th>
                    <th>Value</th>
                  </tr>
                </thead>
                <tbody>
                  {Object.keys(envKey.properties)
                    .filter(envFilterFn)
                    .map((propKey, propIndex) => (
                      <tr key={propIndex}>
                        <td className="text-wrap break-words">{propKey}</td>
                        <td className="text-wrap break-words">
                          <span className="bg-lxm-surface-border">{envKey.properties[propKey].value}</span>
                        </td>
                      </tr>
                    ))}
                </tbody>
              </table>
            </div>
          ))
        : null}
    </div>
  );
};

export default ConfigurationPage;
