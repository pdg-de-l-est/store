import Controller from '@ember/controller';
import { tracked } from "@glimmer/tracking";

export default class StoreDeleteSectionController extends Controller {
  @tracked taille;
  @tracked products;
  @tracked activeImg;

  get percent(){
    return 100-(this.products.length*100/this.taille);
  };
}
