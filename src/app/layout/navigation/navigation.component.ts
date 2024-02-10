import { Component, OnInit, inject } from '@angular/core';
import { BreakpointObserver, Breakpoints } from '@angular/cdk/layout';
import { Observable } from 'rxjs';
import { map, shareReplay } from 'rxjs/operators';
import { AuthService } from '../../services/auth.service';
import { UserStoreService } from '../../services/user-store.service';
import { Router } from '@angular/router';

@Component({
  selector: 'app-navigation',
  templateUrl: './navigation.component.html',
  styleUrl: './navigation.component.css'
})
export class NavigationComponent implements OnInit{
  private breakpointObserver = inject(BreakpointObserver);

  isHandset$: Observable<boolean> = this.breakpointObserver.observe(Breakpoints.Handset)
    .pipe(
      map(result => result.matches),
      shareReplay()
    );

    public fullName:string ="";
    public role!:any
  
    constructor(private auth:AuthService,
      private userStore:UserStoreService,
      private router:Router
  
      ){}
    ngOnInit(): void {
      this.userStore.getFullNameFromStore().subscribe(val=>{
        const fullNameFromToken=this.auth.getFullNameFromToken();
        this.fullName=val ||fullNameFromToken;
      });
      this.userStore.getRoleFromStore().subscribe(val=>{
        const roleFromToken=this.auth.getRoleFromToken();
        this.role=val ||roleFromToken
      })
  
}
onLogOut(){
  localStorage.clear();
        this.router.navigate(['login']);
}
}
