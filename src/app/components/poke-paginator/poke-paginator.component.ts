import {
  Component,
  Input,
  Output,
  EventEmitter,
  OnChanges,
  SimpleChanges,
} from "@angular/core"

@Component({
  selector: "poke-paginator",
  template: `
    <div class="poke-paginator">
      <button (click)="setPreviousPage()" class="poke-paginator--previous">
        <img
          src="../../../assets/icons/icon_back-arrow.svg"
          alt="<"
          loading="lazy"
        />
      </button>
      <span class="poke-paginator__total-pages">{{ formatTotalPages() }}</span>
      <button (click)="setNextPage()" class="poke-paginator--next">
        <img
          src="../../../assets/icons/icon_back-arrow.svg"
          alt=">"
          loading="lazy"
        />
      </button>
    </div>
  `,
  styleUrls: ["./poke-paginator.component.scss"],
})
export class PokePaginatorComponent implements OnChanges {
  @Input() totalPages:number = 1
  @Input() currentPage:number = 0
  @Output() setPage = new EventEmitter()

  constructor() {}

  ngOnChanges(changes: SimpleChanges){
    if(changes.totalPages?.currentValue) {
      this.currentPage = 0
    }
  }
  setPreviousPage() {
    const isFristPage: boolean = this.currentPage == 0
    !isFristPage && this.setCurrentPage(this.currentPage - 1)
  }
  setNextPage() {
    const isLastPage: boolean = this.currentPage == this.totalPages - 1

    !isLastPage && this.setCurrentPage(this.currentPage + 1)
  }
  setCurrentPage(page) {
    this.currentPage = page
    this.setPage.emit(this.currentPage)
  }
  formatTotalPages() {
    const deal = this.totalPages == 1 ? "página" : "páginas"
    return `${this.currentPage + 1} de ${this.totalPages} ${deal}`
  }
}
