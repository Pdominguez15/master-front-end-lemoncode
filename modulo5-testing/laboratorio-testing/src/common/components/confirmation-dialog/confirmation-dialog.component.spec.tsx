import * as React from 'react';
import { render, screen } from '@testing-library/react';
import userEvent from '@testing-library/user-event';
import {
  ConfirmationDialogComponent,
  Props,
} from './confirmation-dialog.component';

describe('common/components/confirm-dialog/confirm-dialog.component specs', () => {
  it('should not display dialog when isOpen is false', () => {
    // Arrange
    const props: Props = {
      isOpen: false,
      onAccept: jest.fn(),
      onClose: jest.fn(),
      title: '',
      labels: {
        closeButton: '',
        acceptButton: '',
      },
    };

    // Act
    render(<ConfirmationDialogComponent {...props} />);

    const dialogElement = screen.queryByRole('presentation');

    // Assert
    expect(dialogElement).not.toBeInTheDocument();
  });

  it('should display dialog when isOpen is true', () => {
    // Arrange
    const props: Props = {
      isOpen: true,
      onAccept: jest.fn(),
      onClose: jest.fn(),
      title: '',
      labels: {
        closeButton: '',
        acceptButton: '',
      },
    };

    // Act
    render(<ConfirmationDialogComponent {...props} />);

    const dialogElement = screen.getByRole('presentation');

    // Assert
    expect(dialogElement).toBeInTheDocument();
  });

  it('should display dialog title when it feeds with some title', () => {
    // Arrange
    const props: Props = {
      isOpen: true,
      onAccept: jest.fn(),
      onClose: jest.fn(),
      title: 'Test title',
      labels: {
        closeButton: '',
        acceptButton: '',
      },
    };

    // Act
    render(<ConfirmationDialogComponent {...props} />);

    const titleElement = screen.getByRole('heading');

    // Assert
    expect(titleElement.textContent).toEqual('Test title');
  });

  it('should display labels in button when it feeds with some label', () => {
    // Arrange
    const props: Props = {
      isOpen: true,
      onAccept: jest.fn(),
      onClose: jest.fn(),
      title: '',
      labels: {
        closeButton: 'Close Button',
        acceptButton: 'Accept Button',
      },
    };

    // Act
    render(<ConfirmationDialogComponent {...props} />);

    const buttonList = screen.getAllByRole('button');

    // Assert
    expect(buttonList[0].textContent).toEqual('Close Button');
    expect(buttonList[1].textContent).toEqual('Accept Button');
  });

  it('should display children property when it feeds with some children', () => {
    // Arrange
    const props: Props = {
      isOpen: true,
      onAccept: jest.fn(),
      onClose: jest.fn(),
      title: '',
      labels: {
        closeButton: 'Close Button',
        acceptButton: 'Accept Button',
      },
    };

    // Act
    render(
      <ConfirmationDialogComponent {...props}>
        <h1 role="myRole">Test</h1>
      </ConfirmationDialogComponent>
    );

    const childrenElement = screen.queryByRole('myRole');

    // Assert
    expect(childrenElement).toBeInTheDocument();
  });

  it('should call onClick property when it click on "Close button"', () => {
    // Arrange
    const props: Props = {
      isOpen: true,
      onAccept: jest.fn(),
      onClose: jest.fn(),
      title: '',
      labels: {
        closeButton: 'Close Button',
        acceptButton: 'Accept Button',
      },
    };
    // Act
    render(<ConfirmationDialogComponent {...props} />);

    const buttonList = screen.getAllByRole('button');

    userEvent.click(buttonList[0]);

    // Assert
    expect(props.onClose).toHaveBeenCalled();
  });

  it('should call onClick property when it click on "Accept button"', () => {
    // Arrange
    const props: Props = {
      isOpen: true,
      onAccept: jest.fn(),
      onClose: jest.fn(),
      title: '',
      labels: {
        closeButton: 'Close Button',
        acceptButton: 'Accept Button',
      },
    };
    // Act
    render(<ConfirmationDialogComponent {...props} />);

    const buttonList = screen.getAllByRole('button');

    userEvent.click(buttonList[1]);

    // Assert
    expect(props.onClose).toHaveBeenCalled();
  });
});
