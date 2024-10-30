import { Component, OnInit } from '@angular/core';
import { Variables } from '../services/variables.service';
import { StorageService } from '../services/storage.service'; // Import it here..
import { DataService } from '../services/data.service'; // Import it here...
import { LoginService } from '../services/login.service'; // Import it here...


@Component({
  selector: 'app-tab1',
  templateUrl: 'tab1.page.html',
  styleUrls: ['tab1.page.scss']
})
export class Tab1Page implements OnInit {
  pageTitle = this. Variables.appId; 
  heroes: any = [];

  constructor(
    public Variables: Variables,
    private storage: StorageService, // ...and inject it here
    private _data: DataService, // ...and inject it here
    private _login: LoginService // ...and inject it here
  ) {
    Variables.appId = "App ID Changed";

  }
  ngOnInit(): void {
    const data = {
      route: 'get-heroes',
    };

    this._data.get_data(this.Variables.object_to_query(data)).subscribe (
      (resp) => {
        if(resp && 'heroes' in resp) {
          this.heroes = resp.heroes;
          this.storage.set('heroes', this.heroes);
        } else {
          this._data.handle_server_err();
        }
      },
      (err) => {
        this.storage.get('heroes').then((val) => {
          if (val) {
            this.heroes = val;
          } else {
            this._data.handle_failed_conn();
          }
        });
      }
    );
  }
}
