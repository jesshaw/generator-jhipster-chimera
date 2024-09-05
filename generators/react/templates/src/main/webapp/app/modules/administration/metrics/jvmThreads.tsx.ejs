import React from 'react';

import { ProgressBar } from 'primereact/progressbar';
import ThreadsModal from './threads-modal';
import { Button } from 'primereact/button';

export interface IJvmThreadsProps {
  jvmThreads: any;
  wholeNumberFormat: string;
}

export interface IJvmThreadsState {
  showModal: boolean;
  threadStats: {
    threadDumpAll: number;
    threadDumpRunnable: number;
    threadDumpTimedWaiting: number;
    threadDumpWaiting: number;
    threadDumpBlocked: number;
  };
}

export class JvmThreads extends React.Component<IJvmThreadsProps, IJvmThreadsState> {
  state: IJvmThreadsState = {
    showModal: false,
    threadStats: {
      threadDumpAll: 0,
      threadDumpRunnable: 0,
      threadDumpTimedWaiting: 0,
      threadDumpWaiting: 0,
      threadDumpBlocked: 0,
    },
  };

  countThreadByState() {
    if (this.props.jvmThreads.threads) {
      const threadStats = {
        threadDumpAll: 0,
        threadDumpRunnable: 0,
        threadDumpTimedWaiting: 0,
        threadDumpWaiting: 0,
        threadDumpBlocked: 0,
      };

      this.props.jvmThreads.threads.forEach(thread => {
        if (thread.threadState === 'RUNNABLE') {
          threadStats.threadDumpRunnable += 1;
        } else if (thread.threadState === 'WAITING') {
          threadStats.threadDumpWaiting += 1;
        } else if (thread.threadState === 'TIMED_WAITING') {
          threadStats.threadDumpTimedWaiting += 1;
        } else if (thread.threadState === 'BLOCKED') {
          threadStats.threadDumpBlocked += 1;
        }
      });

      threadStats.threadDumpAll =
        threadStats.threadDumpRunnable + threadStats.threadDumpWaiting + threadStats.threadDumpTimedWaiting + threadStats.threadDumpBlocked;

      this.setState({ threadStats });
    }
  }

  componentDidMount() {
    if (this.props.jvmThreads.threads) {
      this.countThreadByState();
    }
  }

  componentDidUpdate(prevProps) {
    if (this.props.jvmThreads.threads && this.props.jvmThreads.threads !== prevProps.jvmThreads.threads) {
      this.countThreadByState();
    }
  }

  openModal = () => {
    this.setState({
      showModal: true,
    });
  };

  handleClose = () => {
    console.log('Close');
    this.setState({
      showModal: false,
    });
  };

  render() {
    const { threadStats } = this.state;
    return (
      <div className="l-metrics">
        <b>Threads</b> (Total: {threadStats.threadDumpAll}){' '}
        <p>
          <span>Runnable</span> {threadStats.threadDumpRunnable}
        </p>
        <ProgressBar
          value={(threadStats.threadDumpRunnable * 100) / threadStats.threadDumpAll}
          displayValueTemplate={() => <>{`${threadStats.threadDumpRunnable}/${threadStats.threadDumpAll}`}</>}
        />
        <p>
          <span>Timed Waiting</span> ({threadStats.threadDumpTimedWaiting})
        </p>
        <ProgressBar
          value={(threadStats.threadDumpTimedWaiting * 100) / threadStats.threadDumpAll}
          displayValueTemplate={() => <>{`${threadStats.threadDumpTimedWaiting}/${threadStats.threadDumpAll}`}</>}
          color="#f97316"
        />
        <p>
          <span>Waiting</span> ({threadStats.threadDumpWaiting})
        </p>
        <ProgressBar
          value={(threadStats.threadDumpWaiting * 100) / threadStats.threadDumpAll}
          displayValueTemplate={() => <>{`${threadStats.threadDumpWaiting}/${threadStats.threadDumpAll}`}</>}
          color="#f97316"
        />
        <p>
          <span>Blocked</span> ({threadStats.threadDumpBlocked})
        </p>
        <ProgressBar
          value={(threadStats.threadDumpBlocked * 100) / threadStats.threadDumpAll}
          displayValueTemplate={() => <>{`${threadStats.threadDumpBlocked}/${threadStats.threadDumpAll}`}</>}
        />
        <Button size="small" onClick={this.openModal}>
          Expand
        </Button>
        <ThreadsModal handleClose={this.handleClose} showModal={this.state.showModal} threadDump={this.props.jvmThreads} />
      </div>
    );
  }
}
