import React from 'react';
import { Translate } from 'react-jhipster';
import { Dialog } from 'primereact/dialog';
import { Button } from 'primereact/button';

const formatDiskSpaceOutput = rawValue => {
  // Should display storage space in an human readable unit
  const val = rawValue / 1073741824;
  if (val > 1) {
    // Value
    return val.toFixed(2) + ' GB';
  }
  return (rawValue / 1048576).toFixed(2) + ' MB';
};

const HealthModal = ({ handleClose, healthObject, showModal }) => {
  const data = healthObject.details || {};
  return (
    <Dialog
      header={healthObject.name}
      visible={showModal}
      className="w-[90vw] md:w-[60vw]"
      onHide={() => handleClose()}
      footer={() => (
        <div>
          <Button label="Close" icon="pi pi-times" onClick={() => handleClose()} />
        </div>
      )}
    >
      <table>
        <thead>
          <tr>
            <th>
              <Translate contentKey="health.details.name">Name</Translate>
            </th>
            <th>
              <Translate contentKey="health.details.value">Value</Translate>
            </th>
          </tr>
        </thead>
        <tbody>
          {Object.keys(data).map((key, index) => (
            <tr key={index}>
              <td>{key}</td>
              <td>{healthObject.name === 'diskSpace' ? formatDiskSpaceOutput(data[key]) : JSON.stringify(data[key])}</td>
            </tr>
          ))}
        </tbody>
      </table>
    </Dialog>
  );
};

export default HealthModal;
