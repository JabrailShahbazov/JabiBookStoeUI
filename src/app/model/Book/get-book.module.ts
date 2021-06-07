
export class GetBookModule {
  items: [bookWiew];
  totalCount: number;

}

// tslint:disable-next-line:class-name
export class bookWiew {
  id: number;
  creationTime: string;
  creatorId: string;
  lastModificationTime: string;
  lastModifierId: string;
  name: string;
  type: number;
  publishDate: string;
  description: string;
  authorId: number;
  authorName: string;
}
