import { Injectable } from '@angular/core'
import { ComponentStore, tapResponse } from '@ngrx/component-store'
import { ApolloAngularSDK, CorePaging, CorePagingInput, Log } from '@nxpm-lumberjack/web/core/data-access'
import { WebUtilLogService } from '@nxpm-lumberjack/web/util/log'
import { switchMap, tap } from 'rxjs/operators'

interface LogListState {
  items?: Log[]
  open?: {}
  loading?: boolean
  paging: CorePaging
}

@Injectable()
export class LogListStore extends ComponentStore<LogListState> {
  constructor(private readonly sdk: ApolloAngularSDK, private readonly log: WebUtilLogService) {
    super({ paging: { limit: 10, skip: 0 }, open: {} })
    this.loadItemsEffect(this.paging$)
  }

  readonly paging$ = this.select(this.state$, (s) => s.paging)
  readonly items$ = this.select(this.state$, (s) => s.items)
  readonly open$ = this.select(this.state$, (s) => s.open)
  readonly vm$ = this.select(this.items$, this.paging$, this.open$, (items, paging, open) => ({ items, paging, open }))

  readonly setLimit = this.updater<number>((state, limit) => ({
    ...state,
    paging: { ...state.paging, limit },
  }))

  readonly toggleItemEffect = this.updater<string>((state, itemId) => ({
    ...state,
    open: { ...state.open, [itemId]: !state.open[itemId] },
  }))

  readonly loadItemsEffect = this.effect<CorePagingInput>((input$) =>
    input$.pipe(
      tap(() => this.patchState({ loading: true })),
      switchMap(({ skip, limit }) =>
        this.sdk.adminLogs({ input: { skip, limit } }).pipe(
          tapResponse(
            (res) => this.patchState({ items: res.data?.items, paging: res.data.count }),
            (e: any) => this.log.error('Error fetching Logs', e),
          ),
        ),
      ),
    ),
  )
}