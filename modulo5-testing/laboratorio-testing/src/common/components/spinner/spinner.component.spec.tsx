import * as React from 'react';
import { render, screen } from '@testing-library/react';
import * as reactPromiseTracker from 'react-promise-tracker/lib/trackerHook';
import { SpinnerComponent } from './spinner.component';

describe('common/components/confirm-dialog/confirm-dialog.component specs', () => {
  it('should display spinner when render it with true value', async () => {
    // Arrange

    // Act
    const usePromiseTrackerStub = jest
      .spyOn(reactPromiseTracker, 'usePromiseTracker')
      .mockImplementation(() => {
        return {
          promiseInProgress: true,
        };
      });
    render(
      <div>
        <SpinnerComponent />
      </div>
    );

    const dialogElement = await screen.queryByRole('presentation');

    // Assert
    expect(dialogElement).toBeInTheDocument();
  });

  it('should not display spinner when render it with false value', async () => {
    // Arrange

    // Act
    const usePromiseTrackerStub = jest
      .spyOn(reactPromiseTracker, 'usePromiseTracker')
      .mockImplementation(() => {
        return {
          promiseInProgress: false,
        };
      });
    render(
      <div>
        <SpinnerComponent />
      </div>
    );

    const dialogElement = await screen.queryByRole('presentation');

    // Assert
    expect(dialogElement).not.toBeInTheDocument();
  });
});
