import { ProgressBar } from 'primereact/progressbar';
import React from 'react';
import { TextFormat } from 'react-jhipster';

export interface ISystemMetricsProps {
  systemMetrics: any;
  wholeNumberFormat: string;
  timestampFormat: string;
}

export class SystemMetrics extends React.Component<ISystemMetricsProps> {
  static convertMillisecondsToDuration(ms) {
    const times = {
      year: 31557600000,
      month: 2629746000,
      day: 86400000,
      hour: 3600000,
      minute: 60000,
      second: 1000,
    };
    let timeString = '';
    let plural = '';
    for (const key in times) {
      if (Math.floor(ms / times[key]) > 0) {
        plural = Math.floor(ms / times[key]) > 1 ? 's' : '';
        timeString += Math.floor(ms / times[key]).toString() + ' ' + key.toString() + plural + ' ';
        ms = ms - times[key] * Math.floor(ms / times[key]);
      }
    }
    return timeString;
  }

  render() {
    const { systemMetrics, wholeNumberFormat, timestampFormat } = this.props;
    return (
      <div className="l-metrics">
        <h4>System</h4>
        <div className="flex">
          <div className="w-4/12">Uptime</div>
          <div className="w-8/12 text-end">{SystemMetrics.convertMillisecondsToDuration(systemMetrics['process.uptime'])}</div>
        </div>
        <div className="flex">
          <div className="w-4/12">Start time</div>
          <div className="w-8/12 text-end">
            <TextFormat value={systemMetrics['process.start.time']} type="date" format={timestampFormat} />
          </div>
        </div>
        <div className="flex">
          <div className="w-9/12">Process CPU usage</div>
          <div className="w-3/12 text-end">
            <TextFormat value={100 * systemMetrics['process.cpu.usage']} type="number" format={wholeNumberFormat} /> %
          </div>
        </div>
        <ProgressBar
          aria-valuenow={100 * systemMetrics['process.cpu.usage']}
          value={Math.round(100 * systemMetrics['process.cpu.usage'])}
        />
        <div className="flex">
          <div className="w-9/12">System CPU usage</div>
          <div className="w-3/12 text-end">
            <TextFormat value={100 * systemMetrics['system.cpu.usage']} type="number" format={wholeNumberFormat} /> %
          </div>
        </div>
        <ProgressBar aria-valuenow={100 * systemMetrics['system.cpu.usage']} value={Math.round(100 * systemMetrics['system.cpu.usage'])} />
        <div className="flex">
          <div className="w-9/12">System CPU count</div>
          <div className="w-3/12 text-end">{systemMetrics['system.cpu.count']}</div>
        </div>
        <div className="flex">
          <div className="w-9/12">System 1m Load average</div>
          <div className="w-3/12 text-end">
            <TextFormat value={systemMetrics['system.load.average.1m']} type="number" format={wholeNumberFormat} />
          </div>
        </div>
        <div className="flex">
          <div className="w-7/12">Process files max</div>
          <div className="w-5/12 text-end">
            <TextFormat value={systemMetrics['process.files.max']} type="number" format={wholeNumberFormat} />
          </div>
        </div>
        <div className="flex">
          <div className="w-4/12">Process files open</div>
          <div className="w-8/12 text-end">
            <TextFormat value={systemMetrics['process.files.open']} type="number" format={wholeNumberFormat} />
          </div>
        </div>
      </div>
    );
  }
}
