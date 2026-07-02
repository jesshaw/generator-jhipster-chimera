import React from 'react';
import { TextFormat, nanToZero } from 'react-jhipster';

export interface ICacheMetricsProps {
  cacheMetrics: any;
  twoDigitAfterPointFormat: string;
}

export class CacheMetrics extends React.Component<ICacheMetricsProps> {
  render() {
    const { cacheMetrics, twoDigitAfterPointFormat } = this.props;
    return (
      <div className="grid min-w-96 grid-cols-1 items-start gap-5 overflow-auto">
        <h3>Cache statistics</h3>
        <table className="l-table">
          <thead>
            <tr>
              <th>Cache Name</th>
              <th>Cache Hits</th>
              <th>Cache Misses</th>
              <th>Cache Gets</th>
              <th>Cache Hit %</th>
              <th>Cache Miss %</th>
            </tr>
          </thead>
          <tbody>
            {Object.keys(cacheMetrics).map(key => (
              <tr key={key}>
                <td>{key}</td>
                <td>{cacheMetrics[key]['cache.gets.hit']}</td>
                <td>{cacheMetrics[key]['cache.gets.miss']}</td>
                <td>{cacheMetrics[key]['cache.gets.miss'] + cacheMetrics[key]['cache.gets.hit']}</td>
                <td>
                  <TextFormat
                    value={nanToZero(
                      (100 * cacheMetrics[key]['cache.gets.hit']) /
                        (cacheMetrics[key]['cache.gets.hit'] + cacheMetrics[key]['cache.gets.miss']),
                    )}
                    type="number"
                    format={twoDigitAfterPointFormat}
                  />
                </td>
                <td>
                  <TextFormat
                    value={nanToZero(
                      (100 * cacheMetrics[key]['cache.gets.miss']) /
                        (cacheMetrics[key]['cache.gets.hit'] + cacheMetrics[key]['cache.gets.miss']),
                    )}
                    type="number"
                    format={twoDigitAfterPointFormat}
                  />
                </td>
              </tr>
            ))}
          </tbody>
        </table>
      </div>
    );
  }
}
