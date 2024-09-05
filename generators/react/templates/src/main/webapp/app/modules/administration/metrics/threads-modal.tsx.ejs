import React from 'react';

import ThreadItem from './thread-item';
import { Dialog } from 'primereact/dialog';
import { Button } from 'primereact/button';
import { Badge } from 'primereact/badge';
import { InputText } from 'primereact/inputtext';

export interface IThreadsModalProps {
  showModal: boolean;
  handleClose: () => void;
  threadDump: any;
}

export interface IThreadsModalState {
  badgeFilter: string;
  searchFilter: string;
}

export class ThreadsModal extends React.Component<IThreadsModalProps, IThreadsModalState> {
  state: IThreadsModalState = {
    badgeFilter: '',
    searchFilter: '',
  };

  computeFilteredList = () => {
    const { badgeFilter, searchFilter } = this.state;
    let filteredList = this.props.threadDump.threads;
    if (badgeFilter !== '') {
      filteredList = filteredList.filter(t => t.threadState === badgeFilter);
    }
    if (searchFilter !== '') {
      filteredList = filteredList.filter(t => t.lockName && t.lockName.toLowerCase().includes(searchFilter.toLowerCase()));
    }
    return filteredList;
  };

  computeCounters = () => {
    let threadDumpAll = 0;
    let threadDumpRunnable = 0;
    let threadDumpWaiting = 0;
    let threadDumpTimedWaiting = 0;
    let threadDumpBlocked = 0;

    this.props.threadDump.threads.forEach(t => {
      switch (t.threadState) {
        case 'RUNNABLE':
          threadDumpRunnable++;
          break;
        case 'WAITING':
          threadDumpWaiting++;
          break;
        case 'TIMED_WAITING':
          threadDumpTimedWaiting++;
          break;
        case 'BLOCKED':
          threadDumpBlocked++;
          break;
        default:
          break;
      }
    });

    threadDumpAll = threadDumpRunnable + threadDumpWaiting + threadDumpTimedWaiting + threadDumpBlocked;
    return { threadDumpAll, threadDumpRunnable, threadDumpWaiting, threadDumpTimedWaiting, threadDumpBlocked };
  };

  getBadgeClass = threadState => {
    if (threadState === 'RUNNABLE') {
      return 'success';
    } else if (threadState === 'WAITING') {
      return 'info';
    } else if (threadState === 'TIMED_WAITING') {
      return 'warning';
    } else if (threadState === 'BLOCKED') {
      return 'danger';
    }
  };

  updateBadgeFilter = badge => () => this.setState({ badgeFilter: badge });

  updateSearchFilter = event => this.setState({ searchFilter: event.target.value });

  render() {
    const { showModal, handleClose, threadDump } = this.props;
    let counters = {} as any;
    let filteredList = null;
    if (threadDump && threadDump.threads) {
      counters = this.computeCounters();
      filteredList = this.computeFilteredList();
    }

    return (
      <Dialog
        header="Threads dump"
        visible={showModal}
        className="w-[90vw] md:w-[60vw]"
        onHide={() => handleClose()}
        footer={() => (
          <div>
            <Button label="Close" icon="pi pi-times" onClick={() => handleClose()} />
          </div>
        )}
      >
        <Button type="button" size="small" className="mb-2 mr-2" label="All" onClick={this.updateBadgeFilter('')}>
          <Badge value={counters.threadDumpAll || 0}></Badge>
        </Button>
        <Button
          type="button"
          severity="success"
          size="small"
          className="mb-2 mr-2"
          label="Runnable"
          onClick={this.updateBadgeFilter('RUNNABLE')}
        >
          <Badge value={counters.threadDumpRunnable || 0}></Badge>
        </Button>
        <Button
          type="button"
          severity="info"
          size="small"
          className="mb-2 mr-2"
          label="Waiting"
          onClick={this.updateBadgeFilter('WAITING')}
        >
          <Badge value={counters.threadDumpWaiting || 0}></Badge>
        </Button>
        <Button
          type="button"
          severity="warning"
          size="small"
          className="mb-2 mr-2"
          label="Timed Waiting"
          onClick={this.updateBadgeFilter('TIMED_WAITING')}
        >
          <Badge value={counters.threadDumpTimedWaiting || 0}></Badge>
        </Button>
        <Button
          type="button"
          severity="danger"
          size="small"
          className="mb-2 mr-2"
          label="Timed Waiting"
          onClick={this.updateBadgeFilter('BLOCKED')}
        >
          <Badge value={counters.threadDumpBlocked || 0}></Badge>
        </Button>
        <div>
          <InputText placeholder="Filter by Lock Name..." onChange={this.updateSearchFilter} />
        </div>
        <div className="p-2">
          {filteredList
            ? filteredList.map((threadDumpInfo, i) => (
                <div key={`dump-${i}`}>
                  <h5>
                    <Badge className="mr-2" severity={this.getBadgeClass(threadDumpInfo.threadState)} value={threadDumpInfo.threadState} />
                    {threadDumpInfo.threadName} (ID {threadDumpInfo.threadId})
                  </h5>
                  <ThreadItem threadDumpInfo={threadDumpInfo} />
                  <div>
                    <table className="l-table">
                      <thead>
                        <tr>
                          <th>Blocked Time</th>
                          <th>Blocked Count</th>
                          <th>Waited Time</th>
                          <th>Waited Count</th>
                          <th>Lock Name</th>
                        </tr>
                      </thead>
                      <tbody>
                        <tr key={threadDumpInfo.lockName}>
                          <td>{threadDumpInfo.blockedTime}</td>
                          <td>{threadDumpInfo.blockedCount}</td>
                          <td>{threadDumpInfo.waitedTime}</td>
                          <td>{threadDumpInfo.waitedCount}</td>
                          <td className="thread-dump-modal-lock" title={threadDumpInfo.lockName}>
                            <code className="text-pink-500">{threadDumpInfo.lockName}</code>
                          </td>
                        </tr>
                      </tbody>
                    </table>
                  </div>
                </div>
              ))
            : null}
        </div>
      </Dialog>
    );
  }
}

export default ThreadsModal;
