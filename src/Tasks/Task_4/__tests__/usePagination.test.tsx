import { renderHook, act } from '@testing-library/react-hooks';
import usePagination from '../usePagination/usePagination';

describe('usePagination hook works correctly', () => {
  const mockedUsers = [
    { userId: 1, id: 1, title: 'First user title', body: 'First user body' },
    { userId: 2, id: 2, title: 'Second user title', body: 'Second user body' },
    { userId: 3, id: 3, title: 'Third user title', body: 'Third user body' },
    { userId: 4, id: 4, title: 'Fourth user title', body: 'Fourth user body' },
    { userId: 5, id: 5, title: 'Fifth user title', body: 'Fifth user body' },
  ];
  it('if function for selecting different pages goToPage works as expected', () => {
    const { result } = renderHook(() => usePagination(mockedUsers));
    const pageNumber: number = 3;
    act(() => {
      result.current[1].goToPage(pageNumber);
    });
    expect(result.current[0].actualPageIdx).toBe(pageNumber);
  });
  it('if function for selecting first page goToFirstPage works as expected', () => {
    const { result } = renderHook(() => usePagination(mockedUsers));
    act(() => {
      result.current[1].goToFirstPage();
    });
    expect(result.current[0].actualPageIdx).toBe(1);
  });
  it('if function for selecting last page goToLastPage works as expected', () => {
    const { result } = renderHook(() => usePagination(mockedUsers));
    act(() => {
      result.current[1].goToLastPage();
    });
    expect(result.current[0].actualPageIdx).toBe(result.current[0].lastPageIdx);
  });
  it('if function for selecting next page goToNextPage works as expected', () => {
    const { result } = renderHook(() => usePagination(mockedUsers));
    act(() => {
      result.current[1].goToPage(2);
      result.current[1].goToNextPage();
    });
    expect(result.current[0].actualPageIdx).toBe(3);
  });
  it('if function for selecting previous page goToPreviousPage works as expected', () => {
    const { result } = renderHook(() => usePagination(mockedUsers));
    act(() => {
      result.current[1].goToPage(2);
      result.current[1].goToPreviousPage();
    });
    expect(result.current[0].actualPageIdx).toBe(1);
  });

  it('if function entriesOnSelectedPage works as expected', () => {
    const elementsPerPage = 2;
    const { result } = renderHook(() =>
      usePagination(mockedUsers, elementsPerPage)
    );
    act(() => {
      result.current[1].goToLastPage();
    });
    expect(result.current[0].actualPageIdx).toBe(3);
    expect(result.current[0].entriesOnSelectedPage().length).toBe(1);
  });

  it('if isBusy is true while function is on going', () => {
    const { result } = renderHook(() => usePagination(mockedUsers));
    act(() => {
      result.current[1].goToPage(2);
    });
    expect(result.current[0].isBusy).toBe(true);
  });

  it('if isBusy is false when function is done', () => {
    const { result } = renderHook(() => usePagination(mockedUsers));
    act(() => {
      result.current[1].goToPage(2);
    });
    setTimeout(() => expect(result.current[0].isBusy).toBe(false), 333);
  });
});
