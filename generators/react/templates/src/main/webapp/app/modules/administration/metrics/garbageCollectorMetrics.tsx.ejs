import React from 'react';
import { TextFormat } from 'react-jhipster';
import { ProgressBar } from 'primereact/progressbar';

export interface IGarbageCollectorMetricsProps {
  garbageCollectorMetrics: any;
  wholeNumberFormat: string;
}

export class GarbageCollectorMetrics extends React.Component<IGarbageCollectorMetricsProps> {
  render() {
    const { garbageCollectorMetrics, wholeNumberFormat } = this.props;
    return (
      <div className="grid grid-cols-1 gap-5 md:grid-cols-3">
        <h3 className="md:col-span-3">Garbage Collection</h3>

        <div>
          <span>
            GC Live Data Size/GC Max Data Size (
            <TextFormat value={garbageCollectorMetrics['jvm.gc.live.data.size'] / 1048576} type={'number'} format={wholeNumberFormat} />M /{' '}
            <TextFormat value={garbageCollectorMetrics['jvm.gc.max.data.size'] / 1048576} type={'number'} format={wholeNumberFormat} />
            M)
          </span>
          <ProgressBar
            aria-valuenow={(100 * garbageCollectorMetrics['jvm.gc.live.data.size']) / garbageCollectorMetrics['jvm.gc.max.data.size']}
            value={Math.round((100 * garbageCollectorMetrics['jvm.gc.live.data.size']) / garbageCollectorMetrics['jvm.gc.max.data.size'])}
          />
        </div>
        <div>
          <span>
            GC Memory Promoted/GC Memory Allocated (
            <TextFormat value={garbageCollectorMetrics['jvm.gc.memory.promoted'] / 1048576} type={'number'} format={wholeNumberFormat} />M /{' '}
            <TextFormat value={garbageCollectorMetrics['jvm.gc.memory.allocated'] / 1048576} type={'number'} format={wholeNumberFormat} />
            M)
          </span>
          <ProgressBar
            aria-valuenow={(100 * garbageCollectorMetrics['jvm.gc.memory.promoted']) / garbageCollectorMetrics['jvm.gc.memory.allocated']}
            value={Math.round(
              (100 * garbageCollectorMetrics['jvm.gc.memory.promoted']) / garbageCollectorMetrics['jvm.gc.memory.allocated'],
            )}
          />
        </div>
        <div className="grid grid-cols-6">
          <div className="col-span-5">Classes loaded</div>
          <div>{garbageCollectorMetrics.classesLoaded}</div>
          <div className="col-span-5">Classes unloaded</div>
          <div>{garbageCollectorMetrics.classesUnloaded}</div>
        </div>
        <table className="l-table md:col-span-3">
          <thead>
            <tr>
              <th />
              <th className="text-end">Count</th>
              <th className="text-end">Mean</th>
              <th className="text-end">Min</th>
              <th className="text-end">p50</th>
              <th className="text-end">p75</th>
              <th className="text-end">p95</th>
              <th className="text-end">p99</th>
              <th className="text-end">Max</th>
            </tr>
          </thead>
          <tbody>
            <tr>
              <td>jvm.gc.pause</td>
              <td className="text-end">
                <TextFormat value={garbageCollectorMetrics.count} type={'number'} format={'0,0.[000]'} />
              </td>
              <td className="text-end">
                <TextFormat value={garbageCollectorMetrics.mean} type={'number'} format={'0,0.[000]'} />
              </td>
              <td className="text-end">
                <TextFormat value={garbageCollectorMetrics['0.0']} type={'number'} format={'0,0.[000]'} />
              </td>
              <td className="text-end">
                <TextFormat value={garbageCollectorMetrics['0.5']} type={'number'} format={'0,0.[000]'} />
              </td>
              <td className="text-end">
                <TextFormat value={garbageCollectorMetrics['0.75']} type={'number'} format={'0,0.[000]'} />
              </td>
              <td className="text-end">
                <TextFormat value={garbageCollectorMetrics['0.95']} type={'number'} format={'0,0.[000]'} />
              </td>
              <td className="text-end">
                <TextFormat value={garbageCollectorMetrics['0.99']} type={'number'} format={'0,0.[000]'} />
              </td>
              <td className="text-end">
                <TextFormat value={garbageCollectorMetrics.max} type={'number'} format={'0,0.[000]'} />
              </td>
            </tr>
          </tbody>
        </table>
      </div>
    );
  }
}
