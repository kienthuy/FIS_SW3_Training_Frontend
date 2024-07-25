import { Routes } from '@angular/router';


// pages
import { AppIconsComponent } from './icons/icons.component';
import { AppSamplePageComponent } from './sample-page/sample-page.component';
import { DemoChartComponent } from './demo-chart/demo-chart.component';
import { ChartComponent } from './chart/chart.component';
import { ContactFormComponent } from './contact-form/contact-form.component';
import { NewsComponent } from './news/news.component';

export const ExtraRoutes: Routes = [
  {
    path: '',
    children: [
      {
        path: 'icons',
        component: AppIconsComponent,
      },
      {
        path: 'sample-page',
        component: AppSamplePageComponent,
      },
      {
        path: 'demo-chart',
        component: DemoChartComponent,
      },
      {
        path: 'chart',
        component: ChartComponent,
      },
      {
        path: 'contact-form',
        component: ContactFormComponent,
      },
      {
        path: 'news',
        component: NewsComponent,
      },
    
    ],
  },
];
