import { ProgressBar } from 'primereact/progressbar';
import { Slider } from 'primereact/slider';
import React from 'react';
import { TextFormat, nanToZero } from 'react-jhipster';
import { Progress, Table } from 'reactstrap';

export interface IHttpRequestMetricsProps {
  requestMetrics: any;
  wholeNumberFormat: string;
  twoDigitAfterPointFormat: string;
}

export class HttpRequestMetrics extends React.Component<IHttpRequestMetricsProps> {
  render() {
    const { requestMetrics, wholeNumberFormat, twoDigitAfterPointFormat } = this.props;
    return (
      <div className="grid grid-cols-4">
        <h3 className="col-span-4">HTTP requests (time in milliseconds)</h3>
        <p className="col-span-4">
          <span>Total requests:</span>{' '}
          <b>
            <TextFormat value={requestMetrics.all.count} type="number" format={wholeNumberFormat} />
          </b>
        </p>
        <table className="l-table col-span-4">
          <thead>
            <tr>
              <th>Code</th>
              <th>Count</th>
              <th className="text-end">Mean</th>
              <th className="text-end">Max</th>
            </tr>
          </thead>
          <tbody>
            {Object.keys(requestMetrics.percode).map((key, index) => (
              <tr key={index}>
                <td>{key}</td>
                <td>
                  <ProgressBar
                    value={(100 * requestMetrics.percode[key].count) / requestMetrics.all.count}
                    displayValueTemplate={() => <>{`${requestMetrics.percode[key].count}/${requestMetrics.all.count}`}</>}
                  />
                </td>
                <td className="text-end">
                  <TextFormat value={nanToZero(requestMetrics.percode[key].mean)} type="number" format={twoDigitAfterPointFormat} />
                </td>
                <td className="text-end">
                  <TextFormat value={nanToZero(requestMetrics.percode[key].max)} type="number" format={twoDigitAfterPointFormat} />
                </td>
              </tr>
            ))}
          </tbody>
        </table>
      </div>
    );
  }
}
