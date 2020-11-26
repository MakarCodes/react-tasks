import React from 'react';
import ViewportSizeContextProvider from './Tasks/Task_3/ViewportSizeContextProvider';
import TaskOne from './Tasks/Task_1/taskOne';
import TaskTwo from './Tasks/Task_2/MultilangComponents';
import TaskThree from './Tasks/Task_3/TaskThree';
import TaskFour from './Tasks/Task_4/PaginationApp';
import TaskFive from './Tasks/Task_5/PasswordInput';

function App() {
  return (
    <div className='App'>
      <ViewportSizeContextProvider>
        <TaskOne />
        <TaskTwo />
        <TaskThree />
        <TaskFour />
        <TaskFive
          password='Kasztan1234'
          onSuccess={() => console.log('Good job, your password is CORRECT!')}
        />
      </ViewportSizeContextProvider>
    </div>
  );
}

export default App;
