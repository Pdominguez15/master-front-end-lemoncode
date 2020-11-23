import * as apiModel from './api/project.api-model';
import * as viewModel from './project.vm';
import { mapProjectFromApiToVm } from './project.mapper';

describe('pods/project/project.mapper specs', () => {
  it('should return empty project when it feeds undefined', () => {
    // Arrange
    const project: apiModel.Project = undefined;

    // Act
    const result: viewModel.Project = mapProjectFromApiToVm(project);

    // Assert
    expect(result).toEqual({
      id: '',
      name: '',
      externalId: '',
      comments: '',
      isActive: false,
      employees: [],
    });
  });

  it('should return empty project when it feeds null', () => {
    // Arrange
    const project: apiModel.Project = null;

    // Act
    const result: viewModel.Project = mapProjectFromApiToVm(project);

    // Assert
    expect(result).toEqual({
      id: '',
      name: '',
      externalId: '',
      comments: '',
      isActive: false,
      employees: [],
    });
  });

  it('should return empty project when it feeds empty object', () => {
    // Arrange
    const project: apiModel.Project = {
      id: '',
      name: '',
      externalId: '',
      comments: '',
      isActive: false,
      employees: [],
    };

    // Act
    const result: viewModel.Project = mapProjectFromApiToVm(project);

    // Assert
    expect(result).toEqual({
      id: '',
      name: '',
      externalId: '',
      comments: '',
      isActive: false,
      employees: [],
    });
  });

  it('should return mapped project when it feed project with data', () => {
    // Arrange
    const project: apiModel.Project = {
      id: '1',
      name: 'Project test name',
      externalId: '123456',
      comments: 'Project test comment',
      isActive: false,
      employees: [
        {
          id: '1',
          isAssigned: false,
          employeeName: 'Employee test name',
        },
      ],
    };

    // Act
    const result: viewModel.Project = mapProjectFromApiToVm(project);

    // Assert
    expect(result).toEqual({
      id: '1',
      name: 'Project test name',
      externalId: '123456',
      comments: 'Project test comment',
      isActive: false,
      employees: [
        {
          id: '1',
          isAssigned: false,
          employeeName: 'Employee test name',
        },
      ],
    });
  });
});
