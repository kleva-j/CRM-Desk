import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-sidebar',
  templateUrl: './sidebar.component.html',
  styleUrls: ['./sidebar.component.scss']
})
export class SidebarComponent implements OnInit {
  opened = true;

  activeTab = 'Dashboard';

  sideMenuItems = [
    { title: 'Dashboard', iconName: 'dashboard', path: 'project/dashboard' },
    { title: 'Projects', iconName: 'notes', path: 'project/jobsearch' },
    { title: 'Tasks', iconName: 'format_list_bulleted', path: 'task' },
    { title: 'Messages', iconName: 'question_answer', path: 'messages' },
    { title: 'Reports', iconName: 'equalizer', path: 'reports' },
  ];

  constructor() { }

  ngOnInit() { }

  setActiveTab(event) {
    console.dir(event);
    this.activeTab = event.target.textContent || '';
  }

  toggleSidebar(state) {
    this.opened = state;
  }
}
