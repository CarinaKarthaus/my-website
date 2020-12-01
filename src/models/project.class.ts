export class Project {
  title: string;
  details: string;
  app_link: string;
  github_link: string;
  img: string;
  category: string;

  constructor(obj?: any) {
    this.title = obj ? obj.title : '';
    this.details = obj ? obj.details : '';
    this.app_link = obj ? obj.app_link : '';
    this.github_link = obj ? obj.github_link : '';
    this.img = obj ? obj.img : '';
    this.category = obj ? obj.category : '';
  }

}
