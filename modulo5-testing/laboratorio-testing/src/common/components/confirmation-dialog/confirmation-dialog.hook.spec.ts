import { renderHook, act } from '@testing-library/react-hooks';
import { useConfirmationDialog } from './confirmation-dialog.hook';
import { Lookup } from '../../models/lookup';
describe('common/components/confirm-dialog/confirm-dialog.hook specs', () => {
  it('should return an object with initial values when it calls it', () => {
    // Arrange

    // Act
    const { result } = renderHook(() => useConfirmationDialog());

    // Assert
    expect(result.current.isOpen).toBeFalsy();
    expect(result.current.itemToDelete).toEqual({
      id: '',
      name: '',
    });
    expect(result.current.onAccept).toEqual(expect.any(Function));
    expect(result.current.onClose).toEqual(expect.any(Function));
    expect(result.current.onOpenDialog).toEqual(expect.any(Function));
  });
  it('should update isOpen and itemToDelete when it calls onOpenDialog', async () => {
    // Arrange
    const item: Lookup = {
      id: '0',
      name: 'Test item',
    };
    // Act
    const { result } = renderHook(() => useConfirmationDialog());

    act(() => {
      result.current.onOpenDialog(item);
    });

    // Assert
    expect(result.current.isOpen).toBeTruthy();
    expect(result.current.itemToDelete).toEqual({
      id: '0',
      name: 'Test item',
    });
  });

  it('should update isOpen when it calls onClose', async () => {
    // Arrange
    const item: Lookup = {
      id: '',
      name: '',
    };
    // Act
    const { result } = renderHook(() => useConfirmationDialog());

    act(() => {
      result.current.onOpenDialog(item);
      result.current.onClose();
    });

    // Assert
    expect(result.current.isOpen).toBeFalsy();
  });

  it('should update itemToDelete when it calls onAccept', async () => {
    // Arrange
    const item: Lookup = {
      id: '0',
      name: 'Test item',
    };
    // Act
    const { result } = renderHook(() => useConfirmationDialog());

    act(() => {
      result.current.onOpenDialog(item);
      result.current.onAccept();
    });

    // Assert
    expect(result.current.itemToDelete).toEqual({
      id: '',
      name: '',
    });
  });
});
