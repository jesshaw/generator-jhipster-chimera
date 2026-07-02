import React from 'react';

export interface IThreadItemProps {
  threadDumpInfo: any;
}

export interface IThreadItemState {
  collapse: boolean;
}

export class ThreadItem extends React.Component<IThreadItemProps, IThreadItemState> {
  state: IThreadItemState = {
    collapse: false,
  };

  toggleStackTrace = () => {
    this.setState({
      collapse: !this.state.collapse,
    });
  };

  render() {
    const { threadDumpInfo } = this.props;

    return (
      <div>
        <a onClick={this.toggleStackTrace} className="text-pink-500">
          {this.state.collapse ? <span>Hide StackTrace</span> : <span>Show StackTrace</span>}
        </a>
        <div className={this.state.collapse ? '' : 'hidden'}>
          <pre className="overflow-x-auto rounded-lg bg-gray-900 p-6 text-gray-100 shadow-lg">
            {Object.entries(threadDumpInfo.stackTrace).map(([stK, stV]: [string, any]) => (
              <samp key={`detail-${stK}`} className="block">
                {stV.className}.{stV.methodName}
                <code className="font-mono text-base leading-relaxed text-pink-500">
                  ({stV.fileName}:{stV.lineNumber})
                </code>
              </samp>
            ))}
          </pre>
        </div>
      </div>
    );
  }
}

export default ThreadItem;
