/**
 * 控制页面
 *
 *
 * @date     2017-11-07
 * @author   liuzheng <liuzheng712@gmail.com>
 */
import {Component, OnInit} from '@angular/core';
import {AppService} from '../app.service';
import {DataStore, User} from '../globals';

@Component({
  selector: 'app-controllpage',
  templateUrl: './controlpage.component.html',
  styleUrls: ['./controlpage.component.css'],
  providers: [AppService]

})
export class ControlPageComponent implements OnInit {
  DataStore = DataStore;
  User = User;

  constructor() {
  }

  ngOnInit() {
  }

}
