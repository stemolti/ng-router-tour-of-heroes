import { Component, Input, OnInit } from '@angular/core';
import { ActivatedRoute, ParamMap } from '@angular/router';
import { HeroService } from '../../heroes/hero.service';
import { Location } from '@angular/common';
import { Hero } from '../../heroes/hero.entity';
import { Observable, switchMap } from 'rxjs';
@Component({
  selector: 'app-hero-detail',
  templateUrl: './hero-detail.component.html',
  styleUrl: './hero-detail.component.css'
})
export class HeroDetailComponent implements OnInit {
[x: string]: any;
  
   constructor( private route: ActivatedRoute,
    private heroService: HeroService,
    private location: Location
  ) {}

  hero!: Hero;

  getHero(): void {
    this.route.paramMap.pipe(
      switchMap((params: ParamMap) =>
        this.heroService.getHero(Number(params.get('id')!)))
    ).subscribe((hero) => {
      this.hero = hero;
    });
  }

  goBack(): void {
  this.location.back();
}

ngOnInit() {
this.getHero();
}

}
