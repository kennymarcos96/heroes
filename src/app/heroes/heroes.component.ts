import { Component} from '@angular/core';
import { HEROES } from './../mock-heroes';
import { Hero } from '../hero.model';

@Component({
  selector: 'app-heroes',
  templateUrl: './heroes.component.html',
  styleUrls: ['./heroes.component.scss']
})
export class HeroesComponent  {

   heroes = HEROES;
   SelectedHero?: Hero;

   onSelect(hero: Hero): void {
    this.SelectedHero = hero;
   }

}
