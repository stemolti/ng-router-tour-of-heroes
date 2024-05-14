import { Component } from '@angular/core';
import { ActivatedRoute, Router } from '@angular/router';
import { Crisis } from '../crisis';
import { DialogService } from '../../../dialog.service';
import { Observable } from 'rxjs';

@Component({
  selector: 'app-crisis-detail',
  templateUrl: './crisis-detail.component.html',
  styleUrl: './crisis-detail.component.css',
})
export class CrisisDetailComponent {
  crisis!: Crisis;
  editName = '';
  constructor(
    private router: Router,
    private route: ActivatedRoute,
    private dialogService: DialogService
  ) {}

  canDeactivate(): Observable<boolean> | boolean {
    // Allow synchronous navigation (`true`) if no crisis or the crisis is unchanged
    if (!this.crisis || this.crisis.name === this.editName) {
      return true;
    }
    // Otherwise ask the user with the dialog service and return its
    // observable which resolves to true or false when the user decides
    return this.dialogService.confirm('Discard changes?');
  }

  // Relative navigation back to the crises
  /* 
this.router.navigate(['../', { id: crisisId, foo: 'foo' }], { relativeTo: this.route });

Unexpected token. A constructor, method, accessor, or property was expected.ts(1068) Object is possibly 'undefined'.ts(2532)
*/
  gotoCrises() {
    const crisisId = this.crisis ? this.crisis.id : null;
    // Pass along the crisis id if available
    // so that the CrisisListComponent can select that crisis.
    // Add a totally useless `foo` parameter for kicks.
    // Relative navigation back to the crises
    this.router.navigate(['../', { id: crisisId, foo: 'foo' }], {
      relativeTo: this.route,
    });
  }

  cancel() {
    this.gotoCrises();
  }

  save() {
    this.crisis.name = this.editName;
    this.gotoCrises();
  }

  ngOnInit() {
    this.route.data
      .subscribe(data => {
        const crisis: Crisis = data['crisis'];
        this.editName = crisis.name;
        this.crisis = crisis;
      });
  }
}
