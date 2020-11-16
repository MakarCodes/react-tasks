import React from 'react';
import { IUser } from '../dataTypes';
import styles from './PaginationTable.module.css';
interface IProps {
  dataEntries: Array<IUser>;
}

const PaginationTable: React.FC<IProps> = ({ dataEntries }) => {
  const renderData = () =>
    dataEntries.map(user => (
      <div key={user.id} className={styles.tableStyle}>
        <p>
          {user.id}
          {'. '}
        </p>
        <p>{user.title}</p>
      </div>
    ));
  return (
    <div>
      <div className={`${styles.tableStyle} ${styles.headStyle}`}>
        <p>No.</p>
        <p>Description</p>
      </div>
      <div data-testid='users'>{renderData()}</div>
    </div>
  );
};

export default PaginationTable;
