import { useFocusEffect } from '@react-navigation/core'
import { useCallback } from 'react'
import type { QueryKey, UseQueryOptions, UseQueryResult } from '@tanstack/react-query'
import { useQuery } from '@tanstack/react-query'

/**
 * Returns the useQuery from @tanstack/react-query.
 * Based on the discussion - https://github.com/TanStack/query/discussions/296
 *
 * @remarks
 * Use this only when the query should be re-fetched on focus
 *
 */
export function useReactNavigationQuery<
  TQueryFnData = unknown,
  TError = unknown,
  TData = TQueryFnData,
  TQueryKey extends QueryKey = QueryKey
>(options: UseQueryOptions<TQueryFnData, TError, TData, TQueryKey>): UseQueryResult<TData, TError> {
  const useQueryReturn = useQuery(options)

  useFocusEffect(
    useCallback(() => {
      if (
        ((options?.refetchOnWindowFocus && useQueryReturn.isStale) || options?.refetchOnWindowFocus === 'always') &&
        options.enabled !== false
      )
        useQueryReturn.refetch()
      // eslint-disable-next-line react-hooks/exhaustive-deps
    }, [options?.enabled, options?.refetchOnWindowFocus])
  )

  return useQueryReturn
}
